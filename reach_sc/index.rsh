"reach 0.1";

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  // setOptions({ verifyArithmetic: true });

  const PoolCreator = Participant("PoolCreator", {
    ...hasConsoleLogger,
    disconnect: Fun([], Null),
    depositToken: Token,
    vaultAmt: UInt,
    relativeDeadlineSecs: UInt,
  });

  const UserAPI = API("UserAPI", {
    deposit: Fun([UInt], Null),
    withdraw: Fun([], Null),
    supplyRN: Fun([UInt], Null),
    claimReward: Fun([], Null),
  });

  const UserView = View("UserView", {
    depositToken: Token,
    vaultAmt: UInt,
    deploymentSecs: UInt,
    deadlineSecs: UInt,
    totalDeposit: UInt,
    numDepositors: UInt,
    numDeposits: UInt,
    runningProb: UInt,
    requestingRN: Bool,
  });

  init();

  PoolCreator.only(() => {
    const depositToken = declassify(interact.depositToken);
    const vaultAmt = declassify(interact.vaultAmt);
    const relativeDeadlineSecs = declassify(interact.relativeDeadlineSecs);
  });
  PoolCreator.publish(depositToken, vaultAmt, relativeDeadlineSecs);
  UserView.depositToken.set(depositToken);
  UserView.vaultAmt.set(vaultAmt);
  UserView.deploymentSecs.set(thisConsensusSecs());
  const deadlineSecs = thisConsensusSecs() + relativeDeadlineSecs;
  UserView.deadlineSecs.set(deadlineSecs);
  commit();

  PoolCreator.pay([0, [vaultAmt, depositToken]]);
  PoolCreator.interact.disconnect();

  const isBeforeDeadline = () => thisConsensusSecs() <= deadlineSecs;

  const depositors = new Map(Array(UInt, 3));
  const nullDepositObj = array(UInt, [0, 0, 0]);

  const [
    totalDeposit,
    numDepositors,
    numDeposits,
    runningProb,
    requestingRN,
    rn,
  ] = parallelReduce([0, 0, 0, 0, true, 0])
    .invariant(true)
    .define(() => {
      UserView.totalDeposit.set(totalDeposit);
      UserView.numDepositors.set(numDepositors);
      UserView.numDeposits.set(numDeposits);
      UserView.runningProb.set(runningProb);
      UserView.requestingRN.set(requestingRN);
    })
    .while(true)
    .paySpec([depositToken])
    .api(
      UserAPI.deposit,
      (amt) => {
        assume(isNone(depositors[this]), "You cannot deposit more than once");
      },
      (amt) => [0, [amt, depositToken]],
      (amt, returnF) => {
        require(isNone(depositors[this]) && isBeforeDeadline());
        returnF(null);

        const userEndProb =
          runningProb + amt * (deadlineSecs - thisConsensusSecs()) - 1;
        depositors[this] = array(UInt, [runningProb, userEndProb, amt]);

        return [
          totalDeposit + amt,
          numDepositors + 1,
          numDeposits + 1,
          userEndProb,
          requestingRN,
          rn,
        ];
      }
    )
    .api(
      UserAPI.withdraw,
      () => {
        const userDeposit = fromSome(depositors[this], nullDepositObj)[2];
        assume(userDeposit > 0, "You have no balance to withdraw");
        assume(
          balance(depositToken) >= userDeposit,
          "Contract does not have enough funds to dispense"
        );
      },
      () => [0, [0, depositToken]],
      (returnF) => {
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        const userDeposit = userDepositObj[2];
        require(userDeposit > 0 &&
          balance(depositToken) >= userDeposit &&
          !isBeforeDeadline());
        returnF(null);

        depositors[this] = array(UInt, [
          userDepositObj[0],
          userDepositObj[1],
          0,
        ]);
        transfer(userDeposit, depositToken).to(this);

        return [
          totalDeposit,
          numDepositors,
          numDeposits,
          runningProb,
          requestingRN,
          rn,
        ];
      }
    )
    .api(
      UserAPI.supplyRN,
      (supplied_rn) => {
        assume(this == PoolCreator, "You are not the lottery creator");
        assume(requestingRN, "Random number already supplied");
      },
      (supplied_rn) => [0, [0, depositToken]],
      (supplied_rn, returnF) => {
        require(this == PoolCreator && !isBeforeDeadline() && requestingRN);
        returnF(null);

        return [
          totalDeposit,
          numDepositors,
          numDeposits,
          runningProb,
          false,
          supplied_rn,
        ];
      }
    )
    .api(
      UserAPI.claimReward,
      () => {
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        assume(
          rn >= userDepositObj[0] && rn <= userDepositObj[1],
          "You did not win the lottery"
        );
        assume(
          balance(depositToken) >= vaultAmt,
          "Contract does not have enough funds to dispense"
        );
        assume(!requestingRN, "Winner not selected yet");
      },
      () => [0, [0, depositToken]],
      (returnF) => {
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        require(!isBeforeDeadline() &&
          balance(depositToken) >= vaultAmt &&
          rn >= userDepositObj[0] &&
          rn <= userDepositObj[1] &&
          !requestingRN);

        transfer(vaultAmt, depositToken).to(this);

        returnF(null);

        return [
          totalDeposit,
          numDepositors,
          numDeposits,
          runningProb,
          requestingRN,
          rn,
        ];
      }
    );

  commit();
  exit();
});
