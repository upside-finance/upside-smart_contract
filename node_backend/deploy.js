import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import * as backend from "../reach_sc/build/index.main.mjs";
import { promises as fs } from "fs";

const script = async () => {
  const reach = loadStdlib("ALGO");

  const backendAcc = await reach.newAccountFromMnemonic(process.env.mnemonic);

  let depositToken;
  const vaultAmt = 2300;
  const relativeDeadlineSecs = 120;

  if (process.env.network === "devnet") {
    if (await reach.canFundFromFaucet()) {
      await reach.fundFromFaucet(backendAcc, 10000000);
    }

    const gil = await reach.launchToken(backendAcc, "GIL COIN", "GIL");
    console.log("New token ID: " + gil.id.toNumber());
    await backendAcc.tokenAccept(gil.id);
    await gil.mint(backendAcc, 20000);
    depositToken = gil.id;
  }

  const ctc = backendAcc.contract(backend);

  await reach.withDisconnect(() =>
    ctc.participants.PoolCreator({
      log: (...args) => console.log(...args),
      disconnect: () => reach.disconnect(null),
      depositToken: depositToken,
      vaultAmt: vaultAmt,
      relativeDeadlineSecs: relativeDeadlineSecs,
    })
  );

  const appID = (await ctc.getInfo()).toNumber();
  console.log(`The contract is deployed as = ${appID}`);

  await fs.writeFile(process.env.appID_filename, appID.toString());
};

dotenv.config();
script();
