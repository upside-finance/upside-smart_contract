import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import * as backend from "../reach_sc/build/index.main.mjs";

const script = async () => {
  const reach = loadStdlib("ALGO");
  reach.setProviderByEnv({
    ALGO_TOKEN:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ALGO_SERVER: "http://localhost",
    ALGO_PORT: 4001,
    ALGO_INDEXER_TOKEN:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ALGO_INDEXER_SERVER: "http://localhost",
    ALGO_INDEXER_PORT: 8980,
  });

  const backendAcc = await reach.newAccountFromMnemonic(process.env.mnemonic);
  const fundingAcc = await reach.newAccountFromMnemonic(
    "cost tell employ ship clog number boss rare vessel elite before vanish deer taxi because month wise own stock walk cruise link jelly about mistake"
  );
  await reach.transfer(fundingAcc, backendAcc, 10000000);
  const gil = await reach.launchToken(fundingAcc, "GIL COIN", "GIL");
  console.log("New token ID: " + gil.id.toNumber());
  await backendAcc.tokenAccept(gil.id);
  await gil.mint(backendAcc, 20000);

  const ctc = backendAcc.contract(backend);

  let salt;
  const random = () => {
    salt = reach.randomUInt();
    return salt;
  };
  const initRN = reach.randomUInt();
  const depositToken = gil.id;
  const vaultAmt = 2300;
  const relativeDeadlineSecs = 180;

  ctc.participants.PoolCreator({
    log: (...args) => console.log(...args),
    random: random,
    initRN: initRN,
    depositToken: depositToken,
    vaultAmt: vaultAmt,
    relativeDeadlineSecs: relativeDeadlineSecs,
  });

  const appID = await ctc.getInfo();
  console.log(`The contract is deployed as = ${JSON.stringify(appID)}`);
};

dotenv.config();
script();
