// Automatically generated with Reach 0.1.10 (2604daf0)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (2604daf0)';
export const _backendVersion = 16;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc6 = stdlib.T_Data({
    None: ctc4,
    Some: ctc5
    });
  const map0_ctc = ctc6;
  
  
  return {
    infos: {
      UserView: {
        actualPrizePool: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v720;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        currProbArrSize: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v716;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        deadlineSecs: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v666;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        deploymentSecs: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v662;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        getProbIndex: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async (_v673 ) => {
                  const v673 = stdlib.protect(ctc0, _v673, null);
                
                const v674 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v673), null);
                let v675;
                switch (v674[0]) {
                  case 'None': {
                    const v676 = v674[1];
                    const v677 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                    v675 = v677;
                    
                    break;
                    }
                  case 'Some': {
                    const v679 = v674[1];
                    const v680 = v679[stdlib.checkedBigNumberify('./index.rsh:68:28:array ref', stdlib.UInt_max, '0')];
                    const v681 = v679[stdlib.checkedBigNumberify('./index.rsh:68:34:array ref', stdlib.UInt_max, '1')];
                    const v682 = [v680, v681];
                    v675 = v682;
                    
                    break;
                    }
                  }
                
                return v675;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          },
        getUserDeposit: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async (_v667 ) => {
                  const v667 = stdlib.protect(ctc0, _v667, null);
                
                const v668 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v667), null);
                let v669;
                switch (v668[0]) {
                  case 'None': {
                    const v670 = v668[1];
                    v669 = stdlib.checkedBigNumberify('./index.rsh:60:13:decimal', stdlib.UInt_max, '0');
                    
                    break;
                    }
                  case 'Some': {
                    const v671 = v668[1];
                    const v672 = v671[stdlib.checkedBigNumberify('./index.rsh:61:15:array ref', stdlib.UInt_max, '2')];
                    v669 = v672;
                    
                    break;
                    }
                  }
                
                return v669;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        maxBankASAbal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v719;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        numDepositors: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v714;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        numDeposits: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v715;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        randomNum: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v721;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        requestReclaim: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v717;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        supplyAmtToDefi: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v718;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        totalDeposit: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v712;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        totalWithdrawal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v713;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        winningUser: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = svs;
              return (await ((async () => {
                
                
                return v722;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function PoolCreator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PoolCreator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PoolCreator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Data({
    UserAPI_claimReward0_102: ctc4,
    UserAPI_clearSupplyAmtToDefi0_102: ctc5,
    UserAPI_deposit0_102: ctc5,
    UserAPI_setBankASAbal0_102: ctc5,
    UserAPI_transferFunds0_102: ctc6,
    UserAPI_withdraw0_102: ctc4
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v656 = stdlib.protect(ctc1, interact.relativeDeadlineSecs, 'for PoolCreator\'s interact field relativeDeadlineSecs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v656],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v660], secs: v662, time: v661, didSend: v27, from: v659 } = txn1;
      
      ;
      
      const v666 = stdlib.add(v662, v660);
      const v684 = {
        actualPrizePool: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        currProbArrSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        maxBankASAbal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numDepositors: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numDeposits: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        randomNum: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        requestReclaim: true,
        supplyAmtToDefi: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalDeposit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalWithdrawal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        winningUser: v659
        };
      const v685 = v684;
      const v686 = v661;
      const v689 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v712 = v685.totalDeposit;
        const v713 = v685.totalWithdrawal;
        const v714 = v685.numDepositors;
        const v715 = v685.numDeposits;
        const v716 = v685.currProbArrSize;
        const v717 = v685.requestReclaim;
        const v718 = v685.supplyAmtToDefi;
        const v719 = v685.maxBankASAbal;
        const v720 = v685.actualPrizePool;
        const v721 = v685.randomNum;
        const v722 = v685.winningUser;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v660], secs: v662, time: v661, didSend: v27, from: v659 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.disconnect(), {
    at: './index.rsh:46:34:application',
    fs: ['at ./index.rsh:46:34:application call to [unknown function] (defined at: ./index.rsh:46:34:function exp)', 'at ./index.rsh:46:34:application call to "liftedInteract" (defined at: ./index.rsh:46:34:application)'],
    msg: 'disconnect',
    who: 'PoolCreator'
    });
  
  const v666 = stdlib.add(v662, v660);
  const v684 = {
    actualPrizePool: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    currProbArrSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    maxBankASAbal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    numDepositors: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    numDeposits: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    randomNum: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    requestReclaim: true,
    supplyAmtToDefi: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalDeposit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalWithdrawal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    winningUser: v659
    };
  let v685 = v684;
  let v686 = v661;
  let v689 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v712 = v685.totalDeposit;
    const v713 = v685.totalWithdrawal;
    const v714 = v685.numDepositors;
    const v715 = v685.numDeposits;
    const v716 = v685.currProbArrSize;
    const v717 = v685.requestReclaim;
    const v718 = v685.supplyAmtToDefi;
    const v719 = v685.maxBankASAbal;
    const v720 = v685.actualPrizePool;
    const v721 = v685.randomNum;
    const v722 = v685.winningUser;
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn2;
    switch (v830[0]) {
      case 'UserAPI_claimReward0_102': {
        const v833 = v830[1];
        undefined /* setApiDetails */;
        ;
        const v851 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v829), null);
        const v852 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v853 = stdlib.fromSome(v851, v852);
        const v858 = stdlib.ge(v689, v720);
        const v859 = v717 ? false : v858;
        const v861 = v853[stdlib.checkedBigNumberify('./index.rsh:211:44:array ref', stdlib.UInt_max, '0')];
        const v862 = stdlib.ge(v721, v861);
        const v863 = v859 ? v862 : false;
        const v865 = v853[stdlib.checkedBigNumberify('./index.rsh:212:44:array ref', stdlib.UInt_max, '1')];
        const v866 = stdlib.le(v721, v865);
        const v867 = v863 ? v866 : false;
        const v869 = stdlib.le(v832, v666);
        const v870 = v869 ? false : true;
        const v871 = v867 ? v870 : false;
        stdlib.assert(v871, {
          at: './index.rsh:209:16:application',
          fs: ['at ./index.rsh:207:17:application call to [unknown function] (defined at: ./index.rsh:207:17:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v876 = stdlib.sub(v689, v720);
        ;
        const v877 = null;
        await txn2.getOutput('UserAPI_claimReward', 'v877', ctc0, v877);
        const v894 = {
          actualPrizePool: v720,
          currProbArrSize: v716,
          maxBankASAbal: v719,
          numDepositors: v714,
          numDeposits: v715,
          randomNum: v721,
          requestReclaim: v717,
          supplyAmtToDefi: v718,
          totalDeposit: v712,
          totalWithdrawal: v713,
          winningUser: v829
          };
        const cv685 = v894;
        const cv686 = v831;
        const cv689 = v876;
        
        v685 = cv685;
        v686 = cv686;
        v689 = cv689;
        
        continue;
        break;
        }
      case 'UserAPI_clearSupplyAmtToDefi0_102': {
        const v1073 = v830[1];
        undefined /* setApiDetails */;
        ;
        const v1137 = v1073[stdlib.checkedBigNumberify('./index.rsh:222:9:spread', stdlib.UInt_max, '0')];
        const v1138 = stdlib.addressEq(v829, v659);
        stdlib.assert(v1138, {
          at: './index.rsh:227:16:application',
          fs: ['at ./index.rsh:226:22:application call to [unknown function] (defined at: ./index.rsh:226:22:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1139 = null;
        await txn2.getOutput('UserAPI_clearSupplyAmtToDefi', 'v1139', ctc0, v1139);
        const v1158 = stdlib.sub(v718, v1137);
        const v1159 = {
          actualPrizePool: v720,
          currProbArrSize: v716,
          maxBankASAbal: v719,
          numDepositors: v714,
          numDeposits: v715,
          randomNum: v721,
          requestReclaim: v717,
          supplyAmtToDefi: v1158,
          totalDeposit: v712,
          totalWithdrawal: v713,
          winningUser: v722
          };
        const cv685 = v1159;
        const cv686 = v831;
        const cv689 = v689;
        
        v685 = cv685;
        v686 = cv686;
        v689 = cv689;
        
        continue;
        break;
        }
      case 'UserAPI_deposit0_102': {
        const v1313 = v830[1];
        undefined /* setApiDetails */;
        const v1321 = v1313[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
        const v1329 = stdlib.add(v689, v1321);
        ;
        const v1403 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v829), null);
        let v1404;
        switch (v1403[0]) {
          case 'None': {
            const v1405 = v1403[1];
            v1404 = true;
            
            break;
            }
          case 'Some': {
            const v1406 = v1403[1];
            v1404 = false;
            
            break;
            }
          }
        const v1408 = stdlib.le(v832, v666);
        const v1409 = v1404 ? v1408 : false;
        stdlib.assert(v1409, {
          at: './index.rsh:107:16:application',
          fs: ['at ./index.rsh:106:22:application call to [unknown function] (defined at: ./index.rsh:106:22:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1410 = null;
        await txn2.getOutput('UserAPI_deposit', 'v1410', ctc0, v1410);
        const v1419 = stdlib.sub(v666, v832);
        const v1420 = stdlib.mul(v1321, v1419);
        const v1421 = stdlib.add(v716, v1420);
        const v1422 = stdlib.sub(v1421, stdlib.checkedBigNumberify('./index.rsh:113:11:decimal', stdlib.UInt_max, '1'));
        const v1424 = [v716, v1422, v1321];
        await stdlib.mapSet(map0, v829, v1424);
        const v1428 = stdlib.sub(v1329, v1321);
        ;
        const v1441 = stdlib.add(v712, v1321);
        const v1443 = stdlib.add(v714, stdlib.checkedBigNumberify('./index.rsh:124:48:decimal', stdlib.UInt_max, '1'));
        const v1445 = stdlib.add(v715, stdlib.checkedBigNumberify('./index.rsh:125:44:decimal', stdlib.UInt_max, '1'));
        const v1447 = stdlib.add(v718, v1321);
        const v1448 = {
          actualPrizePool: v720,
          currProbArrSize: v1422,
          maxBankASAbal: v719,
          numDepositors: v1443,
          numDeposits: v1445,
          randomNum: v721,
          requestReclaim: v717,
          supplyAmtToDefi: v1447,
          totalDeposit: v1441,
          totalWithdrawal: v713,
          winningUser: v722
          };
        const cv685 = v1448;
        const cv686 = v831;
        const cv689 = v1428;
        
        v685 = cv685;
        v686 = cv686;
        v689 = cv689;
        
        continue;
        break;
        }
      case 'UserAPI_setBankASAbal0_102': {
        const v1553 = v830[1];
        undefined /* setApiDetails */;
        ;
        const v1691 = v1553[stdlib.checkedBigNumberify('./index.rsh:232:9:spread', stdlib.UInt_max, '0')];
        const v1692 = stdlib.addressEq(v829, v659);
        stdlib.assert(v1692, {
          at: './index.rsh:238:16:application',
          fs: ['at ./index.rsh:237:32:application call to [unknown function] (defined at: ./index.rsh:237:32:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1693 = null;
        await txn2.getOutput('UserAPI_setBankASAbal', 'v1693', ctc0, v1693);
        const v1711 = {
          actualPrizePool: v720,
          currProbArrSize: v716,
          maxBankASAbal: v1691,
          numDepositors: v714,
          numDeposits: v715,
          randomNum: v721,
          requestReclaim: v717,
          supplyAmtToDefi: v718,
          totalDeposit: v712,
          totalWithdrawal: v713,
          winningUser: v722
          };
        const cv685 = v1711;
        const cv686 = v831;
        const cv689 = v689;
        
        v685 = cv685;
        v686 = cv686;
        v689 = cv689;
        
        continue;
        break;
        }
      case 'UserAPI_transferFunds0_102': {
        const v1793 = v830[1];
        undefined /* setApiDetails */;
        const v1806 = v1793[stdlib.checkedBigNumberify('./index.rsh:165:9:spread', stdlib.UInt_max, '1')];
        const v1809 = stdlib.add(v689, v1806);
        ;
        const v1954 = v1793[stdlib.checkedBigNumberify('./index.rsh:165:9:spread', stdlib.UInt_max, '0')];
        const v1956 = stdlib.addressEq(v829, v659);
        const v1958 = v1956 ? v717 : false;
        const v1960 = stdlib.ge(v1806, v712);
        const v1961 = v1958 ? v1960 : false;
        const v1963 = stdlib.le(v832, v666);
        const v1964 = v1963 ? false : true;
        const v1965 = v1961 ? v1964 : false;
        stdlib.assert(v1965, {
          at: './index.rsh:177:16:application',
          fs: ['at ./index.rsh:176:35:application call to [unknown function] (defined at: ./index.rsh:176:35:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1966 = null;
        await txn2.getOutput('UserAPI_transferFunds', 'v1966', ctc0, v1966);
        const v1986 = stdlib.sub(v1806, v712);
        const v1987 = {
          actualPrizePool: v1986,
          currProbArrSize: v716,
          maxBankASAbal: v719,
          numDepositors: v714,
          numDeposits: v715,
          randomNum: v1954,
          requestReclaim: false,
          supplyAmtToDefi: v718,
          totalDeposit: v712,
          totalWithdrawal: v713,
          winningUser: v722
          };
        const cv685 = v1987;
        const cv686 = v831;
        const cv689 = v1809;
        
        v685 = cv685;
        v686 = cv686;
        v689 = cv689;
        
        continue;
        break;
        }
      case 'UserAPI_withdraw0_102': {
        const v2033 = v830[1];
        undefined /* setApiDetails */;
        ;
        const v2230 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v829), null);
        const v2231 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2232 = stdlib.fromSome(v2230, v2231);
        const v2233 = v2232[stdlib.checkedBigNumberify('./index.rsh:145:43:array ref', stdlib.UInt_max, '2')];
        const v2234 = stdlib.gt(v2233, stdlib.checkedBigNumberify('./index.rsh:146:31:decimal', stdlib.UInt_max, '0'));
        const v2236 = v717 ? false : true;
        const v2237 = v2234 ? v2236 : false;
        const v2239 = stdlib.ge(v689, v2233);
        const v2240 = v2237 ? v2239 : false;
        const v2242 = stdlib.le(v832, v666);
        const v2243 = v2242 ? false : true;
        const v2244 = v2240 ? v2243 : false;
        stdlib.assert(v2244, {
          at: './index.rsh:146:16:application',
          fs: ['at ./index.rsh:143:17:application call to [unknown function] (defined at: ./index.rsh:143:17:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v2245 = null;
        await txn2.getOutput('UserAPI_withdraw', 'v2245', ctc0, v2245);
        const v2251 = v2232[stdlib.checkedBigNumberify('./index.rsh:153:25:array ref', stdlib.UInt_max, '0')];
        const v2252 = v2232[stdlib.checkedBigNumberify('./index.rsh:154:25:array ref', stdlib.UInt_max, '1')];
        const v2253 = [v2251, v2252, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, v829, v2253);
        const v2257 = stdlib.sub(v689, v2233);
        ;
        const v2270 = stdlib.add(v713, v2233);
        const v2271 = {
          actualPrizePool: v720,
          currProbArrSize: v716,
          maxBankASAbal: v719,
          numDepositors: v714,
          numDeposits: v715,
          randomNum: v721,
          requestReclaim: v717,
          supplyAmtToDefi: v718,
          totalDeposit: v712,
          totalWithdrawal: v2270,
          winningUser: v722
          };
        const cv685 = v2271;
        const cv686 = v831;
        const cv689 = v2257;
        
        v685 = cv685;
        v686 = cv686;
        v689 = cv689;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _UserAPI_claimReward3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_claimReward3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_claimReward3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    UserAPI_claimReward0_102: ctc6,
    UserAPI_clearSupplyAmtToDefi0_102: ctc7,
    UserAPI_deposit0_102: ctc7,
    UserAPI_setBankASAbal0_102: ctc7,
    UserAPI_transferFunds0_102: ctc8,
    UserAPI_withdraw0_102: ctc6
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4]);
  const v773 = ctc.selfAddress();
  const v775 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:193:10:application call to [unknown function] (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_claimReward0_102" (defined at: ./index.rsh:191:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_claimReward'
    });
  const v778 = v717 ? false : true;
  stdlib.assert(v778, {
    at: './index.rsh:194:15:application',
    fs: ['at ./index.rsh:193:10:application call to [unknown function] (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:193:10:application call to [unknown function] (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_claimReward0_102" (defined at: ./index.rsh:191:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'Winner not selected yet',
    who: 'UserAPI_claimReward'
    });
  const v779 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v773), null);
  const v780 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v781 = stdlib.fromSome(v779, v780);
  const v783 = v781[stdlib.checkedBigNumberify('./index.rsh:197:44:array ref', stdlib.UInt_max, '0')];
  const v784 = stdlib.ge(v721, v783);
  const v786 = v781[stdlib.checkedBigNumberify('./index.rsh:198:46:array ref', stdlib.UInt_max, '1')];
  const v787 = stdlib.le(v721, v786);
  const v788 = v784 ? v787 : false;
  stdlib.assert(v788, {
    at: './index.rsh:196:15:application',
    fs: ['at ./index.rsh:193:10:application call to [unknown function] (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:193:10:application call to [unknown function] (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_claimReward0_102" (defined at: ./index.rsh:191:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'You did not win the lottery',
    who: 'UserAPI_claimReward'
    });
  const v791 = stdlib.ge(v689, v720);
  stdlib.assert(v791, {
    at: './index.rsh:201:15:application',
    fs: ['at ./index.rsh:193:10:application call to [unknown function] (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:193:10:application call to [unknown function] (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_claimReward0_102" (defined at: ./index.rsh:191:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'Contract does not have enough funds to dispense',
    who: 'UserAPI_claimReward'
    });
  const v794 = ['UserAPI_claimReward0_102', v775];
  
  const txn1 = await (ctc.sendrecv({
    args: [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722, v794],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:206:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
      
      switch (v830[0]) {
        case 'UserAPI_claimReward0_102': {
          const v833 = v830[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_claimReward"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v829), null);
          const v876 = stdlib.sub(v689, v720);
          sim_r.txns.push({
            kind: 'from',
            to: v829,
            tok: undefined /* Nothing */
            });
          const v877 = null;
          const v878 = await txn1.getOutput('UserAPI_claimReward', 'v877', ctc0, v877);
          
          const v894 = {
            actualPrizePool: v720,
            currProbArrSize: v716,
            maxBankASAbal: v719,
            numDepositors: v714,
            numDeposits: v715,
            randomNum: v721,
            requestReclaim: v717,
            supplyAmtToDefi: v718,
            totalDeposit: v712,
            totalWithdrawal: v713,
            winningUser: v829
            };
          const v3199 = v876;
          const v3200 = v894.totalDeposit;
          const v3201 = v894.totalWithdrawal;
          const v3202 = v894.numDepositors;
          const v3203 = v894.numDeposits;
          const v3204 = v894.currProbArrSize;
          const v3205 = v894.requestReclaim;
          const v3206 = v894.supplyAmtToDefi;
          const v3207 = v894.maxBankASAbal;
          const v3208 = v894.actualPrizePool;
          const v3209 = v894.randomNum;
          const v3210 = v894.winningUser;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_102': {
          const v1073 = v830[1];
          
          break;
          }
        case 'UserAPI_deposit0_102': {
          const v1313 = v830[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_102': {
          const v1553 = v830[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_102': {
          const v1793 = v830[1];
          
          break;
          }
        case 'UserAPI_withdraw0_102': {
          const v2033 = v830[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
  switch (v830[0]) {
    case 'UserAPI_claimReward0_102': {
      const v833 = v830[1];
      undefined /* setApiDetails */;
      ;
      const v851 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v829), null);
      const v852 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v853 = stdlib.fromSome(v851, v852);
      const v858 = stdlib.ge(v689, v720);
      const v859 = v717 ? false : v858;
      const v861 = v853[stdlib.checkedBigNumberify('./index.rsh:211:44:array ref', stdlib.UInt_max, '0')];
      const v862 = stdlib.ge(v721, v861);
      const v863 = v859 ? v862 : false;
      const v865 = v853[stdlib.checkedBigNumberify('./index.rsh:212:44:array ref', stdlib.UInt_max, '1')];
      const v866 = stdlib.le(v721, v865);
      const v867 = v863 ? v866 : false;
      const v869 = stdlib.le(v832, v666);
      const v870 = v869 ? false : true;
      const v871 = v867 ? v870 : false;
      stdlib.assert(v871, {
        at: './index.rsh:209:16:application',
        fs: ['at ./index.rsh:207:17:application call to [unknown function] (defined at: ./index.rsh:207:17:function exp)'],
        msg: null,
        who: 'UserAPI_claimReward'
        });
      const v876 = stdlib.sub(v689, v720);
      ;
      const v877 = null;
      const v878 = await txn1.getOutput('UserAPI_claimReward', 'v877', ctc0, v877);
      if (v382) {
        stdlib.protect(ctc0, await interact.out(v833, v878), {
          at: './index.rsh:192:7:application',
          fs: ['at ./index.rsh:192:7:application call to [unknown function] (defined at: ./index.rsh:192:7:function exp)', 'at ./index.rsh:217:16:application call to "returnF" (defined at: ./index.rsh:207:17:function exp)', 'at ./index.rsh:207:17:application call to [unknown function] (defined at: ./index.rsh:207:17:function exp)'],
          msg: 'out',
          who: 'UserAPI_claimReward'
          });
        }
      else {
        }
      
      const v894 = {
        actualPrizePool: v720,
        currProbArrSize: v716,
        maxBankASAbal: v719,
        numDepositors: v714,
        numDeposits: v715,
        randomNum: v721,
        requestReclaim: v717,
        supplyAmtToDefi: v718,
        totalDeposit: v712,
        totalWithdrawal: v713,
        winningUser: v829
        };
      const v3199 = v876;
      const v3200 = v894.totalDeposit;
      const v3201 = v894.totalWithdrawal;
      const v3202 = v894.numDepositors;
      const v3203 = v894.numDeposits;
      const v3204 = v894.currProbArrSize;
      const v3205 = v894.requestReclaim;
      const v3206 = v894.supplyAmtToDefi;
      const v3207 = v894.maxBankASAbal;
      const v3208 = v894.actualPrizePool;
      const v3209 = v894.randomNum;
      const v3210 = v894.winningUser;
      return;
      
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_102': {
      const v1073 = v830[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_102': {
      const v1313 = v830[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_102': {
      const v1553 = v830[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_102': {
      const v1793 = v830[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_102': {
      const v2033 = v830[1];
      return;
      break;
      }
    }
  
  
  };
export async function _UserAPI_clearSupplyAmtToDefi3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_clearSupplyAmtToDefi3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_clearSupplyAmtToDefi3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    UserAPI_claimReward0_102: ctc7,
    UserAPI_clearSupplyAmtToDefi0_102: ctc6,
    UserAPI_deposit0_102: ctc6,
    UserAPI_setBankASAbal0_102: ctc6,
    UserAPI_transferFunds0_102: ctc8,
    UserAPI_withdraw0_102: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4]);
  const v796 = ctc.selfAddress();
  const v798 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_clearSupplyAmtToDefi0_102" (defined at: ./index.rsh:222:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_clearSupplyAmtToDefi'
    });
  const v801 = stdlib.addressEq(v796, v659);
  stdlib.assert(v801, {
    at: './index.rsh:224:22:application',
    fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_clearSupplyAmtToDefi0_102" (defined at: ./index.rsh:222:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'You are not the lottery creator',
    who: 'UserAPI_clearSupplyAmtToDefi'
    });
  const v805 = ['UserAPI_clearSupplyAmtToDefi0_102', v798];
  
  const txn1 = await (ctc.sendrecv({
    args: [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722, v805],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:225:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
      
      switch (v830[0]) {
        case 'UserAPI_claimReward0_102': {
          const v833 = v830[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_102': {
          const v1073 = v830[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_clearSupplyAmtToDefi"
            });
          ;
          const v1137 = v1073[stdlib.checkedBigNumberify('./index.rsh:222:9:spread', stdlib.UInt_max, '0')];
          const v1139 = null;
          const v1140 = await txn1.getOutput('UserAPI_clearSupplyAmtToDefi', 'v1139', ctc0, v1139);
          
          const v1158 = stdlib.sub(v718, v1137);
          const v1159 = {
            actualPrizePool: v720,
            currProbArrSize: v716,
            maxBankASAbal: v719,
            numDepositors: v714,
            numDeposits: v715,
            randomNum: v721,
            requestReclaim: v717,
            supplyAmtToDefi: v1158,
            totalDeposit: v712,
            totalWithdrawal: v713,
            winningUser: v722
            };
          const v3374 = v689;
          const v3375 = v1159.totalDeposit;
          const v3376 = v1159.totalWithdrawal;
          const v3377 = v1159.numDepositors;
          const v3378 = v1159.numDeposits;
          const v3379 = v1159.currProbArrSize;
          const v3380 = v1159.requestReclaim;
          const v3381 = v1159.supplyAmtToDefi;
          const v3382 = v1159.maxBankASAbal;
          const v3383 = v1159.actualPrizePool;
          const v3384 = v1159.randomNum;
          const v3385 = v1159.winningUser;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_deposit0_102': {
          const v1313 = v830[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_102': {
          const v1553 = v830[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_102': {
          const v1793 = v830[1];
          
          break;
          }
        case 'UserAPI_withdraw0_102': {
          const v2033 = v830[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
  switch (v830[0]) {
    case 'UserAPI_claimReward0_102': {
      const v833 = v830[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_102': {
      const v1073 = v830[1];
      undefined /* setApiDetails */;
      ;
      const v1137 = v1073[stdlib.checkedBigNumberify('./index.rsh:222:9:spread', stdlib.UInt_max, '0')];
      const v1138 = stdlib.addressEq(v829, v659);
      stdlib.assert(v1138, {
        at: './index.rsh:227:16:application',
        fs: ['at ./index.rsh:226:22:application call to [unknown function] (defined at: ./index.rsh:226:22:function exp)'],
        msg: null,
        who: 'UserAPI_clearSupplyAmtToDefi'
        });
      const v1139 = null;
      const v1140 = await txn1.getOutput('UserAPI_clearSupplyAmtToDefi', 'v1139', ctc0, v1139);
      if (v382) {
        stdlib.protect(ctc0, await interact.out(v1073, v1140), {
          at: './index.rsh:223:7:application',
          fs: ['at ./index.rsh:223:7:application call to [unknown function] (defined at: ./index.rsh:223:7:function exp)', 'at ./index.rsh:228:16:application call to "returnF" (defined at: ./index.rsh:226:22:function exp)', 'at ./index.rsh:226:22:application call to [unknown function] (defined at: ./index.rsh:226:22:function exp)'],
          msg: 'out',
          who: 'UserAPI_clearSupplyAmtToDefi'
          });
        }
      else {
        }
      
      const v1158 = stdlib.sub(v718, v1137);
      const v1159 = {
        actualPrizePool: v720,
        currProbArrSize: v716,
        maxBankASAbal: v719,
        numDepositors: v714,
        numDeposits: v715,
        randomNum: v721,
        requestReclaim: v717,
        supplyAmtToDefi: v1158,
        totalDeposit: v712,
        totalWithdrawal: v713,
        winningUser: v722
        };
      const v3374 = v689;
      const v3375 = v1159.totalDeposit;
      const v3376 = v1159.totalWithdrawal;
      const v3377 = v1159.numDepositors;
      const v3378 = v1159.numDeposits;
      const v3379 = v1159.currProbArrSize;
      const v3380 = v1159.requestReclaim;
      const v3381 = v1159.supplyAmtToDefi;
      const v3382 = v1159.maxBankASAbal;
      const v3383 = v1159.actualPrizePool;
      const v3384 = v1159.randomNum;
      const v3385 = v1159.winningUser;
      return;
      
      break;
      }
    case 'UserAPI_deposit0_102': {
      const v1313 = v830[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_102': {
      const v1553 = v830[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_102': {
      const v1793 = v830[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_102': {
      const v2033 = v830[1];
      return;
      break;
      }
    }
  
  
  };
export async function _UserAPI_deposit3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_deposit3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_deposit3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    UserAPI_claimReward0_102: ctc7,
    UserAPI_clearSupplyAmtToDefi0_102: ctc6,
    UserAPI_deposit0_102: ctc6,
    UserAPI_setBankASAbal0_102: ctc6,
    UserAPI_transferFunds0_102: ctc8,
    UserAPI_withdraw0_102: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4]);
  const v723 = ctc.selfAddress();
  const v725 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_deposit0_102" (defined at: ./index.rsh:100:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_deposit'
    });
  const v726 = v725[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v729 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v723), null);
  let v730;
  switch (v729[0]) {
    case 'None': {
      const v731 = v729[1];
      v730 = true;
      
      break;
      }
    case 'Some': {
      const v732 = v729[1];
      v730 = false;
      
      break;
      }
    }
  stdlib.assert(v730, {
    at: './index.rsh:103:15:application',
    fs: ['at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_deposit0_102" (defined at: ./index.rsh:100:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'You cannot deposit more than once',
    who: 'UserAPI_deposit'
    });
  const v736 = ['UserAPI_deposit0_102', v725];
  
  const txn1 = await (ctc.sendrecv({
    args: [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722, v736],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v726, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
      
      switch (v830[0]) {
        case 'UserAPI_claimReward0_102': {
          const v833 = v830[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_102': {
          const v1073 = v830[1];
          
          break;
          }
        case 'UserAPI_deposit0_102': {
          const v1313 = v830[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_deposit"
            });
          const v1321 = v1313[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
          const v1329 = stdlib.add(v689, v1321);
          sim_r.txns.push({
            amt: v1321,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v829), null);
          const v1410 = null;
          const v1411 = await txn1.getOutput('UserAPI_deposit', 'v1410', ctc0, v1410);
          
          const v1419 = stdlib.sub(v666, v832);
          const v1420 = stdlib.mul(v1321, v1419);
          const v1421 = stdlib.add(v716, v1420);
          const v1422 = stdlib.sub(v1421, stdlib.checkedBigNumberify('./index.rsh:113:11:decimal', stdlib.UInt_max, '1'));
          const v1424 = [v716, v1422, v1321];
          await stdlib.simMapSet(sim_r, 0, v829, v1424);
          const v1428 = stdlib.sub(v1329, v1321);
          sim_r.txns.push({
            kind: 'from',
            to: v659,
            tok: undefined /* Nothing */
            });
          const v1441 = stdlib.add(v712, v1321);
          const v1443 = stdlib.add(v714, stdlib.checkedBigNumberify('./index.rsh:124:48:decimal', stdlib.UInt_max, '1'));
          const v1445 = stdlib.add(v715, stdlib.checkedBigNumberify('./index.rsh:125:44:decimal', stdlib.UInt_max, '1'));
          const v1447 = stdlib.add(v718, v1321);
          const v1448 = {
            actualPrizePool: v720,
            currProbArrSize: v1422,
            maxBankASAbal: v719,
            numDepositors: v1443,
            numDeposits: v1445,
            randomNum: v721,
            requestReclaim: v717,
            supplyAmtToDefi: v1447,
            totalDeposit: v1441,
            totalWithdrawal: v713,
            winningUser: v722
            };
          const v3549 = v1428;
          const v3550 = v1448.totalDeposit;
          const v3551 = v1448.totalWithdrawal;
          const v3552 = v1448.numDepositors;
          const v3553 = v1448.numDeposits;
          const v3554 = v1448.currProbArrSize;
          const v3555 = v1448.requestReclaim;
          const v3556 = v1448.supplyAmtToDefi;
          const v3557 = v1448.maxBankASAbal;
          const v3558 = v1448.actualPrizePool;
          const v3559 = v1448.randomNum;
          const v3560 = v1448.winningUser;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_setBankASAbal0_102': {
          const v1553 = v830[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_102': {
          const v1793 = v830[1];
          
          break;
          }
        case 'UserAPI_withdraw0_102': {
          const v2033 = v830[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
  switch (v830[0]) {
    case 'UserAPI_claimReward0_102': {
      const v833 = v830[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_102': {
      const v1073 = v830[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_102': {
      const v1313 = v830[1];
      undefined /* setApiDetails */;
      const v1321 = v1313[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
      const v1329 = stdlib.add(v689, v1321);
      ;
      const v1403 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v829), null);
      let v1404;
      switch (v1403[0]) {
        case 'None': {
          const v1405 = v1403[1];
          v1404 = true;
          
          break;
          }
        case 'Some': {
          const v1406 = v1403[1];
          v1404 = false;
          
          break;
          }
        }
      const v1408 = stdlib.le(v832, v666);
      const v1409 = v1404 ? v1408 : false;
      stdlib.assert(v1409, {
        at: './index.rsh:107:16:application',
        fs: ['at ./index.rsh:106:22:application call to [unknown function] (defined at: ./index.rsh:106:22:function exp)'],
        msg: null,
        who: 'UserAPI_deposit'
        });
      const v1410 = null;
      const v1411 = await txn1.getOutput('UserAPI_deposit', 'v1410', ctc0, v1410);
      if (v382) {
        stdlib.protect(ctc0, await interact.out(v1313, v1411), {
          at: './index.rsh:101:7:application',
          fs: ['at ./index.rsh:101:7:application call to [unknown function] (defined at: ./index.rsh:101:7:function exp)', 'at ./index.rsh:108:16:application call to "returnF" (defined at: ./index.rsh:106:22:function exp)', 'at ./index.rsh:106:22:application call to [unknown function] (defined at: ./index.rsh:106:22:function exp)'],
          msg: 'out',
          who: 'UserAPI_deposit'
          });
        }
      else {
        }
      
      const v1419 = stdlib.sub(v666, v832);
      const v1420 = stdlib.mul(v1321, v1419);
      const v1421 = stdlib.add(v716, v1420);
      const v1422 = stdlib.sub(v1421, stdlib.checkedBigNumberify('./index.rsh:113:11:decimal', stdlib.UInt_max, '1'));
      const v1424 = [v716, v1422, v1321];
      await stdlib.mapSet(map0, v829, v1424);
      const v1428 = stdlib.sub(v1329, v1321);
      ;
      const v1441 = stdlib.add(v712, v1321);
      const v1443 = stdlib.add(v714, stdlib.checkedBigNumberify('./index.rsh:124:48:decimal', stdlib.UInt_max, '1'));
      const v1445 = stdlib.add(v715, stdlib.checkedBigNumberify('./index.rsh:125:44:decimal', stdlib.UInt_max, '1'));
      const v1447 = stdlib.add(v718, v1321);
      const v1448 = {
        actualPrizePool: v720,
        currProbArrSize: v1422,
        maxBankASAbal: v719,
        numDepositors: v1443,
        numDeposits: v1445,
        randomNum: v721,
        requestReclaim: v717,
        supplyAmtToDefi: v1447,
        totalDeposit: v1441,
        totalWithdrawal: v713,
        winningUser: v722
        };
      const v3549 = v1428;
      const v3550 = v1448.totalDeposit;
      const v3551 = v1448.totalWithdrawal;
      const v3552 = v1448.numDepositors;
      const v3553 = v1448.numDeposits;
      const v3554 = v1448.currProbArrSize;
      const v3555 = v1448.requestReclaim;
      const v3556 = v1448.supplyAmtToDefi;
      const v3557 = v1448.maxBankASAbal;
      const v3558 = v1448.actualPrizePool;
      const v3559 = v1448.randomNum;
      const v3560 = v1448.winningUser;
      return;
      
      break;
      }
    case 'UserAPI_setBankASAbal0_102': {
      const v1553 = v830[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_102': {
      const v1793 = v830[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_102': {
      const v2033 = v830[1];
      return;
      break;
      }
    }
  
  
  };
export async function _UserAPI_setBankASAbal3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_setBankASAbal3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_setBankASAbal3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    UserAPI_claimReward0_102: ctc7,
    UserAPI_clearSupplyAmtToDefi0_102: ctc6,
    UserAPI_deposit0_102: ctc6,
    UserAPI_setBankASAbal0_102: ctc6,
    UserAPI_transferFunds0_102: ctc8,
    UserAPI_withdraw0_102: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4]);
  const v807 = ctc.selfAddress();
  const v809 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:234:23:application call to [unknown function] (defined at: ./index.rsh:234:23:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_setBankASAbal0_102" (defined at: ./index.rsh:232:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_setBankASAbal'
    });
  const v812 = stdlib.addressEq(v807, v659);
  stdlib.assert(v812, {
    at: './index.rsh:235:15:application',
    fs: ['at ./index.rsh:234:23:application call to [unknown function] (defined at: ./index.rsh:234:23:function exp)', 'at ./index.rsh:234:23:application call to [unknown function] (defined at: ./index.rsh:234:23:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_setBankASAbal0_102" (defined at: ./index.rsh:232:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'You are not the lottery creator',
    who: 'UserAPI_setBankASAbal'
    });
  const v816 = ['UserAPI_setBankASAbal0_102', v809];
  
  const txn1 = await (ctc.sendrecv({
    args: [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722, v816],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:236:26:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
      
      switch (v830[0]) {
        case 'UserAPI_claimReward0_102': {
          const v833 = v830[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_102': {
          const v1073 = v830[1];
          
          break;
          }
        case 'UserAPI_deposit0_102': {
          const v1313 = v830[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_102': {
          const v1553 = v830[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_setBankASAbal"
            });
          ;
          const v1691 = v1553[stdlib.checkedBigNumberify('./index.rsh:232:9:spread', stdlib.UInt_max, '0')];
          const v1693 = null;
          const v1694 = await txn1.getOutput('UserAPI_setBankASAbal', 'v1693', ctc0, v1693);
          
          const v1711 = {
            actualPrizePool: v720,
            currProbArrSize: v716,
            maxBankASAbal: v1691,
            numDepositors: v714,
            numDeposits: v715,
            randomNum: v721,
            requestReclaim: v717,
            supplyAmtToDefi: v718,
            totalDeposit: v712,
            totalWithdrawal: v713,
            winningUser: v722
            };
          const v3724 = v689;
          const v3725 = v1711.totalDeposit;
          const v3726 = v1711.totalWithdrawal;
          const v3727 = v1711.numDepositors;
          const v3728 = v1711.numDeposits;
          const v3729 = v1711.currProbArrSize;
          const v3730 = v1711.requestReclaim;
          const v3731 = v1711.supplyAmtToDefi;
          const v3732 = v1711.maxBankASAbal;
          const v3733 = v1711.actualPrizePool;
          const v3734 = v1711.randomNum;
          const v3735 = v1711.winningUser;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_transferFunds0_102': {
          const v1793 = v830[1];
          
          break;
          }
        case 'UserAPI_withdraw0_102': {
          const v2033 = v830[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
  switch (v830[0]) {
    case 'UserAPI_claimReward0_102': {
      const v833 = v830[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_102': {
      const v1073 = v830[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_102': {
      const v1313 = v830[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_102': {
      const v1553 = v830[1];
      undefined /* setApiDetails */;
      ;
      const v1691 = v1553[stdlib.checkedBigNumberify('./index.rsh:232:9:spread', stdlib.UInt_max, '0')];
      const v1692 = stdlib.addressEq(v829, v659);
      stdlib.assert(v1692, {
        at: './index.rsh:238:16:application',
        fs: ['at ./index.rsh:237:32:application call to [unknown function] (defined at: ./index.rsh:237:32:function exp)'],
        msg: null,
        who: 'UserAPI_setBankASAbal'
        });
      const v1693 = null;
      const v1694 = await txn1.getOutput('UserAPI_setBankASAbal', 'v1693', ctc0, v1693);
      if (v382) {
        stdlib.protect(ctc0, await interact.out(v1553, v1694), {
          at: './index.rsh:233:7:application',
          fs: ['at ./index.rsh:233:7:application call to [unknown function] (defined at: ./index.rsh:233:7:function exp)', 'at ./index.rsh:239:16:application call to "returnF" (defined at: ./index.rsh:237:32:function exp)', 'at ./index.rsh:237:32:application call to [unknown function] (defined at: ./index.rsh:237:32:function exp)'],
          msg: 'out',
          who: 'UserAPI_setBankASAbal'
          });
        }
      else {
        }
      
      const v1711 = {
        actualPrizePool: v720,
        currProbArrSize: v716,
        maxBankASAbal: v1691,
        numDepositors: v714,
        numDeposits: v715,
        randomNum: v721,
        requestReclaim: v717,
        supplyAmtToDefi: v718,
        totalDeposit: v712,
        totalWithdrawal: v713,
        winningUser: v722
        };
      const v3724 = v689;
      const v3725 = v1711.totalDeposit;
      const v3726 = v1711.totalWithdrawal;
      const v3727 = v1711.numDepositors;
      const v3728 = v1711.numDeposits;
      const v3729 = v1711.currProbArrSize;
      const v3730 = v1711.requestReclaim;
      const v3731 = v1711.supplyAmtToDefi;
      const v3732 = v1711.maxBankASAbal;
      const v3733 = v1711.actualPrizePool;
      const v3734 = v1711.randomNum;
      const v3735 = v1711.winningUser;
      return;
      
      break;
      }
    case 'UserAPI_transferFunds0_102': {
      const v1793 = v830[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_102': {
      const v2033 = v830[1];
      return;
      break;
      }
    }
  
  
  };
export async function _UserAPI_transferFunds3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_transferFunds3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_transferFunds3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    UserAPI_claimReward0_102: ctc7,
    UserAPI_clearSupplyAmtToDefi0_102: ctc8,
    UserAPI_deposit0_102: ctc8,
    UserAPI_setBankASAbal0_102: ctc8,
    UserAPI_transferFunds0_102: ctc6,
    UserAPI_withdraw0_102: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4]);
  const v755 = ctc.selfAddress();
  const v757 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:167:26:application call to [unknown function] (defined at: ./index.rsh:167:26:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_transferFunds0_102" (defined at: ./index.rsh:165:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_transferFunds'
    });
  const v759 = v757[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v763 = stdlib.addressEq(v755, v659);
  stdlib.assert(v763, {
    at: './index.rsh:168:15:application',
    fs: ['at ./index.rsh:167:26:application call to [unknown function] (defined at: ./index.rsh:167:26:function exp)', 'at ./index.rsh:167:26:application call to [unknown function] (defined at: ./index.rsh:167:26:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_transferFunds0_102" (defined at: ./index.rsh:165:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'You are not the lottery creator',
    who: 'UserAPI_transferFunds'
    });
  stdlib.assert(v717, {
    at: './index.rsh:169:15:application',
    fs: ['at ./index.rsh:167:26:application call to [unknown function] (defined at: ./index.rsh:167:26:function exp)', 'at ./index.rsh:167:26:application call to [unknown function] (defined at: ./index.rsh:167:26:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_transferFunds0_102" (defined at: ./index.rsh:165:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'Funds already transferred',
    who: 'UserAPI_transferFunds'
    });
  const v766 = stdlib.ge(v759, v712);
  stdlib.assert(v766, {
    at: './index.rsh:170:15:application',
    fs: ['at ./index.rsh:167:26:application call to [unknown function] (defined at: ./index.rsh:167:26:function exp)', 'at ./index.rsh:167:26:application call to [unknown function] (defined at: ./index.rsh:167:26:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_transferFunds0_102" (defined at: ./index.rsh:165:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'Amount reclaimed from DeFi must be greater than deposits',
    who: 'UserAPI_transferFunds'
    });
  const v771 = ['UserAPI_transferFunds0_102', v757];
  
  const txn1 = await (ctc.sendrecv({
    args: [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722, v771],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v759, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
      
      switch (v830[0]) {
        case 'UserAPI_claimReward0_102': {
          const v833 = v830[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_102': {
          const v1073 = v830[1];
          
          break;
          }
        case 'UserAPI_deposit0_102': {
          const v1313 = v830[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_102': {
          const v1553 = v830[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_102': {
          const v1793 = v830[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_transferFunds"
            });
          const v1806 = v1793[stdlib.checkedBigNumberify('./index.rsh:165:9:spread', stdlib.UInt_max, '1')];
          const v1809 = stdlib.add(v689, v1806);
          sim_r.txns.push({
            amt: v1806,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1954 = v1793[stdlib.checkedBigNumberify('./index.rsh:165:9:spread', stdlib.UInt_max, '0')];
          const v1966 = null;
          const v1967 = await txn1.getOutput('UserAPI_transferFunds', 'v1966', ctc0, v1966);
          
          const v1986 = stdlib.sub(v1806, v712);
          const v1987 = {
            actualPrizePool: v1986,
            currProbArrSize: v716,
            maxBankASAbal: v719,
            numDepositors: v714,
            numDeposits: v715,
            randomNum: v1954,
            requestReclaim: false,
            supplyAmtToDefi: v718,
            totalDeposit: v712,
            totalWithdrawal: v713,
            winningUser: v722
            };
          const v3899 = v1809;
          const v3900 = v1987.totalDeposit;
          const v3901 = v1987.totalWithdrawal;
          const v3902 = v1987.numDepositors;
          const v3903 = v1987.numDeposits;
          const v3904 = v1987.currProbArrSize;
          const v3905 = v1987.requestReclaim;
          const v3906 = v1987.supplyAmtToDefi;
          const v3907 = v1987.maxBankASAbal;
          const v3908 = v1987.actualPrizePool;
          const v3909 = v1987.randomNum;
          const v3910 = v1987.winningUser;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_withdraw0_102': {
          const v2033 = v830[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
  switch (v830[0]) {
    case 'UserAPI_claimReward0_102': {
      const v833 = v830[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_102': {
      const v1073 = v830[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_102': {
      const v1313 = v830[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_102': {
      const v1553 = v830[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_102': {
      const v1793 = v830[1];
      undefined /* setApiDetails */;
      const v1806 = v1793[stdlib.checkedBigNumberify('./index.rsh:165:9:spread', stdlib.UInt_max, '1')];
      const v1809 = stdlib.add(v689, v1806);
      ;
      const v1954 = v1793[stdlib.checkedBigNumberify('./index.rsh:165:9:spread', stdlib.UInt_max, '0')];
      const v1956 = stdlib.addressEq(v829, v659);
      const v1958 = v1956 ? v717 : false;
      const v1960 = stdlib.ge(v1806, v712);
      const v1961 = v1958 ? v1960 : false;
      const v1963 = stdlib.le(v832, v666);
      const v1964 = v1963 ? false : true;
      const v1965 = v1961 ? v1964 : false;
      stdlib.assert(v1965, {
        at: './index.rsh:177:16:application',
        fs: ['at ./index.rsh:176:35:application call to [unknown function] (defined at: ./index.rsh:176:35:function exp)'],
        msg: null,
        who: 'UserAPI_transferFunds'
        });
      const v1966 = null;
      const v1967 = await txn1.getOutput('UserAPI_transferFunds', 'v1966', ctc0, v1966);
      if (v382) {
        stdlib.protect(ctc0, await interact.out(v1793, v1967), {
          at: './index.rsh:166:7:application',
          fs: ['at ./index.rsh:166:7:application call to [unknown function] (defined at: ./index.rsh:166:7:function exp)', 'at ./index.rsh:181:16:application call to "returnF" (defined at: ./index.rsh:176:35:function exp)', 'at ./index.rsh:176:35:application call to [unknown function] (defined at: ./index.rsh:176:35:function exp)'],
          msg: 'out',
          who: 'UserAPI_transferFunds'
          });
        }
      else {
        }
      
      const v1986 = stdlib.sub(v1806, v712);
      const v1987 = {
        actualPrizePool: v1986,
        currProbArrSize: v716,
        maxBankASAbal: v719,
        numDepositors: v714,
        numDeposits: v715,
        randomNum: v1954,
        requestReclaim: false,
        supplyAmtToDefi: v718,
        totalDeposit: v712,
        totalWithdrawal: v713,
        winningUser: v722
        };
      const v3899 = v1809;
      const v3900 = v1987.totalDeposit;
      const v3901 = v1987.totalWithdrawal;
      const v3902 = v1987.numDepositors;
      const v3903 = v1987.numDeposits;
      const v3904 = v1987.currProbArrSize;
      const v3905 = v1987.requestReclaim;
      const v3906 = v1987.supplyAmtToDefi;
      const v3907 = v1987.maxBankASAbal;
      const v3908 = v1987.actualPrizePool;
      const v3909 = v1987.randomNum;
      const v3910 = v1987.winningUser;
      return;
      
      break;
      }
    case 'UserAPI_withdraw0_102': {
      const v2033 = v830[1];
      return;
      break;
      }
    }
  
  
  };
export async function _UserAPI_withdraw3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_withdraw3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_withdraw3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    UserAPI_claimReward0_102: ctc6,
    UserAPI_clearSupplyAmtToDefi0_102: ctc7,
    UserAPI_deposit0_102: ctc7,
    UserAPI_setBankASAbal0_102: ctc7,
    UserAPI_transferFunds0_102: ctc8,
    UserAPI_withdraw0_102: ctc6
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4]);
  const v738 = ctc.selfAddress();
  const v740 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:133:10:application call to [unknown function] (defined at: ./index.rsh:133:10:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_withdraw0_102" (defined at: ./index.rsh:131:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_withdraw'
    });
  const v742 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v738), null);
  const v743 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v744 = stdlib.fromSome(v742, v743);
  const v745 = v744[stdlib.checkedBigNumberify('./index.rsh:134:71:array ref', stdlib.UInt_max, '2')];
  const v746 = stdlib.gt(v745, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v746, {
    at: './index.rsh:135:15:application',
    fs: ['at ./index.rsh:133:10:application call to [unknown function] (defined at: ./index.rsh:133:10:function exp)', 'at ./index.rsh:133:10:application call to [unknown function] (defined at: ./index.rsh:133:10:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_withdraw0_102" (defined at: ./index.rsh:131:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'You have no balance to withdraw',
    who: 'UserAPI_withdraw'
    });
  const v748 = v717 ? false : true;
  stdlib.assert(v748, {
    at: './index.rsh:136:15:application',
    fs: ['at ./index.rsh:133:10:application call to [unknown function] (defined at: ./index.rsh:133:10:function exp)', 'at ./index.rsh:133:10:application call to [unknown function] (defined at: ./index.rsh:133:10:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_withdraw0_102" (defined at: ./index.rsh:131:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'Funds not reclaimed from DeFi protocol',
    who: 'UserAPI_withdraw'
    });
  const v750 = stdlib.ge(v689, v745);
  stdlib.assert(v750, {
    at: './index.rsh:137:15:application',
    fs: ['at ./index.rsh:133:10:application call to [unknown function] (defined at: ./index.rsh:133:10:function exp)', 'at ./index.rsh:133:10:application call to [unknown function] (defined at: ./index.rsh:133:10:function exp)', 'at ./index.rsh:72:31:application call to "runUserAPI_withdraw0_102" (defined at: ./index.rsh:131:9:function exp)', 'at ./index.rsh:72:31:application call to [unknown function] (defined at: ./index.rsh:72:31:function exp)'],
    msg: 'Contract does not have enough funds to dispense',
    who: 'UserAPI_withdraw'
    });
  const v753 = ['UserAPI_withdraw0_102', v740];
  
  const txn1 = await (ctc.sendrecv({
    args: [v659, v662, v666, v689, v712, v713, v714, v715, v716, v717, v718, v719, v720, v721, v722, v753],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:142:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
      
      switch (v830[0]) {
        case 'UserAPI_claimReward0_102': {
          const v833 = v830[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_102': {
          const v1073 = v830[1];
          
          break;
          }
        case 'UserAPI_deposit0_102': {
          const v1313 = v830[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_102': {
          const v1553 = v830[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_102': {
          const v1793 = v830[1];
          
          break;
          }
        case 'UserAPI_withdraw0_102': {
          const v2033 = v830[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_withdraw"
            });
          ;
          const v2230 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v829), null);
          const v2231 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2232 = stdlib.fromSome(v2230, v2231);
          const v2233 = v2232[stdlib.checkedBigNumberify('./index.rsh:145:43:array ref', stdlib.UInt_max, '2')];
          const v2245 = null;
          const v2246 = await txn1.getOutput('UserAPI_withdraw', 'v2245', ctc0, v2245);
          
          const v2251 = v2232[stdlib.checkedBigNumberify('./index.rsh:153:25:array ref', stdlib.UInt_max, '0')];
          const v2252 = v2232[stdlib.checkedBigNumberify('./index.rsh:154:25:array ref', stdlib.UInt_max, '1')];
          const v2253 = [v2251, v2252, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v829, v2253);
          const v2257 = stdlib.sub(v689, v2233);
          sim_r.txns.push({
            kind: 'from',
            to: v829,
            tok: undefined /* Nothing */
            });
          const v2270 = stdlib.add(v713, v2233);
          const v2271 = {
            actualPrizePool: v720,
            currProbArrSize: v716,
            maxBankASAbal: v719,
            numDepositors: v714,
            numDeposits: v715,
            randomNum: v721,
            requestReclaim: v717,
            supplyAmtToDefi: v718,
            totalDeposit: v712,
            totalWithdrawal: v2270,
            winningUser: v722
            };
          const v4074 = v2257;
          const v4075 = v2271.totalDeposit;
          const v4076 = v2271.totalWithdrawal;
          const v4077 = v2271.numDepositors;
          const v4078 = v2271.numDeposits;
          const v4079 = v2271.currProbArrSize;
          const v4080 = v2271.requestReclaim;
          const v4081 = v2271.supplyAmtToDefi;
          const v4082 = v2271.maxBankASAbal;
          const v4083 = v2271.actualPrizePool;
          const v4084 = v2271.randomNum;
          const v4085 = v2271.winningUser;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc4, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v830], secs: v832, time: v831, didSend: v382, from: v829 } = txn1;
  switch (v830[0]) {
    case 'UserAPI_claimReward0_102': {
      const v833 = v830[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_102': {
      const v1073 = v830[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_102': {
      const v1313 = v830[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_102': {
      const v1553 = v830[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_102': {
      const v1793 = v830[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_102': {
      const v2033 = v830[1];
      undefined /* setApiDetails */;
      ;
      const v2230 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v829), null);
      const v2231 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2232 = stdlib.fromSome(v2230, v2231);
      const v2233 = v2232[stdlib.checkedBigNumberify('./index.rsh:145:43:array ref', stdlib.UInt_max, '2')];
      const v2234 = stdlib.gt(v2233, stdlib.checkedBigNumberify('./index.rsh:146:31:decimal', stdlib.UInt_max, '0'));
      const v2236 = v717 ? false : true;
      const v2237 = v2234 ? v2236 : false;
      const v2239 = stdlib.ge(v689, v2233);
      const v2240 = v2237 ? v2239 : false;
      const v2242 = stdlib.le(v832, v666);
      const v2243 = v2242 ? false : true;
      const v2244 = v2240 ? v2243 : false;
      stdlib.assert(v2244, {
        at: './index.rsh:146:16:application',
        fs: ['at ./index.rsh:143:17:application call to [unknown function] (defined at: ./index.rsh:143:17:function exp)'],
        msg: null,
        who: 'UserAPI_withdraw'
        });
      const v2245 = null;
      const v2246 = await txn1.getOutput('UserAPI_withdraw', 'v2245', ctc0, v2245);
      if (v382) {
        stdlib.protect(ctc0, await interact.out(v2033, v2246), {
          at: './index.rsh:132:7:application',
          fs: ['at ./index.rsh:132:7:application call to [unknown function] (defined at: ./index.rsh:132:7:function exp)', 'at ./index.rsh:150:16:application call to "returnF" (defined at: ./index.rsh:143:17:function exp)', 'at ./index.rsh:143:17:application call to [unknown function] (defined at: ./index.rsh:143:17:function exp)'],
          msg: 'out',
          who: 'UserAPI_withdraw'
          });
        }
      else {
        }
      
      const v2251 = v2232[stdlib.checkedBigNumberify('./index.rsh:153:25:array ref', stdlib.UInt_max, '0')];
      const v2252 = v2232[stdlib.checkedBigNumberify('./index.rsh:154:25:array ref', stdlib.UInt_max, '1')];
      const v2253 = [v2251, v2252, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, v829, v2253);
      const v2257 = stdlib.sub(v689, v2233);
      ;
      const v2270 = stdlib.add(v713, v2233);
      const v2271 = {
        actualPrizePool: v720,
        currProbArrSize: v716,
        maxBankASAbal: v719,
        numDepositors: v714,
        numDeposits: v715,
        randomNum: v721,
        requestReclaim: v717,
        supplyAmtToDefi: v718,
        totalDeposit: v712,
        totalWithdrawal: v2270,
        winningUser: v722
        };
      const v4074 = v2257;
      const v4075 = v2271.totalDeposit;
      const v4076 = v2271.totalWithdrawal;
      const v4077 = v2271.numDepositors;
      const v4078 = v2271.numDeposits;
      const v4079 = v2271.currProbArrSize;
      const v4080 = v2271.requestReclaim;
      const v4081 = v2271.supplyAmtToDefi;
      const v4082 = v2271.maxBankASAbal;
      const v4083 = v2271.actualPrizePool;
      const v4084 = v2271.randomNum;
      const v4085 = v2271.winningUser;
      return;
      
      break;
      }
    }
  
  
  };
export async function UserAPI_claimReward(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_claimReward expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_claimReward expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _UserAPI_claimReward3(ctcTop, interact);}
  };
export async function UserAPI_clearSupplyAmtToDefi(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_clearSupplyAmtToDefi expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_clearSupplyAmtToDefi expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _UserAPI_clearSupplyAmtToDefi3(ctcTop, interact);}
  };
export async function UserAPI_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _UserAPI_deposit3(ctcTop, interact);}
  };
export async function UserAPI_setBankASAbal(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_setBankASAbal expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_setBankASAbal expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _UserAPI_setBankASAbal3(ctcTop, interact);}
  };
export async function UserAPI_transferFunds(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_transferFunds expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_transferFunds expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _UserAPI_transferFunds3(ctcTop, interact);}
  };
export async function UserAPI_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _UserAPI_withdraw3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`UserAPI_claimReward()byte[0]`, `UserAPI_clearSupplyAmtToDefi(uint64)byte[0]`, `UserAPI_deposit(uint64)byte[0]`, `UserAPI_setBankASAbal(uint64)byte[0]`, `UserAPI_transferFunds(uint64,uint64)byte[0]`, `UserAPI_withdraw()byte[0]`],
    pure: [`UserView_actualPrizePool()uint64`, `UserView_currProbArrSize()uint64`, `UserView_deadlineSecs()uint64`, `UserView_deploymentSecs()uint64`, `UserView_getProbIndex(address)uint64[2]`, `UserView_getUserDeposit(address)uint64`, `UserView_maxBankASAbal()uint64`, `UserView_numDepositors()uint64`, `UserView_numDeposits()uint64`, `UserView_randomNum()uint64`, `UserView_requestReclaim()byte`, `UserView_supplyAmtToDefi()uint64`, `UserView_totalDeposit()uint64`, `UserView_totalWithdrawal()uint64`, `UserView_winningUser()address`],
    sigs: [`UserAPI_claimReward()byte[0]`, `UserAPI_clearSupplyAmtToDefi(uint64)byte[0]`, `UserAPI_deposit(uint64)byte[0]`, `UserAPI_setBankASAbal(uint64)byte[0]`, `UserAPI_transferFunds(uint64,uint64)byte[0]`, `UserAPI_withdraw()byte[0]`, `UserView_actualPrizePool()uint64`, `UserView_currProbArrSize()uint64`, `UserView_deadlineSecs()uint64`, `UserView_deploymentSecs()uint64`, `UserView_getProbIndex(address)uint64[2]`, `UserView_getUserDeposit(address)uint64`, `UserView_maxBankASAbal()uint64`, `UserView_numDepositors()uint64`, `UserView_numDeposits()uint64`, `UserView_randomNum()uint64`, `UserView_requestReclaim()byte`, `UserView_supplyAmtToDefi()uint64`, `UserView_totalDeposit()uint64`, `UserView_totalWithdrawal()uint64`, `UserView_winningUser()address`]
    },
  appApproval: `BiAfAAMBCBACBRgZn9eXyQrUq/a0Dda+5NkOnOmL9A6Urb65D9K2jYsO+bWdyQ6j1PGxDKmlmu0M/tqy+Azx3OGRC7bz2eICiq+CtASrwafOBZG+4qsIs6jYjgPjmNR6utmzhgH8xvWSAoqrlR0gKCYDAQABAQAiNQAxGEEIPCpkSSJbNQElWzUCMRkkEkEACjEAKCEIr2ZCCAk2GgAXSUECxCI1BCQ1BkkhCQxAAYhJIQoMQACpSSELDEAATUkhDAxAAC1JIQ0MQAASIQ0SRCo1/yg0/1AhBK9QQgKhIQwSRCo1/4ABBTT/UCEEr1BCAo0hCxJENAEjEkQoZClkUEk1A1dhCDUHQgeoSSEODEAAOUkhDwxAABkhDxJENAEjEkQoZClkUEk1A1dgATUHQgeBIQ4SRDQBIxJEKGQpZFBJNQNXSAg1B0IHaCEKEkQ2GgE1/4ABAzT/UCWvUEICH0khEAxAAHVJIREMQAA5SSESDEAAGSESEkQ0ASMSRChkKWRQSTUDV3EINQdCByUhERJENAEjEkQoZClkUEk1A1dQCDUHQgcMIRASRDQBIxJENhoBiAcOSTX+IlVAAAYiNf9CABA0/lcBGEk1/SEEWzX/QgAANP8WNQdCBtdJIRMMQAAZIRMSRDQBIxJEKGQpZFBJNQNXaQg1B0IGtyEJEkQ0ASMSRDYaAYgGuUk1/iJVQAAIIQSvNf9CABY0/lcBGEk1/VcACDT9VwgIUDX/QgAANP81B0IGe0khFAxAAJlJIRUMQABZSSEWDEAAOUkhFwxAABkhFxJENAEjEkQoZClkUEk1A1dYCDUHQgZGIRYSRDQBIxJEKGQpZFBJNQNXKAg1B0IGLSEVEkQ0ASMSRChkKWRQSTUDV3kINQdCBhRJIRgMQAAZIRgSRDQBIxJEKGQpZFBJNQNXgSA1B0IF9CEUEkQ0ASMSRChkKWRQSTUDV0AINQdCBdtJIRkMQABPSSEaDEAANUkhGwxAABkhGxJENAEjEkQoZClkUEk1A1c4CDUHQgWtIRoSRDYaATX/gAECNP9QJa9QQgBkIRkSRDYaATX/KTT/UCWvUEIAUUkhHAxAABkhHBJENAEjEkQoZClkUEk1A1cgCDUHQgVlgfvNvBgSRDYaATYaAlA1/4ABBDT/UEIAGDYaAhc1BDYaAzYaARdJIQUMQAO7IQUSRCM0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSkpJVwAgNf8hHVs1/iEeWzX9gTBbNfyBOFs1+4FAWzX6gUhbNfmBUFs1+IFYWzX3V2ABFzX2gWFbNfWBaVs19IFxWzXzgXlbNfJXgSA18Uk1BTXwgASKiizcNPBQsDTwIlVJIwxAAX1JgQQMQAEhSSEGDEAApiEGEkQhB68xAIgEpkk17lcBGDTuIlVNSTXvIQRbSTXuIg009hQQNPw07g8QMgc0/Q4UEESACAAAAAAAAAjFsCo1BzEAKCk071cACDTvVwgIUCWvUFBmsSKyATTusggkshAxALIHszT/NP40/TTzFjT3FlA09BZQNPkWUDT4FlA08hZQNPYWUQcIUDT1FlA0+xZQNPo07ggWUDTxUDIGNPw07glCAwZINPBXARA17zTvJVs17jTuiAQIMQA0/xI09hA07jT7DxAyBzT9DhQQRIAIAAAAAAAAB66wKjUHNP80/jT9NO40+wkWNPcWUDT0FlA0+RZQNPgWUDTvVwAIUChQNPUWUDT7FlA0+hZQNPFQMgY0/DTuCEICkkg08FcBCDXvMQA0/xJEgAgAAAAAAAAGnbAqNQc0/zT+NP008xY09xZQNO9QNPkWUDT4FlA08hZQNPYWUQcIUDT1FlA0+xZQNPoWUDTxUDIGNPxCAj1JJAxAAR1JIQUMQAC8SDTwVwEINe807xc17jTuiAMzMQCIAx9JNewiVUAABiQ17UIABiI17UIAADTtMgc0/Q4QRIAIAAAAAAAABYKwKjUHNPc07jT9MgcJCwgkCTXsMQAoKTT3FjTsFlA07hZQUGaxIrIBNO6yCCSyEDT/sgezNP80/jT9NPMWNOwWUDT0FlA0+SQIFlA0+CQIFlA08hZQNPYWUQcIUDT1NO4IFlA0+zTuCBZQNPoWUDTxUDIGNPw07gg07glCAXRINPBXAQg17zEANP8SRIAIAAAAAAAABHOwKjUHNP80/jT9NPMWNPcWUDT0FlA0+RZQNPgWUDTyFlA09hZRBwhQNPU07xcJFlA0+xZQNPoWUDTxUDIGNPxCARpIIQevMQCIAhdJNe5XARg07iJVTTXvNPYUNPw08w8QNPI07yJbDxA08jTvJVsOEDIHNP0OFBBEsSKyATTzsggkshAxALIHs4AIAAAAAAAAA22wKjUHNP80/jT9NPMWNPcWUDT0FlA0+RZQNPgWUDTyFlA09hZRBwhQNPUWUDT7FlA0+hZQMQBQMgY0/DTzCUIAiCISRIGgjQaIAZMiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAxADIHMgc0/wiASQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxAFAyBiJCAAA1/zX+Nf01/DX7Nfo0/YE5WzX5NP2BQVs1+DT9IQdbNfc0/SEdWzX2NP0lWzX1NP1XMAEXNfQ0/YExWzXzNP0hBFs18jT9Ils18TT9IR5bNfA0/VdJIDXvNPo0+xZQNPwWUDT/FlA0+RZQNPgWUDT3FlA09hZQNPUWUDT0FlEHCFA08xZQNPIWUDTxFlA08BZQNO9QKEsBVwB/ZylLAVd/ImdIIzUBMgY1AkIAHDEZIQYSRLEisgEisggkshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghCK+JKGKJNABJSiQINQA4BzIKEkQ4ECQSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 25,
  stateKeys: 2,
  stateSize: 161,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v660",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v660",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_claimReward0_102",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_UserAPI_clearSupplyAmtToDefi0_102",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_UserAPI_deposit0_102",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_UserAPI_setBankASAbal0_102",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_UserAPI_transferFunds0_102",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_withdraw0_102",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v830",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1139",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1410",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1693",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1966",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2245",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v877",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "UserAPI_claimReward",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "UserAPI_clearSupplyAmtToDefi",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "UserAPI_deposit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "UserAPI_setBankASAbal",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "UserAPI_transferFunds",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserAPI_withdraw",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_actualPrizePool",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_currProbArrSize",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_deadlineSecs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_deploymentSecs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v4101",
        "type": "address"
      }
    ],
    "name": "UserView_getProbIndex",
    "outputs": [
      {
        "internalType": "uint256[2]",
        "name": "",
        "type": "uint256[2]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v4103",
        "type": "address"
      }
    ],
    "name": "UserView_getUserDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_maxBankASAbal",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_numDepositors",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_numDeposits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_randomNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_requestReclaim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_supplyAmtToDefi",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_totalDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_totalWithdrawal",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserView_winningUser",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256[3]",
            "name": "_Some",
            "type": "uint256[3]"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_claimReward0_102",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_UserAPI_clearSupplyAmtToDefi0_102",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_UserAPI_deposit0_102",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_UserAPI_setBankASAbal0_102",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_UserAPI_transferFunds0_102",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_withdraw0_102",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v830",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003692380380620036928339810160408190526200002691620004f8565b6000805543600355620000386200031f565b604080513381528351602080830191909152840151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008c341560166200014a565b80516000908190528151602001819052815160400181905281516060018190528151608001819052815160a0018190528151600160c090910152815160e0018190528151610100018190528151610120015280513361014090910152620000f262000398565b80513390528051426020918201819052908401515162000112916200059a565b815160409081019190915282516020808401805192909252815143910152516000910152620001418162000174565b505050620006c0565b81620001705760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b62000202604051806101e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528185018051820151606080870191909152815151610100908101516080808901919091528351516101209081015160a0808b01919091528551519094015160c0808b01919091528551519092015160e0808b0191909152855151880151938a01939093528451519091015115159088015282515101516101408088019190915282515184015161016088015282515151610180880152825151909101516101a087015290515101519092166101c08401526003600055436001559051620002f491839101620005c1565b604051602081830303815290604052600290805190602001906200031a929190620003ca565b505050565b60405180602001604052806200039360405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b905290565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016200039362000459565b828054620003d89062000683565b90600052602060002090601f016020900481019282620003fc576000855562000447565b82601f106200041757805160ff191683800117855562000447565b8280016001018555821562000447579182015b82811115620004475782518255916020019190600101906200042a565b5062000455929150620004e1565b5090565b6040518060600160405280620004cd60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b815260200160008152602001600081525090565b5b80821115620004555760008155600101620004e2565b60008183036040808212156200050d57600080fd5b80518082016001600160401b0380821183831017156200053d57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200055757600080fd5b8351945060208501915084821081831117156200058457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620005bc57634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b031681526101e081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516200063a8285018215159052565b50506101408381015190830152610160808401519083015261018080840151908301526101a080840151908301526101c0928301516001600160a01b0316929091019190915290565b600181811c908216806200069857607f821691505b60208210811415620006ba57634e487b7160e01b600052602260045260246000fd5b50919050565b612fc280620006d06000396000f3fe6080604052600436106101735760003560e01c8063782a337a116100c8578063acb275b911610084578063eb5e5d0a11610061578063eb5e5d0a146103ac578063edc9c793146103c1578063ee86704c146103d6578063f8112096146103eb57005b8063acb275b91461036d578063ad31e85214610382578063b30e42751461039757005b8063782a337a146102e357806383230757146102f8578063974207881461030d5780639f0b35a714610322578063ab53f2c614610337578063ac9ab3c11461035a57005b806330a2d7741161012f5780636137f38a1161010c5780636137f38a146102a957806369a2941f146102b15780636cfb3221146102c657806371fadb90146102db57005b806330a2d774146102475780633bc5b7bf1461026757806344b6b6091461029457005b80630a2107071461017c5780630c8f8c88146101b25780630fd59e41146101df5780631e93b0f1146102025780632a223a81146102215780632db837bb1461023457005b3661017a57005b005b34801561018857600080fd5b5061019c610197366004612904565b6103fe565b6040516101a99190612928565b60405180910390f35b3480156101be57600080fd5b506101c761056b565b6040516001600160a01b0390911681526020016101a9565b6101f26101ed366004612959565b610632565b60405190151581526020016101a9565b34801561020e57600080fd5b506003545b6040519081526020016101a9565b61017a61022f366004612972565b61068a565b6101f261024236600461298b565b6106ae565b34801561025357600080fd5b50610213610262366004612904565b61070d565b34801561027357600080fd5b50610287610282366004612904565b61083e565b6040516101a991906129c3565b3480156102a057600080fd5b50610213610855565b6101f2610918565b3480156102bd57600080fd5b50610213610962565b3480156102d257600080fd5b50610213610a26565b6101f2610ae9565b3480156102ef57600080fd5b50610213610b36565b34801561030457600080fd5b50600154610213565b34801561031957600080fd5b50610213610bfa565b34801561032e57600080fd5b50610213610cbe565b34801561034357600080fd5b5061034c610d81565b6040516101a9929190612a1b565b6101f2610368366004612959565b610e1e565b34801561037957600080fd5b50610213610e76565b34801561038e57600080fd5b50610213610f3a565b3480156103a357600080fd5b50610213610ffd565b3480156103b857600080fd5b506102136110c0565b3480156103cd57600080fd5b506101f2611183565b3480156103e257600080fd5b50610213611247565b6101f26103f9366004612959565b61130b565b6104066124cc565b6003600054141561055a5760006002805461042090612a78565b80601f016020809104026020016040519081016040528092919081815260200182805461044c90612a78565b80156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b50505050508060200190518101906104b19190612b9c565b90506104bb6124ea565b60006104c685611362565b5160018111156104d8576104d86129ad565b14156104fc5760208181018051600090819052815190920191909152518152610552565b600161050785611362565b516001811115610519576105196129ad565b14156105525761052884611362565b60409081015190820181815290516060830180519190915290516020908101518251909101525181525b519392505050565b6105666000600b61144c565b919050565b6000600360005414156106235760006002805461058790612a78565b80601f01602080910402602001604051908101604052809291908181526020018280546105b390612a78565b80156106005780601f106105d557610100808354040283529160200191610600565b820191906000526020600020905b8154815290600101906020018083116105e357829003601f168201915b50505050508060200190518101906106189190612b9c565b6101c0015192915050565b61062f6000601561144c565b90565b600061063c612529565b61064461255e565b61064c612578565b6040805160208082018352878252608084019190915260038352815180820190925282825283015261067e8284611471565b50506060015192915050565b610692612529565b6106aa6106a436849003840184612cf6565b82611471565b5050565b60006106b8612529565b6106c061255e565b6106c8612578565b604080518082018252878152602080820188905260a08401919091526004835281518082019092528282528301526107008284611471565b5050608001519392505050565b6000600360005414156108325760006002805461072990612a78565b80601f016020809104026020016040519081016040528092919081815260200182805461075590612a78565b80156107a25780601f10610777576101008083540402835291602001916107a2565b820191906000526020600020905b81548152906001019060200180831161078557829003601f168201915b50505050508060200190518101906107ba9190612b9c565b90506107c46125dc565b60006107cf85611362565b5160018111156107e1576107e16129ad565b14156107f05760008152610552565b60016107fb85611362565b51600181111561080d5761080d6129ad565b14156105525761081c84611362565b6040908101516020830181905201518152610552565b6105666000600c61144c565b6108466125f6565b61084f82611362565b92915050565b60006003600054141561090c5760006002805461087190612a78565b80601f016020809104026020016040519081016040528092919081815260200182805461089d90612a78565b80156108ea5780601f106108bf576101008083540402835291602001916108ea565b820191906000526020600020905b8154815290600101906020018083116108cd57829003601f168201915b50505050508060200190518101906109029190612b9c565b6080015192915050565b61062f6000601361144c565b6000610922612529565b61092a61255e565b610932612578565b60006020828101829052908252604080518083019091528281529083015261095a8284611471565b505051919050565b600060036000541415610a1a5760006002805461097e90612a78565b80601f01602080910402602001604051908101604052809291908181526020018280546109aa90612a78565b80156109f75780601f106109cc576101008083540402835291602001916109f7565b820191906000526020600020905b8154815290600101906020018083116109da57829003601f168201915b5050505050806020019051810190610a0f9190612b9c565b610180015192915050565b61062f6000600761144c565b600060036000541415610add57600060028054610a4290612a78565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6e90612a78565b8015610abb5780601f10610a9057610100808354040283529160200191610abb565b820191906000526020600020905b815481529060010190602001808311610a9e57829003601f168201915b5050505050806020019051810190610ad39190612b9c565b6040015192915050565b61062f6000600961144c565b6000610af3612529565b610afb61255e565b610b03612578565b600060c08201526005815260408051602080820190925282815290830152610b2b8284611471565b505060a00151919050565b600060036000541415610bee57600060028054610b5290612a78565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7e90612a78565b8015610bcb5780601f10610ba057610100808354040283529160200191610bcb565b820191906000526020600020905b815481529060010190602001808311610bae57829003601f168201915b5050505050806020019051810190610be39190612b9c565b6101a0015192915050565b61062f6000601061144c565b600060036000541415610cb257600060028054610c1690612a78565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4290612a78565b8015610c8f5780601f10610c6457610100808354040283529160200191610c8f565b820191906000526020600020905b815481529060010190602001808311610c7257829003601f168201915b5050505050806020019051810190610ca79190612b9c565b610100015192915050565b61062f6000600861144c565b600060036000541415610d7557600060028054610cda90612a78565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0690612a78565b8015610d535780601f10610d2857610100808354040283529160200191610d53565b820191906000526020600020905b815481529060010190602001808311610d3657829003601f168201915b5050505050806020019051810190610d6b9190612b9c565b60a0015192915050565b61062f6000601461144c565b600060606000546002808054610d9690612a78565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc290612a78565b8015610e0f5780601f10610de457610100808354040283529160200191610e0f565b820191906000526020600020905b815481529060010190602001808311610df257829003601f168201915b50505050509050915091509091565b6000610e28612529565b610e3061255e565b610e38612578565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610e6a8284611471565b50506040015192915050565b600060036000541415610f2e57600060028054610e9290612a78565b80601f0160208091040260200160405190810160405280929190818152602001828054610ebe90612a78565b8015610f0b5780601f10610ee057610100808354040283529160200191610f0b565b820191906000526020600020905b815481529060010190602001808311610eee57829003601f168201915b5050505050806020019051810190610f239190612b9c565b610140015192915050565b61062f6000601261144c565b600060036000541415610ff157600060028054610f5690612a78565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8290612a78565b8015610fcf5780601f10610fa457610100808354040283529160200191610fcf565b820191906000526020600020905b815481529060010190602001808311610fb257829003601f168201915b5050505050806020019051810190610fe79190612b9c565b60e0015192915050565b61062f6000600f61144c565b6000600360005414156110b45760006002805461101990612a78565b80601f016020809104026020016040519081016040528092919081815260200182805461104590612a78565b80156110925780601f1061106757610100808354040283529160200191611092565b820191906000526020600020905b81548152906001019060200180831161107557829003601f168201915b50505050508060200190518101906110aa9190612b9c565b60c0015192915050565b61062f6000600e61144c565b600060036000541415611177576000600280546110dc90612a78565b80601f016020809104026020016040519081016040528092919081815260200182805461110890612a78565b80156111555780601f1061112a57610100808354040283529160200191611155565b820191906000526020600020905b81548152906001019060200180831161113857829003601f168201915b505050505080602001905181019061116d9190612b9c565b6020015192915050565b61062f6000600a61144c565b60006003600054141561123b5760006002805461119f90612a78565b80601f01602080910402602001604051908101604052809291908181526020018280546111cb90612a78565b80156112185780601f106111ed57610100808354040283529160200191611218565b820191906000526020600020905b8154815290600101906020018083116111fb57829003601f168201915b50505050508060200190518101906112309190612b9c565b610120015192915050565b61062f6000601161144c565b6000600360005414156112ff5760006002805461126390612a78565b80601f016020809104026020016040519081016040528092919081815260200182805461128f90612a78565b80156112dc5780601f106112b1576101008083540402835291602001916112dc565b820191906000526020600020905b8154815290600101906020018083116112bf57829003601f168201915b50505050508060200190518101906112f49190612b9c565b610160015192915050565b61062f6000600d61144c565b6000611315612529565b61131d61255e565b611325612578565b6040805160208082018352878252838301919091526001835281518082019092528282528301526113568284611471565b50506020015192915050565b61136a6125f6565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611399576113996129ad565b141561143d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156113da576113da6129ad565b60018111156113eb576113eb6129ad565b81528154610100900460ff16151560208201526040805160608101808352919092019190600184019060039082845b81548152602001906001019080831161141a575050505050815250509050919050565b60008082526020820152919050565b816106aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b611481600360005414602361144c565b815161149c90158061149557508251600154145b602461144c565b6000808055600280546114ae90612a78565b80601f01602080910402602001604051908101604052809291908181526020018280546114da90612a78565b80156115275780601f106114fc57610100808354040283529160200191611527565b820191906000526020600020905b81548152906001019060200180831161150a57829003601f168201915b505050505080602001905181019061153f9190612b9c565b9050611549612615565b7f5849854b9a47badfc865c301d0e712b0916363428590a1d208a978aa39d28a15338560405161157a929190612dcb565b60405180910390a1600060208501515151600581111561159c5761159c6129ad565b14156117f2576115ae3415601761144c565b8051600090819052815160200181905281516040015260016115cf33611362565b5160018111156115e1576115e16129ad565b146115ed5780516115fb565b6115f633611362565b604001515b6020820152610120820151611681906116205782610180015183606001511015611623565b60005b61162e57600061163d565b6020820151516101a084015110155b611648576000611659565b60208281015101516101a084015111155b61166457600061167a565b826040015142111561167757600161167a565b60005b601861144c565b610180820151604051339180156108fc02916000818181858888f193505050501580156116b2573d6000803e3d6000fd5b50604051600081527f0553a0e5ed8135df1daef2b7d2c556c16ab4318edb11dcc0b70c5222bb38e9ae9060200160405180910390a16000835261018082015160408083018051929092526101008085015183516020015261016085015183519092019190915260c08085015183516060015260e08086015184516080908101919091526101a0870151855160a09081019190915261012080890151875190151595019490945261014080890151875190940193909352908701518551909401939093529185015183519091015290513391015261178d612739565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152830151818301805191909152514391015261018083015160608401516117da9190612e7d565b6020820151604001526117ec81612326565b50612320565b600160208501515151600581111561180c5761180c6129ad565b14156119935760208401515160400151606082015261182d3415601961144c565b8151611845906001600160a01b03163314601a61144c565b604051600081527fc1666c7e24a808bb79aa3a76d4067e3096a2451183271b34030013ab2216c0709060200160405180910390a16000602080850191909152610180830151608080840180519290925261010085015182519093019290925261016084015181516040015260c080850151825160609081019190915260e08601518351909401939093526101a0850151825160a001526101208501519151911515910152810151516101408301516118fd9190612e7d565b6080808301805160e001929092528301518151610100015260a0830151815161012001526101c083015190516001600160a01b0390911661014090910152611943612739565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260808401518284018051919091528051439301929092526060850151915101526117ec81612326565b60026020850151515160058111156119ad576119ad6129ad565b1415611cbc576020840151516060015160a08201819052516119d2903414601b61144c565b60006119dd33611362565b5160018111156119ef576119ef6129ad565b1415611a0157600160c0820152611a2c565b6001611a0c33611362565b516001811115611a1e57611a1e6129ad565b1415611a2c57600060c08201525b611a4f8160c00151611a3f576000611a48565b82604001514211155b601c61144c565b604051600081527f83a0f5451e2a86ed5c7012155ec752628b3e5896b1bf19169276704c659a63079060200160405180910390a16000604080850191909152820151600190611a9f904290612e7d565b60a083015151611aaf9190612e94565b836101000151611abf9190612eb3565b611ac99190612e7d565b60e08201908152610100838101519083018051919091529051815160209081019190915260a083015151825160409081019190915233600090815260049092529020805460ff1916600190811782559151611b2a9291909101906003612769565b50815160a0820151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611b69573d6000803e3d6000fd5b50610180820151610120820180519190915260e082015181516020015261016083015190516040015260c0820151611ba390600190612eb3565b6101208201516060015260e0820151611bbe90600190612eb3565b6101208083018051608001929092526101a0840151825160a09081019190915290840151915191151560c09092019190915281015151610140830151611c049190612eb3565b61012082015160e0015260a0810151516080830151611c239190612eb3565b6101208083018051610100019290925260a08401518251909101526101c083015190516001600160a01b0390911661014090910152611c60612739565b825181516001600160a01b0390911690526020808401518251820152604080850151835190910152610120830151818301805191909152514391015260a0820151516060840151611cb2908290612eb3565b6117da9190612e7d565b6003602085015151516005811115611cd657611cd66129ad565b1415611e535760208401515160800151610140820152611cf83415601d61144c565b8151611d10906001600160a01b03163314601e61144c565b604051600081527fe328baa9e768956d29314a90160d61cabe57d8ee51344f8d93045ebcf3901ea29060200160405180910390a16000606080850191909152610180830151610160830180519190915261010080850151825160200152610140808501515183516040015260c08087015184519095019490945260e08087015184516080908101919091526101a0880151855160a090810191909152610120808a0151875190151598019790975283890151865190930192909252870151845190930192909252908501518251909301929092526101c084015190516001600160a01b03909116910152611e02612739565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526101608401518284018051919091528051439301929092526060850151915101526117ec81612326565b6004602085015151516005811115611e6d57611e6d6129ad565b1415612048576020808501515160a0015161018083018190520151611e95903414601f61144c565b8151611efd906001600160a01b03163314611eb1576000611eb8565b8261012001515b611ec3576000611ed5565b82608001518261018001516020015110155b611ee0576000611ef6565b8260400151421115611ef3576001611ef6565b60005b602061144c565b604051600081527f4680f5a3162bf16bdb37e5ab42d0f7974bebf62aed22063d4ea7c63454c79f079060200160405180910390a1600060808085019190915282015161018082015160200151611f539190612e7d565b6101a082018051919091526101008084015182516020015261016084015182516040015260c08085015183516060015260e080860151845160809081019190915261018086015151855160a0908101919091528551600094019390935261014080880151865190930192909252860151845190930192909252840151825161012001526101c084015191516001600160a01b03909216910152611ff4612739565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101526101a0830151818301805191909152514390820152610180830151015160608401516117da9190612eb3565b6005602085015151516005811115612062576120626129ad565b1415612320576120743415602161144c565b6101c0810180516000908190528151602001819052905160400152600161209a33611362565b5160018111156120ac576120ac6129ad565b146120bc57806101c001516120ca565b6120c533611362565b604001515b6101e082018190526040015161213e906120e55760006120f9565b8261012001516120f65760016120f9565b60005b612104576000612116565b6101e082015160400151606084015110155b612121576000612137565b8260400151421115612134576001612137565b60005b602261144c565b604051600081527f1c7d35de686f2a03ee8b859d21a04342495458d167dd36a4dab476571ae251469060200160405180910390a1600060a084018190526101e08201805151610200840180519190915290516020908101518251820152815160409081018490523384526004909152909120805460ff19166001908117825591516121cf9291909101906003612769565b506101e08101516040908101519051339180156108fc02916000818181858888f19350505050158015612206573d6000803e3d6000fd5b5061018082015161022082018051919091526101008084015182516020015261016084015182516040015260c08085015183516060015260e08086015184516080908101919091526101a0870151855160a001526101208701518551901515930192909252610140860151845190910152840151915101526101e0810151600260200201518260a0015161229a9190612eb3565b6102208201805161012001919091526101c083015190516001600160a01b03909116610140909101526122cb612739565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015261022084015182840180519190915251439201919091526101e0830151015160608401516117da9190612e7d565b50505050565b6123b3604051806101e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528185018051820151606080870191909152815151610100908101516080808901919091528351516101209081015160a0808b01919091528551519094015160c0808b01919091528551519092015160e0808b0191909152855151880151938a01939093528451519091015115159088015282515101516101408088019190915282515184015161016088015282515151610180880152825151909101516101a087015290515101519092166101c084015260036000554360015590516124a391839101612ecb565b604051602081830303815290604052600290805190602001906124c79291906127a7565b505050565b60405180604001604052806002906020820280368337509192915050565b60405180608001604052806124fd6124cc565b815260200161250a6124cc565b815260200161251761281a565b81526020016125246124cc565b905290565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b604051806040016040528060008152602001612524612838565b6040805160e08101825260008082526020808301829052835180820185528281528385015283518082018552828152606084015283518082018552828152608084015283518085019094528184528301529060a08201908152600060209091015290565b60405180604001604052806000815260200161252461281a565b604080516060810182526000808252602082015290810161252461281a565b60405180610240016040528061262961281a565b815260200161263661281a565b815260200161264361284b565b815260200161265e6040518060200160405280600081525090565b815260200161266b61284b565b81526020016126866040518060200160405280600081525090565b815260006020820181905260408201526060016126a161281a565b81526020016126ae61284b565b81526020016126c96040518060200160405280600081525090565b81526020016126d661284b565b81526020016126f8604051806040016040528060008152602001600081525090565b815260200161270561284b565b815260200161271261281a565b815260200161271f61281a565b815260200161272c61281a565b815260200161252461284b565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016125246128b0565b8260038101928215612797579160200282015b8281111561279757825182559160200191906001019061277c565b506127a39291506128d7565b5090565b8280546127b390612a78565b90600052602060002090601f0160209004810192826127d55760008555612797565b82601f106127ee57805160ff1916838001178555612797565b82800160010185558215612797579182018281111561279757825182559160200191906001019061277c565b60405180606001604052806003906020820280368337509192915050565b6040518060200160405280612524612578565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b60405180606001604052806128c361284b565b815260200160008152602001600081525090565b5b808211156127a357600081556001016128d8565b6001600160a01b038116811461290157600080fd5b50565b60006020828403121561291657600080fd5b8135612921816128ec565b9392505050565b60408101818360005b6002811015612950578151835260209283019290910190600101612931565b50505092915050565b60006020828403121561296b57600080fd5b5035919050565b6000610120828403121561298557600080fd5b50919050565b6000806040838503121561299e57600080fd5b50508035926020909101359150565b634e487b7160e01b600052602160045260246000fd5b815160a0820190600281106129da576129da6129ad565b825260208381015115158184015260408085015190840160005b6003811015612a11578251825291830191908301906001016129f4565b5050505092915050565b82815260006020604081840152835180604085015260005b81811015612a4f57858101830151858201606001528201612a33565b81811115612a61576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680612a8c57607f821691505b6020821081141561298557634e487b7160e01b600052602260045260246000fd5b6040516101e0810167ffffffffffffffff81118282101715612adf57634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff81118282101715612adf57634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715612adf57634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715612adf57634e487b7160e01b600052604160045260246000fd5b8051610566816128ec565b801515811461290157600080fd5b805161056681612b83565b60006101e08284031215612baf57600080fd5b612bb7612aad565b612bc083612b78565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120612c22818501612b91565b908201526101408381015190820152610160808401519082015261018080840151908201526101a080840151908201526101c0612c60818501612b78565b908201529392505050565b803561056681612b83565b600060208284031215612c8857600080fd5b6040516020810181811067ffffffffffffffff82111715612cb957634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b600060408284031215612cd857600080fd5b612ce0612ae5565b9050813581526020820135602082015292915050565b6000818303610120811215612d0a57600080fd5b612d12612ae5565b8335815261010080601f1984011215612d2a57600080fd5b612d32612b16565b9250612d3c612b47565b602086013560068110612d4e57600080fd5b8152612d5c60408701612c6b565b6020820152612d6e8760608801612c76565b6040820152612d808760808801612c76565b6060820152612d928760a08801612c76565b6080820152612da48760c08801612cc6565b60a0820152612db4828701612c6b565b60c082015283525060208101919091529392505050565b6001600160a01b038316815281516020808301919091528201515180516101408301919060068110612dff57612dff6129ad565b80604085015250602081015115156060840152604081015151608084015260608101515160a08401526080810151612e3a60c0850182519052565b5060a0810151805160e08501526020015161010084015260c0015115156101209092019190915292915050565b634e487b7160e01b600052601160045260246000fd5b600082821015612e8f57612e8f612e67565b500390565b6000816000190483118215151615612eae57612eae612e67565b500290565b60008219821115612ec657612ec6612e67565b500190565b81516001600160a01b031681526101e081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151612f438285018215159052565b50506101408381015190830152610160808401519083015261018080840151908301526101a080840151908301526101c0928301516001600160a01b031692909101919091529056fea2646970667358221220735801548c9b952c9a5ecba67eda6b6dc9dabc82c2a9ee040b58ef8a30be6fe764736f6c634300080c0033`,
  BytecodeLen: 13970,
  Which: `oD`,
  version: 7,
  views: {
    UserView: {
      actualPrizePool: `UserView_actualPrizePool`,
      currProbArrSize: `UserView_currProbArrSize`,
      deadlineSecs: `UserView_deadlineSecs`,
      deploymentSecs: `UserView_deploymentSecs`,
      getProbIndex: `UserView_getProbIndex`,
      getUserDeposit: `UserView_getUserDeposit`,
      maxBankASAbal: `UserView_maxBankASAbal`,
      numDepositors: `UserView_numDepositors`,
      numDeposits: `UserView_numDeposits`,
      randomNum: `UserView_randomNum`,
      requestReclaim: `UserView_requestReclaim`,
      supplyAmtToDefi: `UserView_supplyAmtToDefi`,
      totalDeposit: `UserView_totalDeposit`,
      totalWithdrawal: `UserView_totalWithdrawal`,
      winningUser: `UserView_winningUser`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:244:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:72:31:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "PoolCreator": PoolCreator,
  "UserAPI_claimReward": UserAPI_claimReward,
  "UserAPI_clearSupplyAmtToDefi": UserAPI_clearSupplyAmtToDefi,
  "UserAPI_deposit": UserAPI_deposit,
  "UserAPI_setBankASAbal": UserAPI_setBankASAbal,
  "UserAPI_transferFunds": UserAPI_transferFunds,
  "UserAPI_withdraw": UserAPI_withdraw
  };
export const _APIs = {
  UserAPI: {
    claimReward: UserAPI_claimReward,
    clearSupplyAmtToDefi: UserAPI_clearSupplyAmtToDefi,
    deposit: UserAPI_deposit,
    setBankASAbal: UserAPI_setBankASAbal,
    transferFunds: UserAPI_transferFunds,
    withdraw: UserAPI_withdraw
    }
  };
