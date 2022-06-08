import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import * as backend from "../reach_sc/build/index.main.mjs";
import { promises as fs } from "fs";
import { spawnSync } from "child_process";

const onLiveChain = () => {
  return process.env.network === "MainNet" || process.env.network === "TestNet";
};

const script = async () => {
  const reach = loadStdlib("ALGO");
  if (onLiveChain()) {
    reach.setProviderByName(process.env.network);
  }

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
    const supplyAmt = (
      await ctc.apis.UserAPI.clearSupplyAmtToDefi()
    ).toNumber();

    console.log("Amount to be supplied to Algofi = " + supplyAmt);

    if (onLiveChain() && supplyAmt !== 0) {
      const pythonSpawn = spawnSync(
        `conda run -n UF_algofi python ../python_script/algofi_mint.py ${supplyAmt}`,
        { shell: true }
      );

      if (pythonSpawn.stdout) {
        console.log(pythonSpawn.stdout.toString());
      }
      if (pythonSpawn.stderr) {
        console.log(pythonSpawn.stderr.toString());
      }
    }
  } else {
    const requestReclaim = await ctc.unsafeViews.UserView.requestReclaim();

    if (requestReclaim) {
      const oldBal = (await backendAcc.balanceOf()).toNumber();

      if (onLiveChain()) {
        const pythonSpawn = spawnSync(
          `conda run -n UF_algofi python ../python_script/algofi_burn.py`,
          { shell: true }
        );

        if (pythonSpawn.stdout) {
          console.log(pythonSpawn.stdout.toString());
        }
        if (pythonSpawn.stderr) {
          console.log(pythonSpawn.stderr.toString());
        }
      }

      const newBal = (await backendAcc.balanceOf()).toNumber();
      const reclaimedAmt = newBal - oldBal;

      const currProbArrSize = (
        await ctc.unsafeViews.UserView.currProbArrSize()
      ).toNumber();
      console.log("Probability array size = " + currProbArrSize);

      const rn = Math.floor(Math.random() * (currProbArrSize + 1));

      await ctc.apis.UserAPI.transferFunds(rn, reclaimedAmt);
      console.log("Supplied random number = " + rn);
      console.log(`Transferred ${reclaimedAmt} from Algofi to smart contract`);
    }
  }
};

dotenv.config({ path: "../.env" });
script();
