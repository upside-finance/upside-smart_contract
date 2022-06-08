# This sample is provided for demonstration purposes only.
# It is not intended for production use.
# This example does not constitute trading advice.
import os
from dotenv import dotenv_values
from algosdk import mnemonic, account
from algofi.v1.client import AlgofiTestnetClient, AlgofiMainnetClient
from algofi.utils import (
    get_ordered_symbols,
    prepare_payment_transaction,
    get_new_account,
)

from example_utils import print_market_state, print_user_state
import sys


### run setup.py before proceeding. make sure the .env file is set with mnemonic + storage_mnemonic.

# Hardcoding account keys is not a great practice. This is for demonstration purposes only.
# See the README & Docs for alternative signing methods.
# my_path = os.path.abspath(os.path.dirname(__file__))
# ENV_PATH = os.path.join(my_path, ".env")

# load user passphrase
env = dotenv_values("../.env")
sender = mnemonic.to_public_key(env["mnemonic"])
key = mnemonic.to_private_key(env["mnemonic"])


# # IS_MAINNET
IS_MAINNET = True if env["network"] == "MainNet" else False
client = (
    AlgofiMainnetClient(user_address=sender)
    if IS_MAINNET
    else AlgofiTestnetClient(user_address=sender)
)

all_symbols = client.get_active_ordered_symbols()
print(all_symbols)
symbol = "ALGO"

# # # print initial state
print("~" * 100)
print("Initial State")
print("~" * 100)
print_market_state(client.get_market(symbol))
print_user_state(client, symbol, sender)

asset_balance = client.get_user_balance(
    client.get_market(symbol).get_asset().get_underlying_asset_id()
)
if asset_balance == 0:
    raise Exception("user has no balance of asset " + symbol)

print("~" * 100)
print("Processing mint transaction")
print("~" * 100)
print("Processing transaction for asset = %s" % (symbol))
amount = int(sys.argv[1])
txn = client.prepare_mint_transactions(symbol, amount, sender)
txn.sign_with_private_key(sender, key)
txn.submit(client.algod, wait=True)

# # # print final state
print("~" * 100)
print("Final State")
print("~" * 100)
print_market_state(client.get_market(symbol))
print_user_state(client, symbol, sender)

sys.stdout.flush()
