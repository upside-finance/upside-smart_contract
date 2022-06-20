import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import * as backend from "../reach_sc/build/index.main.mjs";
import { promises as fs } from "fs";
import { spawnSync } from "child_process";
import cron from "node-cron";

const onLiveChain = () => {
  return process.env.network === "MainNet" || process.env.network === "TestNet";
};

const script = async () => {
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

    const oldBankASAbal = (
      await backendAcc.balanceOf(process.env.bASAid)
    ).toNumber();

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

    const newBankASAbal = (
      await backendAcc.balanceOf(process.env.bASAid)
    ).toNumber();

    const maxBankASAbal = await ctc.unsafeViews.UserView.maxBankASAbal();

    await ctc.apis.UserAPI.setBankASAbal(
      maxBankASAbal + newBankASAbal - oldBankASAbal
    );
  } else {
    const requestReclaim = await ctc.unsafeViews.UserView.requestReclaim();

    if (requestReclaim) {
      const oldBal = (await backendAcc.balanceOf()).toNumber();
      const totalDeposit = (
        await ctc.unsafeViews.UserView.totalDeposit()
      ).toNumber();

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
      const supplyAmt = (
        await ctc.apis.UserAPI.clearSupplyAmtToDefi()
      ).toNumber();

      const reclaimedAmt = Math.max(newBal - oldBal + supplyAmt, totalDeposit);

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

const reach = loadStdlib("ALGO");
if (onLiveChain()) {
  reach.setProviderByName(process.env.network);
}

const appID = await fs.readFile(process.env.appID_filename, {
  encoding: "utf8",
});

const backendAcc = await reach.newAccountFromMnemonic(process.env.mnemonic);
const ctc = backendAcc.contract(backend, appID);

cron.schedule("*/5 * * * *", () => {
  console.log(new Date().toLocaleString());
  script(reach);
});
