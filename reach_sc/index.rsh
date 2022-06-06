"reach 0.1";

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  // setOptions({ verifyArithmetic: true });

  const PoolCreator = Participant("PoolCreator", {
    ...hasConsoleLogger,
    disconnect: Fun([], Null),
    relativeDeadlineSecs: UInt,
  });

  const UserAPI = API("UserAPI", {
    deposit: Fun([UInt], Null),
    withdraw: Fun([], Null),
    transferFunds: Fun([UInt, UInt], Null),
    claimReward: Fun([], Null),
  });

  const UserView = View("UserView", {
    deploymentSecs: UInt,
    deadlineSecs: UInt,
    totalDeposit: UInt,
    numDepositors: UInt,
    numDeposits: UInt,
    runningProb: UInt,
    requestReclaim: Bool,
  });

  init();

  PoolCreator.only(() => {
    const relativeDeadlineSecs = declassify(interact.relativeDeadlineSecs);
  });
  PoolCreator.publish(relativeDeadlineSecs);
  PoolCreator.interact.disconnect();

  UserView.deploymentSecs.set(thisConsensusSecs());
  const deadlineSecs = thisConsensusSecs() + relativeDeadlineSecs;
  UserView.deadlineSecs.set(deadlineSecs);

  const isBeforeDeadline = () => thisConsensusSecs() <= deadlineSecs;

  const depositors = new Map(Array(UInt, 3));
  const nullDepositObj = array(UInt, [0, 0, 0]);

  const [
    totalDeposit,
    numDepositors,
    numDeposits,
    runningProb,
    requestReclaim,
    rn,
  ] = parallelReduce([0, 0, 0, 0, true, 0])
    .invariant(true)
    .define(() => {
      UserView.totalDeposit.set(totalDeposit);
      UserView.numDepositors.set(numDepositors);
      UserView.numDeposits.set(numDeposits);
      UserView.runningProb.set(runningProb);
      UserView.requestReclaim.set(requestReclaim);
    })
    .while(true)
    .api(
      UserAPI.deposit,
      (amt) => {
        assume(isNone(depositors[this]), "You cannot deposit more than once");
      },
      (amt) => amt,
      (amt, returnF) => {
        require(isNone(depositors[this]) && isBeforeDeadline());
        returnF(null);

        const userEndProb =
          runningProb + amt * (deadlineSecs - thisConsensusSecs()) - 1;
        depositors[this] = array(UInt, [runningProb, userEndProb, amt]);
        transfer(amt).to(PoolCreator);

        return [
          totalDeposit + amt,
          numDepositors + 1,
          numDeposits + 1,
          userEndProb,
          requestReclaim,
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
          balance() >= userDeposit,
          "Contract does not have enough funds to dispense"
        );
      },
      () => 0,
      (returnF) => {
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        const userDeposit = userDepositObj[2];
        require(userDeposit > 0 &&
          balance() >= userDeposit &&
          !isBeforeDeadline());
        returnF(null);

        depositors[this] = array(UInt, [
          userDepositObj[0],
          userDepositObj[1],
          0,
        ]);
        transfer(userDeposit).to(this);

        return [
          totalDeposit,
          numDepositors,
          numDeposits,
          runningProb,
          requestReclaim,
          rn,
        ];
      }
    )
    .api(
      UserAPI.transferFunds,
      (supplied_rn, amt) => {
        assume(this == PoolCreator, "You are not the lottery creator");
        assume(requestReclaim, "Funds already transferred");
      },
      (supplied_rn, amt) => amt,
      (supplied_rn, amt, returnF) => {
        require(this == PoolCreator && requestReclaim && !isBeforeDeadline());
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
          balance() >= totalDeposit,
          "Contract does not have enough funds to dispense"
        );
        assume(!requestReclaim, "Winner not selected yet");
      },
      () => 0,
      (returnF) => {
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        require(balance() >= totalDeposit &&
          rn >= userDepositObj[0] &&
          rn <= userDepositObj[1] &&
          !requestReclaim &&
          !isBeforeDeadline());

        transfer(balance() - totalDeposit).to(this);

        returnF(null);

        return [
          totalDeposit,
          numDepositors,
          numDeposits,
          runningProb,
          requestReclaim,
          rn,
        ];
      }
    );

  commit();
  exit();
});
