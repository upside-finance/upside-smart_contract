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

  const [networkSecs, deadlineSecs] = await Promise.all([
    networkSecsPromise,
    deadlineSecsPromise,
  ]).then((res) => res.map((v) => v.toNumber()));

  console.log("Network time: " + networkSecs);
  console.log("Lottery deadline: " + deadlineSecs);

  if (networkSecs < deadlineSecs) {
    console.log("Within lottery period");

    const supplyAmt = await ctc.unsafeViews.UserView.supplyAmtToDefi().then(
      (v) => v.toNumber()
    );

    console.log("Amount to be supplied to DeFi = " + supplyAmt);

    if (supplyAmt == 0) {
      return;
    }

    console.log(`Supplying ${supplyAmt} to DeFi...`);

    const oldBankASAbal = await backendAcc
      .balanceOf(process.env.bASAid)
      .then((v) => v.toNumber());

    if (onLiveChain()) {
      const pythonSpawn = spawnSync(
        `python ../python_script/algofi_mint.py ${supplyAmt}`,
        { shell: true }
      );

      if (pythonSpawn.stderr && pythonSpawn.stderr.toString() !== "") {
        console.log(pythonSpawn.stderr.toString());
        return;
      } else if (pythonSpawn.stdout) {
        console.log(pythonSpawn.stdout.toString());
      }
    }

    const clearSupplyAmtToDefiPromise = ctc.apis.UserAPI.clearSupplyAmtToDefi(
      supplyAmt
    );

    const newBankASAbalPromise = backendAcc
      .balanceOf(process.env.bASAid)
      .then((v) => v.toNumber());

    const maxBankASAbalPromise = ctc.unsafeViews.UserView.maxBankASAbal().then(
      (v) => v.toNumber()
    );

    const [_, newBankASAbal, maxBankASAbal] = await Promise.all([
      clearSupplyAmtToDefiPromise,
      newBankASAbalPromise,
      maxBankASAbalPromise,
    ]);

    const newMaxBankASAbal = maxBankASAbal + newBankASAbal - oldBankASAbal;
    await ctc.apis.UserAPI.setBankASAbal(newMaxBankASAbal);

    console.log("Old bASA balance in wallet = " + oldBankASAbal);
    console.log("New bASA balance in wallet = " + newBankASAbal);
    console.log(
      "Increase in bASA balance in wallet = " + (newBankASAbal - oldBankASAbal)
    );

    console.log("Old stated bASA balance in SC = " + maxBankASAbal);
    console.log("New stated bASA balance in SC = " + newMaxBankASAbal);
    console.log(
      "Increase in stated bASA balance in SC = " +
        (newMaxBankASAbal - maxBankASAbal)
    );
  } else {
    console.log("Past lottery period");

    const requestReclaim = await ctc.unsafeViews.UserView.requestReclaim();

    if (!requestReclaim) {
      console.log(
        "Funds already reclaimed from DeFi and supplied to smart contract"
      );
      return;
    }

    console.log(
      "Reclaiming funds from DeFi and supplying to smart contract..."
    );

    const maxBankASAbalPromise = ctc.unsafeViews.UserView.maxBankASAbal();
    const oldBalPromise = backendAcc.balanceOf();
    const supplyAmtPromise = ctc.unsafeViews.UserView.supplyAmtToDefi();
    const totalDepositPromise = ctc.unsafeViews.UserView.totalDeposit();
    const currProbArrSizePromise = ctc.unsafeViews.UserView.currProbArrSize();

    const [
      maxBankASAbal,
      oldBal,
      supplyAmt,
      totalDeposit,
      currProbArrSize,
    ] = await Promise.all([
      maxBankASAbalPromise,
      oldBalPromise,
      supplyAmtPromise,
      totalDepositPromise,
      currProbArrSizePromise,
    ]).then((res) => res.map((v) => v.toNumber()));

    if (onLiveChain() && maxBankASAbal != 0) {
      console.log(`Burning ${maxBankASAbal} bASA...`);

      const pythonSpawn = spawnSync(
        `python ../python_script/algofi_burn.py ${maxBankASAbal}`,
        {
          shell: true,
        }
      );

      if (pythonSpawn.stderr && pythonSpawn.stderr.toString() !== "") {
        console.log(pythonSpawn.stderr.toString());
        return;
      } else if (pythonSpawn.stdout) {
        console.log(pythonSpawn.stdout.toString());
      }
    }

    const newBal = await backendAcc.balanceOf().then((v) => v.toNumber());
    const calculatedReclaimAmt = newBal - oldBal + supplyAmt;
    const reclaimedAmt = Math.max(calculatedReclaimAmt, totalDeposit);
    console.log("Old underlying balance: " + oldBal);
    console.log("New underlying balance: " + newBal);
    console.log("Increase in underlying balance: " + (newBal - oldBal));
    console.log("Deposits not supplied to DeFi: " + supplyAmt);
    console.log("Total deposits: " + totalDeposit);
    console.log(
      "Amount calculated to be transfered to smart contract: " +
        calculatedReclaimAmt
    );
    console.log(
      "Amount actual to be transfered to smart contract: " + reclaimedAmt
    );

    console.log("Probability array size = " + currProbArrSize);
    const rn = Math.floor(Math.random() * (currProbArrSize + 1));

    await ctc.apis.UserAPI.transferFunds(rn, reclaimedAmt);
    console.log("Supplied random number: " + rn);
    console.log(`Transferred ${reclaimedAmt} from wallet to smart contract`);
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

let running = false;

cron.schedule("*/1 * * * *", () => {
  if (!running) {
    running = true;
    console.log(new Date().toLocaleString());
    script(reach).then((_) => (running = false));
  }
});
