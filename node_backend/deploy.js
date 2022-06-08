import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import * as backend from "../reach_sc/build/index.main.mjs";
import { promises as fs } from "fs";

const onLiveChain = () => {
  return process.env.network === "MainNet" || process.env.network === "TestNet";
};

const script = async () => {
  const reach = loadStdlib("ALGO");
  if (onLiveChain()) {
    reach.setProviderByName(process.env.network);
  }

  const backendAcc = await reach.newAccountFromMnemonic(process.env.mnemonic);

  if (!onLiveChain() && (await reach.canFundFromFaucet())) {
    await reach.fundFromFaucet(backendAcc, 10000000);
  }

  const ctc = backendAcc.contract(backend);

  await reach.withDisconnect(() =>
    ctc.participants.PoolCreator({
      log: (...args) => console.log(...args),
      disconnect: () => reach.disconnect(null),
      relativeDeadlineSecs: parseInt(process.env.lotteryDurationSec),
    })
  );

  const appID = (await ctc.getInfo()).toNumber();
  console.log(`The contract is deployed as = ${appID}`);

  await fs.writeFile(process.env.appID_filename, appID.toString());
};

dotenv.config({ path: "../.env" });
script();
