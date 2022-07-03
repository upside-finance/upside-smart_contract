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
    clearSupplyAmtToDefi: Fun([UInt], Null),
    setBankASAbal: Fun([UInt], Null),
  });

  const UserView = View("UserView", {
    deploymentSecs: UInt,
    deadlineSecs: UInt,
    totalDeposit: UInt,
    totalWithdrawal: UInt,
    numDepositors: UInt,
    numDeposits: UInt,
    currProbArrSize: UInt,
    requestReclaim: Bool,
    supplyAmtToDefi: UInt,
    maxBankASAbal: UInt,
    actualPrizePool: UInt,
    getUserDeposit: Fun([Address], UInt),
    getProbIndex: Fun([Address], Array(UInt, 2)),
    randomNum: UInt,
    winningUser: Address,
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

  UserView.getUserDeposit.set((u) =>
    fromMaybe(
      depositors[u],
      () => 0,
      (v) => v[2]
    )
  );
  UserView.getProbIndex.set((u) =>
    fromMaybe(
      depositors[u],
      () => array(UInt, [0, 0]),
      (v) => array(UInt, [v[0], v[1]])
    )
  );

  const state = parallelReduce({
    totalDeposit: 0,
    totalWithdrawal: 0,
    numDepositors: 0,
    numDeposits: 0,
    currProbArrSize: 0,
    requestReclaim: true,
    randomNum: 0,
    supplyAmtToDefi: 0,
    maxBankASAbal: 0,
    actualPrizePool: 0,
    winningUser: PoolCreator,
  })
    .invariant(true)
    .define(() => {
      UserView.totalDeposit.set(state.totalDeposit);
      UserView.totalWithdrawal.set(state.totalWithdrawal);
      UserView.numDepositors.set(state.numDepositors);
      UserView.numDeposits.set(state.numDeposits);
      UserView.currProbArrSize.set(state.currProbArrSize);
      UserView.requestReclaim.set(state.requestReclaim);
      UserView.supplyAmtToDefi.set(state.supplyAmtToDefi);
      UserView.maxBankASAbal.set(state.maxBankASAbal);
      UserView.actualPrizePool.set(state.actualPrizePool);
      UserView.randomNum.set(state.randomNum);
      UserView.winningUser.set(state.winningUser);
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
          supplyAmtToDefi: state.supplyAmtToDefi + amt,
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

        return {
          ...state,
          totalWithdrawal: state.totalWithdrawal + userDeposit,
        };
      }
    )
    .api(
      UserAPI.transferFunds,
      (supplied_rn, amt) => {
        assume(this == PoolCreator, "You are not the lottery creator");
        assume(state.requestReclaim, "Funds already transferred");
        assume(
          amt >= state.totalDeposit,
          "Amount reclaimed from DeFi must be greater than deposits"
        );
      },
      (supplied_rn, amt) => amt,
      (supplied_rn, amt, returnF) => {
        require(this == PoolCreator &&
          state.requestReclaim &&
          amt >= state.totalDeposit &&
          !isBeforeDeadline());
        returnF(null);

        return {
          ...state,
          requestReclaim: false,
          randomNum: supplied_rn,
          actualPrizePool: amt - state.totalDeposit,
        };
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
          balance() >= state.actualPrizePool,
          "Contract does not have enough funds to dispense"
        );
      },
      () => 0,
      (returnF) => {
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        require(!state.requestReclaim &&
          balance() >= state.actualPrizePool &&
          state.randomNum >= userDepositObj[0] &&
          state.randomNum <= userDepositObj[1] &&
          !isBeforeDeadline());

        transfer(state.actualPrizePool).to(this);

        returnF(null);

        return { ...state, winningUser: this };
      }
    )
    .api(
      UserAPI.clearSupplyAmtToDefi,
      (amt) => assume(this == PoolCreator, "You are not the lottery creator"),
      (amt) => 0,
      (amt, returnF) => {
        require(this == PoolCreator);
        returnF(null);
        return { ...state, supplyAmtToDefi: state.supplyAmtToDefi - amt };
      }
    )
    .api(
      UserAPI.setBankASAbal,
      (newBankASAbal) =>
        assume(this == PoolCreator, "You are not the lottery creator"),
      (newBankASAbal) => 0,
      (newBankASAbal, returnF) => {
        require(this == PoolCreator);
        returnF(null);
        return { ...state, maxBankASAbal: newBankASAbal };
      }
    );

  commit();
  exit();
});
