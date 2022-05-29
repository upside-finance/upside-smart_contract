import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import * as backend from "../reach_sc/build/index.main.mjs";
import { promises as fs } from "fs";

const script = async () => {
  const reach = loadStdlib("ALGO");

  const appID = await fs.readFile(process.env.appID_filename, {
    encoding: "utf8",
  });

  const backendAcc = await reach.newAccountFromMnemonic(process.env.mnemonic);
  const ctc = backendAcc.contract(backend, appID);

  const networkSecsPromise = reach.getNetworkSecs();
  const deadlineSecsPromise = ctc.unsafeViews.UserView.deadlineSecs();

  const [networkSecs, deadlineSecs] = (
    await Promise.all([networkSecsPromise, deadlineSecsPromise])
  ).map((res) => res.toNumber());

  console.log("Network time: " + networkSecs);
  console.log("Lottery deadline: " + deadlineSecs);

  if (networkSecs < deadlineSecs) {
    const testAcc = await reach.newTestAccount(1000000);
    const ctc_test = testAcc.contract(backend, appID);

    await testAcc.tokenAccept(237);
    await reach.transfer(backendAcc, testAcc, 200, 237);

    await ctc_test.apis.UserAPI.deposit(reach.bigNumberify(5));
  } else {
    const requestingRN = await ctc.unsafeViews.UserView.requestingRN();

    if (requestingRN) {
      const runningProb = (
        await ctc.unsafeViews.UserView.runningProb()
      ).toNumber();
      console.log("Probability array size = " + runningProb);

      const rn = reach.bigNumberify(
        Math.floor(Math.random() * (runningProb + 1))
      );
      await ctc.apis.UserAPI.supplyRN(rn);
      console.log("Supplying random number " + rn.toNumber());
    }
  }
};

dotenv.config();
script();
