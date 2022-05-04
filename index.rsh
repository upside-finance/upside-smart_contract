"reach 0.1";

export const main = Reach.App(() => {
  // setOptions({ verifyArithmetic: true });

  const PoolCreator = Participant("PoolCreator", {
    ...hasConsoleLogger,
    ...hasRandom,
    depositToken: Token,
    vaultAmt: UInt,
    relativeDeadlineSecs: UInt,
    initRN: UInt,
  });

  const UserAPI = API("UserAPI", {
    deposit: Fun([UInt, UInt], Null),
    withdraw: Fun([], Null),
    updateLastConsensusTime: Fun([], Null),
    finaliseRN: Fun([UInt, UInt], UInt),
    claimReward: Fun([], Bool),
  });

  const UserView = View("UserView", {
    depositToken: Token,
    vaultAmt: UInt,
    deadlineSecs: UInt,
    totalDeposit: UInt,
    numDepositors: UInt,
    numDeposits: UInt,
    isBeforeDeadline: Bool,
    lastConsensusSecs: UInt,
    // getMyDeposit: Fun([Address], UInt),
  });

  init();

  PoolCreator.only(() => {
    const depositToken = declassify(interact.depositToken);
    const vaultAmt = declassify(interact.vaultAmt);
    const relativeDeadlineSecs = declassify(interact.relativeDeadlineSecs);
    const _initRN = interact.initRN;
    const [_commitInitRN, _saltInitRN] = makeCommitment(interact, _initRN);
    const commitInitRN = declassify(_commitInitRN);
  });
  PoolCreator.publish(
    depositToken,
    vaultAmt,
    relativeDeadlineSecs,
    commitInitRN
  );
  UserView.depositToken.set(depositToken);
  UserView.vaultAmt.set(vaultAmt);
  commit();

  PoolCreator.pay([0, [vaultAmt, depositToken]]);

  const deadlineSecs = fromRight(relativeSecs(relativeDeadlineSecs), 0);
  UserView.deadlineSecs.set(deadlineSecs);

  const isBeforeDeadline = () => thisConsensusSecs() <= deadlineSecs;

  const depositors = new Map(Array(UInt, 3));
  const nullDepositObj = array(UInt, [0, 0, 0]);
  // UserView.getMyDeposit.set((x) => fromSome(depositors[x], 0));

  const [
    totalDeposit,
    numDepositors,
    numDeposits,
    runningRN,
    rnFinalised,
    dummy,
  ] = parallelReduce([0, 0, 0, 0, false, false])
    .invariant(true)
    .define(() => {
      UserView.totalDeposit.set(totalDeposit);
      UserView.numDepositors.set(numDepositors);
      UserView.numDeposits.set(numDeposits);
      UserView.isBeforeDeadline.set(isBeforeDeadline());
      UserView.lastConsensusSecs.set(baseWaitSecs());
    })
    .while(true)
    .paySpec([depositToken])
    .api(
      UserAPI.deposit,
      (amt, rn) => {
        assume(isNone(depositors[this]), "You cannot deposit more than once");
        assume(
          isBeforeDeadline(),
          "You cannot deposit after the lottery has ended"
        );
      },
      (amt, rn) => [0, [amt, depositToken]],
      (amt, rn, returnF) => {
        require(isNone(depositors[this]) && isBeforeDeadline());
        returnF(null);

        depositors[this] = array(UInt, [
          totalDeposit,
          totalDeposit + amt - 1,
          amt,
        ]);

        const useableRN =
          rn <= UInt.max - runningRN ? rn : rn % (UInt.max - runningRN);

        return [
          totalDeposit + amt,
          numDepositors + 1,
          numDeposits + 1,
          (runningRN + useableRN) % UInt.max,
          rnFinalised,
          !dummy,
        ];
      }
    )
    .api(
      UserAPI.withdraw,
      () => {
        const userDeposit = fromSome(depositors[this], nullDepositObj)[2];
        assume(userDeposit > 0, "You have no balance to withdraw");
        assume(
          !isBeforeDeadline(),
          "You cannot withdraw before the lottery ends"
        );
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
          runningRN,
          rnFinalised,
          !dummy,
        ];
      }
    )
    .api(UserAPI.updateLastConsensusTime, (returnF) => {
      returnF(null);

      return [
        totalDeposit,
        numDepositors,
        numDeposits,
        runningRN,
        rnFinalised,
        !dummy,
      ];
    })
    .api(
      UserAPI.finaliseRN,
      (initRN, saltInitRN) => {
        assume(this == PoolCreator, "You are not the lottery creator");
        assume(
          !isBeforeDeadline(),
          "You cannot select winners before the lottery ends"
        );
        assume(!rnFinalised, "You have already selected winners");
      },
      (initRN, saltInitRN) => [0, [0, depositToken]],
      (initRN, saltInitRN, returnF) => {
        require(this == PoolCreator && !rnFinalised && !isBeforeDeadline());
        checkCommitment(commitInitRN, saltInitRN, initRN);

        const useableInitRN =
          initRN <= UInt.max - runningRN
            ? initRN
            : initRN % (UInt.max - runningRN);
        const finalRN = (runningRN + useableInitRN) % totalDeposit;

        returnF(finalRN);

        return [
          totalDeposit,
          numDepositors,
          numDeposits,
          finalRN,
          true,
          !dummy,
        ];
      }
    )
    .api(
      UserAPI.claimReward,
      () => {
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        assume(
          !isBeforeDeadline(),
          "You cannot claim rewards before the lottery ends"
        );
        assume(
          runningRN >= userDepositObj[0] && runningRN <= userDepositObj[1],
          "You did not win the lottery"
        );
        assume(
          balance(depositToken) >= vaultAmt,
          "Contract does not have enough funds to dispense"
        );
      },
      () => [0, [0, depositToken]],
      (returnF) => {
        const userDepositObj = fromSome(depositors[this], nullDepositObj);
        require(!isBeforeDeadline() &&
          balance(depositToken) >= vaultAmt &&
          runningRN >= userDepositObj[0] &&
          runningRN <= userDepositObj[1]);

        returnF(true);

        transfer(vaultAmt, depositToken).to(this);

        return [
          totalDeposit,
          numDepositors,
          numDeposits,
          runningRN,
          rnFinalised,
          !dummy,
        ];
      }
    );

  commit();
  exit();
});
