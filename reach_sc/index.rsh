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
    currProbArrSize: UInt,
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

  const state = parallelReduce({
    totalDeposit: 0,
    numDepositors: 0,
    numDeposits: 0,
    currProbArrSize: 0,
    requestReclaim: true,
    randomNum: 0,
  })
    .invariant(true)
    .define(() => {
      UserView.totalDeposit.set(state.totalDeposit);
      UserView.numDepositors.set(state.numDepositors);
      UserView.numDeposits.set(state.numDeposits);
      UserView.currProbArrSize.set(state.currProbArrSize);
      UserView.requestReclaim.set(state.requestReclaim);
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
          state.currProbArrSize +
          amt * (deadlineSecs - thisConsensusSecs()) -
          1;
        depositors[this] = array(UInt, [
          state.currProbArrSize,
          userEndProb,
          amt,
        ]);
        transfer(amt).to(PoolCreator);

        return {
          ...state,
          totalDeposit: state.totalDeposit + amt,
          numDepositors: state.numDepositors + 1,
          numDeposits: state.numDeposits + 1,
          currProbArrSize: userEndProb,
        };
      }
    )
    .api(
      UserAPI.withdraw,
      () => {
        const userDeposit = fromSome(depositors[this], nullDepositObj)[2];
        assume(userDeposit > 0, "You have no balance to withdraw");
        assume(!state.requestReclaim, "Funds not reclaimed from DeFi protocol");
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
          !state.requestReclaim &&
          balance() >= userDeposit &&
          !isBeforeDeadline());
        returnF(null);

        depositors[this] = array(UInt, [
          userDepositObj[0],
          userDepositObj[1],
          0,
        ]);
        transfer(userDeposit).to(this);

        return state;
      }
    )
    .api(
      UserAPI.transferFunds,
      (supplied_rn, amt) => {
        assume(this == PoolCreator, "You are not the lottery creator");
        assume(state.requestReclaim, "Funds already transferred");
      },
      (supplied_rn, amt) => amt,
      (supplied_rn, amt, returnF) => {
        require(this == PoolCreator &&
          state.requestReclaim &&
          !isBeforeDeadline());
        returnF(null);

        return { ...state, requestReclaim: false, randomNum: supplied_rn };
      }
    )
    .api(
      UserAPI.claimReward,
      () => {
        assume(!state.requestReclaim, "Winner not selected yet");
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        assume(
          state.randomNum >= userDepositObj[0] &&
            state.randomNum <= userDepositObj[1],
          "You did not win the lottery"
        );
        assume(
          balance() >= state.totalDeposit,
          "Contract does not have enough funds to dispense"
        );
      },
      () => 0,
      (returnF) => {
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        require(!state.requestReclaim &&
          balance() >= state.totalDeposit &&
          state.randomNum >= userDepositObj[0] &&
          state.randomNum <= userDepositObj[1] &&
          !isBeforeDeadline());

        transfer(balance() - state.totalDeposit).to(this);

        returnF(null);

        return state;
      }
    );

  commit();
  exit();
});
