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
  const ctc3 = stdlib.T_Object({
    actualPrizePool: ctc1,
    currProbArrSize: ctc1,
    maxBankASAbal: ctc1,
    numDepositors: ctc1,
    numDeposits: ctc1,
    randomNum: ctc1,
    requestReclaim: ctc2,
    supplyAmtToDefi: ctc1,
    totalDeposit: ctc1,
    totalWithdrawal: ctc1
    });
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
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v665;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        currProbArrSize: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v661;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        deadlineSecs: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v626;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        deploymentSecs: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v622;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        getUserDeposit: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async (_v627 ) => {
                  const v627 = stdlib.protect(ctc0, _v627, null);
                
                const v628 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v627), null);
                let v629;
                switch (v628[0]) {
                  case 'None': {
                    const v630 = v628[1];
                    v629 = stdlib.checkedBigNumberify('./index.rsh:57:13:decimal', stdlib.UInt_max, '0');
                    
                    break;
                    }
                  case 'Some': {
                    const v631 = v628[1];
                    const v632 = v631[stdlib.checkedBigNumberify('./index.rsh:58:15:array ref', stdlib.UInt_max, '2')];
                    v629 = v632;
                    
                    break;
                    }
                  }
                
                return v629;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        maxBankASAbal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v664;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        numDepositors: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v659;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        numDeposits: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v660;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        requestReclaim: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v662;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        supplyAmtToDefi: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v663;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        totalDeposit: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v657;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        totalWithdrawal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = svs;
              return (await ((async () => {
                
                
                return v658;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1]
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
    UserAPI_claimReward0_82: ctc4,
    UserAPI_clearSupplyAmtToDefi0_82: ctc5,
    UserAPI_deposit0_82: ctc5,
    UserAPI_setBankASAbal0_82: ctc5,
    UserAPI_transferFunds0_82: ctc6,
    UserAPI_withdraw0_82: ctc4
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v616 = stdlib.protect(ctc1, interact.relativeDeadlineSecs, 'for PoolCreator\'s interact field relativeDeadlineSecs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v616],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:42:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v620], secs: v622, time: v621, didSend: v27, from: v619 } = txn1;
      
      ;
      
      const v626 = stdlib.add(v622, v620);
      const v633 = {
        actualPrizePool: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        currProbArrSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        maxBankASAbal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numDepositors: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numDeposits: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        randomNum: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        requestReclaim: true,
        supplyAmtToDefi: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalDeposit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalWithdrawal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v634 = v633;
      const v635 = v621;
      const v638 = stdlib.checkedBigNumberify('./index.rsh:37:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v657 = v634.totalDeposit;
        const v658 = v634.totalWithdrawal;
        const v659 = v634.numDepositors;
        const v660 = v634.numDeposits;
        const v661 = v634.currProbArrSize;
        const v662 = v634.requestReclaim;
        const v663 = v634.supplyAmtToDefi;
        const v664 = v634.maxBankASAbal;
        const v665 = v634.actualPrizePool;
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
  const {data: [v620], secs: v622, time: v621, didSend: v27, from: v619 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.disconnect(), {
    at: './index.rsh:43:34:application',
    fs: ['at ./index.rsh:43:34:application call to [unknown function] (defined at: ./index.rsh:43:34:function exp)', 'at ./index.rsh:43:34:application call to "liftedInteract" (defined at: ./index.rsh:43:34:application)'],
    msg: 'disconnect',
    who: 'PoolCreator'
    });
  
  const v626 = stdlib.add(v622, v620);
  const v633 = {
    actualPrizePool: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    currProbArrSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    maxBankASAbal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    numDepositors: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    numDeposits: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    randomNum: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    requestReclaim: true,
    supplyAmtToDefi: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalDeposit: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalWithdrawal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v634 = v633;
  let v635 = v621;
  let v638 = stdlib.checkedBigNumberify('./index.rsh:37:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v657 = v634.totalDeposit;
    const v658 = v634.totalWithdrawal;
    const v659 = v634.numDepositors;
    const v660 = v634.numDeposits;
    const v661 = v634.currProbArrSize;
    const v662 = v634.requestReclaim;
    const v663 = v634.supplyAmtToDefi;
    const v664 = v634.maxBankASAbal;
    const v665 = v634.actualPrizePool;
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn2;
    switch (v773[0]) {
      case 'UserAPI_claimReward0_82': {
        const v776 = v773[1];
        undefined /* setApiDetails */;
        ;
        const v794 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v772), null);
        const v795 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v796 = stdlib.fromSome(v794, v795);
        const v801 = stdlib.ge(v638, v665);
        const v802 = v662 ? false : v801;
        const v803 = v634.randomNum;
        const v804 = v796[stdlib.checkedBigNumberify('./index.rsh:198:44:array ref', stdlib.UInt_max, '0')];
        const v805 = stdlib.ge(v803, v804);
        const v806 = v802 ? v805 : false;
        const v808 = v796[stdlib.checkedBigNumberify('./index.rsh:199:44:array ref', stdlib.UInt_max, '1')];
        const v809 = stdlib.le(v803, v808);
        const v810 = v806 ? v809 : false;
        const v812 = stdlib.le(v775, v626);
        const v813 = v812 ? false : true;
        const v814 = v810 ? v813 : false;
        stdlib.assert(v814, {
          at: './index.rsh:196:16:application',
          fs: ['at ./index.rsh:194:17:application call to [unknown function] (defined at: ./index.rsh:194:17:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v819 = stdlib.sub(v638, v665);
        ;
        const v820 = null;
        await txn2.getOutput('UserAPI_claimReward', 'v820', ctc0, v820);
        const cv634 = v634;
        const cv635 = v774;
        const cv638 = v819;
        
        v634 = cv634;
        v635 = cv635;
        v638 = cv638;
        
        continue;
        break;
        }
      case 'UserAPI_clearSupplyAmtToDefi0_82': {
        const v998 = v773[1];
        undefined /* setApiDetails */;
        ;
        const v1049 = v998[stdlib.checkedBigNumberify('./index.rsh:209:9:spread', stdlib.UInt_max, '0')];
        const v1050 = stdlib.addressEq(v772, v619);
        stdlib.assert(v1050, {
          at: './index.rsh:214:16:application',
          fs: ['at ./index.rsh:213:22:application call to [unknown function] (defined at: ./index.rsh:213:22:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1051 = null;
        await txn2.getOutput('UserAPI_clearSupplyAmtToDefi', 'v1051', ctc0, v1051);
        const v1063 = v634.randomNum;
        const v1069 = stdlib.sub(v663, v1049);
        const v1070 = {
          actualPrizePool: v665,
          currProbArrSize: v661,
          maxBankASAbal: v664,
          numDepositors: v659,
          numDeposits: v660,
          randomNum: v1063,
          requestReclaim: v662,
          supplyAmtToDefi: v1069,
          totalDeposit: v657,
          totalWithdrawal: v658
          };
        const cv634 = v1070;
        const cv635 = v774;
        const cv638 = v638;
        
        v634 = cv634;
        v635 = cv635;
        v638 = cv638;
        
        continue;
        break;
        }
      case 'UserAPI_deposit0_82': {
        const v1220 = v773[1];
        undefined /* setApiDetails */;
        const v1228 = v1220[stdlib.checkedBigNumberify('./index.rsh:87:9:spread', stdlib.UInt_max, '0')];
        const v1236 = stdlib.add(v638, v1228);
        ;
        const v1296 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v772), null);
        let v1297;
        switch (v1296[0]) {
          case 'None': {
            const v1298 = v1296[1];
            v1297 = true;
            
            break;
            }
          case 'Some': {
            const v1299 = v1296[1];
            v1297 = false;
            
            break;
            }
          }
        const v1301 = stdlib.le(v775, v626);
        const v1302 = v1297 ? v1301 : false;
        stdlib.assert(v1302, {
          at: './index.rsh:94:16:application',
          fs: ['at ./index.rsh:93:22:application call to [unknown function] (defined at: ./index.rsh:93:22:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1303 = null;
        await txn2.getOutput('UserAPI_deposit', 'v1303', ctc0, v1303);
        const v1312 = stdlib.sub(v626, v775);
        const v1313 = stdlib.mul(v1228, v1312);
        const v1314 = stdlib.add(v661, v1313);
        const v1315 = stdlib.sub(v1314, stdlib.checkedBigNumberify('./index.rsh:100:11:decimal', stdlib.UInt_max, '1'));
        const v1317 = [v661, v1315, v1228];
        await stdlib.mapSet(map0, v772, v1317);
        const v1321 = stdlib.sub(v1236, v1228);
        ;
        const v1327 = v634.randomNum;
        const v1333 = stdlib.add(v657, v1228);
        const v1335 = stdlib.add(v659, stdlib.checkedBigNumberify('./index.rsh:111:48:decimal', stdlib.UInt_max, '1'));
        const v1337 = stdlib.add(v660, stdlib.checkedBigNumberify('./index.rsh:112:44:decimal', stdlib.UInt_max, '1'));
        const v1339 = stdlib.add(v663, v1228);
        const v1340 = {
          actualPrizePool: v665,
          currProbArrSize: v1315,
          maxBankASAbal: v664,
          numDepositors: v1335,
          numDeposits: v1337,
          randomNum: v1327,
          requestReclaim: v662,
          supplyAmtToDefi: v1339,
          totalDeposit: v1333,
          totalWithdrawal: v658
          };
        const cv634 = v1340;
        const cv635 = v774;
        const cv638 = v1321;
        
        v634 = cv634;
        v635 = cv635;
        v638 = cv638;
        
        continue;
        break;
        }
      case 'UserAPI_setBankASAbal0_82': {
        const v1442 = v773[1];
        undefined /* setApiDetails */;
        ;
        const v1565 = v1442[stdlib.checkedBigNumberify('./index.rsh:219:9:spread', stdlib.UInt_max, '0')];
        const v1566 = stdlib.addressEq(v772, v619);
        stdlib.assert(v1566, {
          at: './index.rsh:225:16:application',
          fs: ['at ./index.rsh:224:32:application call to [unknown function] (defined at: ./index.rsh:224:32:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1567 = null;
        await txn2.getOutput('UserAPI_setBankASAbal', 'v1567', ctc0, v1567);
        const v1579 = v634.randomNum;
        const v1584 = {
          actualPrizePool: v665,
          currProbArrSize: v661,
          maxBankASAbal: v1565,
          numDepositors: v659,
          numDeposits: v660,
          randomNum: v1579,
          requestReclaim: v662,
          supplyAmtToDefi: v663,
          totalDeposit: v657,
          totalWithdrawal: v658
          };
        const cv634 = v1584;
        const cv635 = v774;
        const cv638 = v638;
        
        v634 = cv634;
        v635 = cv635;
        v638 = cv638;
        
        continue;
        break;
        }
      case 'UserAPI_transferFunds0_82': {
        const v1664 = v773[1];
        undefined /* setApiDetails */;
        const v1677 = v1664[stdlib.checkedBigNumberify('./index.rsh:152:9:spread', stdlib.UInt_max, '1')];
        const v1680 = stdlib.add(v638, v1677);
        ;
        const v1809 = v1664[stdlib.checkedBigNumberify('./index.rsh:152:9:spread', stdlib.UInt_max, '0')];
        const v1811 = stdlib.addressEq(v772, v619);
        const v1813 = v1811 ? v662 : false;
        const v1815 = stdlib.ge(v1677, v657);
        const v1816 = v1813 ? v1815 : false;
        const v1818 = stdlib.le(v775, v626);
        const v1819 = v1818 ? false : true;
        const v1820 = v1816 ? v1819 : false;
        stdlib.assert(v1820, {
          at: './index.rsh:164:16:application',
          fs: ['at ./index.rsh:163:35:application call to [unknown function] (defined at: ./index.rsh:163:35:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1821 = null;
        await txn2.getOutput('UserAPI_transferFunds', 'v1821', ctc0, v1821);
        const v1840 = stdlib.sub(v1677, v657);
        const v1841 = {
          actualPrizePool: v1840,
          currProbArrSize: v661,
          maxBankASAbal: v664,
          numDepositors: v659,
          numDeposits: v660,
          randomNum: v1809,
          requestReclaim: false,
          supplyAmtToDefi: v663,
          totalDeposit: v657,
          totalWithdrawal: v658
          };
        const cv634 = v1841;
        const cv635 = v774;
        const cv638 = v1680;
        
        v634 = cv634;
        v635 = cv635;
        v638 = cv638;
        
        continue;
        break;
        }
      case 'UserAPI_withdraw0_82': {
        const v1886 = v773[1];
        undefined /* setApiDetails */;
        ;
        const v2066 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v772), null);
        const v2067 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2068 = stdlib.fromSome(v2066, v2067);
        const v2069 = v2068[stdlib.checkedBigNumberify('./index.rsh:132:43:array ref', stdlib.UInt_max, '2')];
        const v2070 = stdlib.gt(v2069, stdlib.checkedBigNumberify('./index.rsh:133:31:decimal', stdlib.UInt_max, '0'));
        const v2072 = v662 ? false : true;
        const v2073 = v2070 ? v2072 : false;
        const v2075 = stdlib.ge(v638, v2069);
        const v2076 = v2073 ? v2075 : false;
        const v2078 = stdlib.le(v775, v626);
        const v2079 = v2078 ? false : true;
        const v2080 = v2076 ? v2079 : false;
        stdlib.assert(v2080, {
          at: './index.rsh:133:16:application',
          fs: ['at ./index.rsh:130:17:application call to [unknown function] (defined at: ./index.rsh:130:17:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v2081 = null;
        await txn2.getOutput('UserAPI_withdraw', 'v2081', ctc0, v2081);
        const v2087 = v2068[stdlib.checkedBigNumberify('./index.rsh:140:25:array ref', stdlib.UInt_max, '0')];
        const v2088 = v2068[stdlib.checkedBigNumberify('./index.rsh:141:25:array ref', stdlib.UInt_max, '1')];
        const v2089 = [v2087, v2088, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, v772, v2089);
        const v2093 = stdlib.sub(v638, v2069);
        ;
        const v2099 = v634.randomNum;
        const v2105 = stdlib.add(v658, v2069);
        const v2106 = {
          actualPrizePool: v665,
          currProbArrSize: v661,
          maxBankASAbal: v664,
          numDepositors: v659,
          numDeposits: v660,
          randomNum: v2099,
          requestReclaim: v662,
          supplyAmtToDefi: v663,
          totalDeposit: v657,
          totalWithdrawal: v2105
          };
        const cv634 = v2106;
        const cv635 = v774;
        const cv638 = v2093;
        
        v634 = cv634;
        v635 = cv635;
        v638 = cv638;
        
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
  const ctc6 = stdlib.T_Object({
    actualPrizePool: ctc1,
    currProbArrSize: ctc1,
    maxBankASAbal: ctc1,
    numDepositors: ctc1,
    numDeposits: ctc1,
    randomNum: ctc1,
    requestReclaim: ctc5,
    supplyAmtToDefi: ctc1,
    totalDeposit: ctc1,
    totalWithdrawal: ctc1
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Data({
    UserAPI_claimReward0_82: ctc7,
    UserAPI_clearSupplyAmtToDefi0_82: ctc8,
    UserAPI_deposit0_82: ctc8,
    UserAPI_setBankASAbal0_82: ctc8,
    UserAPI_transferFunds0_82: ctc9,
    UserAPI_withdraw0_82: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const v716 = ctc.selfAddress();
  const v718 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:180:10:application call to [unknown function] (defined at: ./index.rsh:180:10:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_claimReward0_82" (defined at: ./index.rsh:178:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_claimReward'
    });
  const v721 = v662 ? false : true;
  stdlib.assert(v721, {
    at: './index.rsh:181:15:application',
    fs: ['at ./index.rsh:180:10:application call to [unknown function] (defined at: ./index.rsh:180:10:function exp)', 'at ./index.rsh:180:10:application call to [unknown function] (defined at: ./index.rsh:180:10:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_claimReward0_82" (defined at: ./index.rsh:178:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'Winner not selected yet',
    who: 'UserAPI_claimReward'
    });
  const v722 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v716), null);
  const v723 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v724 = stdlib.fromSome(v722, v723);
  const v725 = v634.randomNum;
  const v726 = v724[stdlib.checkedBigNumberify('./index.rsh:184:44:array ref', stdlib.UInt_max, '0')];
  const v727 = stdlib.ge(v725, v726);
  const v729 = v724[stdlib.checkedBigNumberify('./index.rsh:185:46:array ref', stdlib.UInt_max, '1')];
  const v730 = stdlib.le(v725, v729);
  const v731 = v727 ? v730 : false;
  stdlib.assert(v731, {
    at: './index.rsh:183:15:application',
    fs: ['at ./index.rsh:180:10:application call to [unknown function] (defined at: ./index.rsh:180:10:function exp)', 'at ./index.rsh:180:10:application call to [unknown function] (defined at: ./index.rsh:180:10:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_claimReward0_82" (defined at: ./index.rsh:178:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'You did not win the lottery',
    who: 'UserAPI_claimReward'
    });
  const v734 = stdlib.ge(v638, v665);
  stdlib.assert(v734, {
    at: './index.rsh:188:15:application',
    fs: ['at ./index.rsh:180:10:application call to [unknown function] (defined at: ./index.rsh:180:10:function exp)', 'at ./index.rsh:180:10:application call to [unknown function] (defined at: ./index.rsh:180:10:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_claimReward0_82" (defined at: ./index.rsh:178:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'Contract does not have enough funds to dispense',
    who: 'UserAPI_claimReward'
    });
  const v737 = ['UserAPI_claimReward0_82', v718];
  
  const txn1 = await (ctc.sendrecv({
    args: [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665, v737],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:193:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
      
      switch (v773[0]) {
        case 'UserAPI_claimReward0_82': {
          const v776 = v773[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_claimReward"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v772), null);
          const v819 = stdlib.sub(v638, v665);
          sim_r.txns.push({
            kind: 'from',
            to: v772,
            tok: undefined /* Nothing */
            });
          const v820 = null;
          const v821 = await txn1.getOutput('UserAPI_claimReward', 'v820', ctc0, v820);
          
          const v2960 = v634;
          const v2962 = v819;
          const v2963 = v634.totalDeposit;
          const v2964 = v634.totalWithdrawal;
          const v2965 = v634.numDepositors;
          const v2966 = v634.numDeposits;
          const v2967 = v634.currProbArrSize;
          const v2968 = v634.requestReclaim;
          const v2969 = v634.supplyAmtToDefi;
          const v2970 = v634.maxBankASAbal;
          const v2971 = v634.actualPrizePool;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_82': {
          const v998 = v773[1];
          
          break;
          }
        case 'UserAPI_deposit0_82': {
          const v1220 = v773[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_82': {
          const v1442 = v773[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_82': {
          const v1664 = v773[1];
          
          break;
          }
        case 'UserAPI_withdraw0_82': {
          const v1886 = v773[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
  switch (v773[0]) {
    case 'UserAPI_claimReward0_82': {
      const v776 = v773[1];
      undefined /* setApiDetails */;
      ;
      const v794 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v772), null);
      const v795 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v796 = stdlib.fromSome(v794, v795);
      const v801 = stdlib.ge(v638, v665);
      const v802 = v662 ? false : v801;
      const v803 = v634.randomNum;
      const v804 = v796[stdlib.checkedBigNumberify('./index.rsh:198:44:array ref', stdlib.UInt_max, '0')];
      const v805 = stdlib.ge(v803, v804);
      const v806 = v802 ? v805 : false;
      const v808 = v796[stdlib.checkedBigNumberify('./index.rsh:199:44:array ref', stdlib.UInt_max, '1')];
      const v809 = stdlib.le(v803, v808);
      const v810 = v806 ? v809 : false;
      const v812 = stdlib.le(v775, v626);
      const v813 = v812 ? false : true;
      const v814 = v810 ? v813 : false;
      stdlib.assert(v814, {
        at: './index.rsh:196:16:application',
        fs: ['at ./index.rsh:194:17:application call to [unknown function] (defined at: ./index.rsh:194:17:function exp)'],
        msg: null,
        who: 'UserAPI_claimReward'
        });
      const v819 = stdlib.sub(v638, v665);
      ;
      const v820 = null;
      const v821 = await txn1.getOutput('UserAPI_claimReward', 'v820', ctc0, v820);
      if (v362) {
        stdlib.protect(ctc0, await interact.out(v776, v821), {
          at: './index.rsh:179:7:application',
          fs: ['at ./index.rsh:179:7:application call to [unknown function] (defined at: ./index.rsh:179:7:function exp)', 'at ./index.rsh:204:16:application call to "returnF" (defined at: ./index.rsh:194:17:function exp)', 'at ./index.rsh:194:17:application call to [unknown function] (defined at: ./index.rsh:194:17:function exp)'],
          msg: 'out',
          who: 'UserAPI_claimReward'
          });
        }
      else {
        }
      
      const v2960 = v634;
      const v2962 = v819;
      const v2963 = v634.totalDeposit;
      const v2964 = v634.totalWithdrawal;
      const v2965 = v634.numDepositors;
      const v2966 = v634.numDeposits;
      const v2967 = v634.currProbArrSize;
      const v2968 = v634.requestReclaim;
      const v2969 = v634.supplyAmtToDefi;
      const v2970 = v634.maxBankASAbal;
      const v2971 = v634.actualPrizePool;
      return;
      
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_82': {
      const v998 = v773[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_82': {
      const v1220 = v773[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_82': {
      const v1442 = v773[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_82': {
      const v1664 = v773[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_82': {
      const v1886 = v773[1];
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
  const ctc6 = stdlib.T_Object({
    actualPrizePool: ctc1,
    currProbArrSize: ctc1,
    maxBankASAbal: ctc1,
    numDepositors: ctc1,
    numDeposits: ctc1,
    randomNum: ctc1,
    requestReclaim: ctc5,
    supplyAmtToDefi: ctc1,
    totalDeposit: ctc1,
    totalWithdrawal: ctc1
    });
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Data({
    UserAPI_claimReward0_82: ctc8,
    UserAPI_clearSupplyAmtToDefi0_82: ctc7,
    UserAPI_deposit0_82: ctc7,
    UserAPI_setBankASAbal0_82: ctc7,
    UserAPI_transferFunds0_82: ctc9,
    UserAPI_withdraw0_82: ctc8
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const v739 = ctc.selfAddress();
  const v741 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:211:13:application call to [unknown function] (defined at: ./index.rsh:211:13:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_clearSupplyAmtToDefi0_82" (defined at: ./index.rsh:209:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_clearSupplyAmtToDefi'
    });
  const v744 = stdlib.addressEq(v739, v619);
  stdlib.assert(v744, {
    at: './index.rsh:211:22:application',
    fs: ['at ./index.rsh:211:13:application call to [unknown function] (defined at: ./index.rsh:211:13:function exp)', 'at ./index.rsh:211:13:application call to [unknown function] (defined at: ./index.rsh:211:13:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_clearSupplyAmtToDefi0_82" (defined at: ./index.rsh:209:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'You are not the lottery creator',
    who: 'UserAPI_clearSupplyAmtToDefi'
    });
  const v748 = ['UserAPI_clearSupplyAmtToDefi0_82', v741];
  
  const txn1 = await (ctc.sendrecv({
    args: [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665, v748],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
      
      switch (v773[0]) {
        case 'UserAPI_claimReward0_82': {
          const v776 = v773[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_82': {
          const v998 = v773[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_clearSupplyAmtToDefi"
            });
          ;
          const v1049 = v998[stdlib.checkedBigNumberify('./index.rsh:209:9:spread', stdlib.UInt_max, '0')];
          const v1051 = null;
          const v1052 = await txn1.getOutput('UserAPI_clearSupplyAmtToDefi', 'v1051', ctc0, v1051);
          
          const v1063 = v634.randomNum;
          const v1069 = stdlib.sub(v663, v1049);
          const v1070 = {
            actualPrizePool: v665,
            currProbArrSize: v661,
            maxBankASAbal: v664,
            numDepositors: v659,
            numDeposits: v660,
            randomNum: v1063,
            requestReclaim: v662,
            supplyAmtToDefi: v1069,
            totalDeposit: v657,
            totalWithdrawal: v658
            };
          const v3107 = v1070;
          const v3109 = v638;
          const v3110 = v1070.totalDeposit;
          const v3111 = v1070.totalWithdrawal;
          const v3112 = v1070.numDepositors;
          const v3113 = v1070.numDeposits;
          const v3114 = v1070.currProbArrSize;
          const v3115 = v1070.requestReclaim;
          const v3116 = v1070.supplyAmtToDefi;
          const v3117 = v1070.maxBankASAbal;
          const v3118 = v1070.actualPrizePool;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_deposit0_82': {
          const v1220 = v773[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_82': {
          const v1442 = v773[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_82': {
          const v1664 = v773[1];
          
          break;
          }
        case 'UserAPI_withdraw0_82': {
          const v1886 = v773[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
  switch (v773[0]) {
    case 'UserAPI_claimReward0_82': {
      const v776 = v773[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_82': {
      const v998 = v773[1];
      undefined /* setApiDetails */;
      ;
      const v1049 = v998[stdlib.checkedBigNumberify('./index.rsh:209:9:spread', stdlib.UInt_max, '0')];
      const v1050 = stdlib.addressEq(v772, v619);
      stdlib.assert(v1050, {
        at: './index.rsh:214:16:application',
        fs: ['at ./index.rsh:213:22:application call to [unknown function] (defined at: ./index.rsh:213:22:function exp)'],
        msg: null,
        who: 'UserAPI_clearSupplyAmtToDefi'
        });
      const v1051 = null;
      const v1052 = await txn1.getOutput('UserAPI_clearSupplyAmtToDefi', 'v1051', ctc0, v1051);
      if (v362) {
        stdlib.protect(ctc0, await interact.out(v998, v1052), {
          at: './index.rsh:210:7:application',
          fs: ['at ./index.rsh:210:7:application call to [unknown function] (defined at: ./index.rsh:210:7:function exp)', 'at ./index.rsh:215:16:application call to "returnF" (defined at: ./index.rsh:213:22:function exp)', 'at ./index.rsh:213:22:application call to [unknown function] (defined at: ./index.rsh:213:22:function exp)'],
          msg: 'out',
          who: 'UserAPI_clearSupplyAmtToDefi'
          });
        }
      else {
        }
      
      const v1063 = v634.randomNum;
      const v1069 = stdlib.sub(v663, v1049);
      const v1070 = {
        actualPrizePool: v665,
        currProbArrSize: v661,
        maxBankASAbal: v664,
        numDepositors: v659,
        numDeposits: v660,
        randomNum: v1063,
        requestReclaim: v662,
        supplyAmtToDefi: v1069,
        totalDeposit: v657,
        totalWithdrawal: v658
        };
      const v3107 = v1070;
      const v3109 = v638;
      const v3110 = v1070.totalDeposit;
      const v3111 = v1070.totalWithdrawal;
      const v3112 = v1070.numDepositors;
      const v3113 = v1070.numDeposits;
      const v3114 = v1070.currProbArrSize;
      const v3115 = v1070.requestReclaim;
      const v3116 = v1070.supplyAmtToDefi;
      const v3117 = v1070.maxBankASAbal;
      const v3118 = v1070.actualPrizePool;
      return;
      
      break;
      }
    case 'UserAPI_deposit0_82': {
      const v1220 = v773[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_82': {
      const v1442 = v773[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_82': {
      const v1664 = v773[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_82': {
      const v1886 = v773[1];
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
  const ctc6 = stdlib.T_Object({
    actualPrizePool: ctc1,
    currProbArrSize: ctc1,
    maxBankASAbal: ctc1,
    numDepositors: ctc1,
    numDeposits: ctc1,
    randomNum: ctc1,
    requestReclaim: ctc5,
    supplyAmtToDefi: ctc1,
    totalDeposit: ctc1,
    totalWithdrawal: ctc1
    });
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Data({
    UserAPI_claimReward0_82: ctc8,
    UserAPI_clearSupplyAmtToDefi0_82: ctc7,
    UserAPI_deposit0_82: ctc7,
    UserAPI_setBankASAbal0_82: ctc7,
    UserAPI_transferFunds0_82: ctc9,
    UserAPI_withdraw0_82: ctc8
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const v666 = ctc.selfAddress();
  const v668 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_deposit0_82" (defined at: ./index.rsh:87:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_deposit'
    });
  const v669 = v668[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v672 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v666), null);
  let v673;
  switch (v672[0]) {
    case 'None': {
      const v674 = v672[1];
      v673 = true;
      
      break;
      }
    case 'Some': {
      const v675 = v672[1];
      v673 = false;
      
      break;
      }
    }
  stdlib.assert(v673, {
    at: './index.rsh:90:15:application',
    fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)', 'at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_deposit0_82" (defined at: ./index.rsh:87:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'You cannot deposit more than once',
    who: 'UserAPI_deposit'
    });
  const v679 = ['UserAPI_deposit0_82', v668];
  
  const txn1 = await (ctc.sendrecv({
    args: [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665, v679],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v669, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
      
      switch (v773[0]) {
        case 'UserAPI_claimReward0_82': {
          const v776 = v773[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_82': {
          const v998 = v773[1];
          
          break;
          }
        case 'UserAPI_deposit0_82': {
          const v1220 = v773[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_deposit"
            });
          const v1228 = v1220[stdlib.checkedBigNumberify('./index.rsh:87:9:spread', stdlib.UInt_max, '0')];
          const v1236 = stdlib.add(v638, v1228);
          sim_r.txns.push({
            amt: v1228,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v772), null);
          const v1303 = null;
          const v1304 = await txn1.getOutput('UserAPI_deposit', 'v1303', ctc0, v1303);
          
          const v1312 = stdlib.sub(v626, v775);
          const v1313 = stdlib.mul(v1228, v1312);
          const v1314 = stdlib.add(v661, v1313);
          const v1315 = stdlib.sub(v1314, stdlib.checkedBigNumberify('./index.rsh:100:11:decimal', stdlib.UInt_max, '1'));
          const v1317 = [v661, v1315, v1228];
          await stdlib.simMapSet(sim_r, 0, v772, v1317);
          const v1321 = stdlib.sub(v1236, v1228);
          sim_r.txns.push({
            kind: 'from',
            to: v619,
            tok: undefined /* Nothing */
            });
          const v1327 = v634.randomNum;
          const v1333 = stdlib.add(v657, v1228);
          const v1335 = stdlib.add(v659, stdlib.checkedBigNumberify('./index.rsh:111:48:decimal', stdlib.UInt_max, '1'));
          const v1337 = stdlib.add(v660, stdlib.checkedBigNumberify('./index.rsh:112:44:decimal', stdlib.UInt_max, '1'));
          const v1339 = stdlib.add(v663, v1228);
          const v1340 = {
            actualPrizePool: v665,
            currProbArrSize: v1315,
            maxBankASAbal: v664,
            numDepositors: v1335,
            numDeposits: v1337,
            randomNum: v1327,
            requestReclaim: v662,
            supplyAmtToDefi: v1339,
            totalDeposit: v1333,
            totalWithdrawal: v658
            };
          const v3254 = v1340;
          const v3256 = v1321;
          const v3257 = v1340.totalDeposit;
          const v3258 = v1340.totalWithdrawal;
          const v3259 = v1340.numDepositors;
          const v3260 = v1340.numDeposits;
          const v3261 = v1340.currProbArrSize;
          const v3262 = v1340.requestReclaim;
          const v3263 = v1340.supplyAmtToDefi;
          const v3264 = v1340.maxBankASAbal;
          const v3265 = v1340.actualPrizePool;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_setBankASAbal0_82': {
          const v1442 = v773[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_82': {
          const v1664 = v773[1];
          
          break;
          }
        case 'UserAPI_withdraw0_82': {
          const v1886 = v773[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
  switch (v773[0]) {
    case 'UserAPI_claimReward0_82': {
      const v776 = v773[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_82': {
      const v998 = v773[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_82': {
      const v1220 = v773[1];
      undefined /* setApiDetails */;
      const v1228 = v1220[stdlib.checkedBigNumberify('./index.rsh:87:9:spread', stdlib.UInt_max, '0')];
      const v1236 = stdlib.add(v638, v1228);
      ;
      const v1296 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v772), null);
      let v1297;
      switch (v1296[0]) {
        case 'None': {
          const v1298 = v1296[1];
          v1297 = true;
          
          break;
          }
        case 'Some': {
          const v1299 = v1296[1];
          v1297 = false;
          
          break;
          }
        }
      const v1301 = stdlib.le(v775, v626);
      const v1302 = v1297 ? v1301 : false;
      stdlib.assert(v1302, {
        at: './index.rsh:94:16:application',
        fs: ['at ./index.rsh:93:22:application call to [unknown function] (defined at: ./index.rsh:93:22:function exp)'],
        msg: null,
        who: 'UserAPI_deposit'
        });
      const v1303 = null;
      const v1304 = await txn1.getOutput('UserAPI_deposit', 'v1303', ctc0, v1303);
      if (v362) {
        stdlib.protect(ctc0, await interact.out(v1220, v1304), {
          at: './index.rsh:88:7:application',
          fs: ['at ./index.rsh:88:7:application call to [unknown function] (defined at: ./index.rsh:88:7:function exp)', 'at ./index.rsh:95:16:application call to "returnF" (defined at: ./index.rsh:93:22:function exp)', 'at ./index.rsh:93:22:application call to [unknown function] (defined at: ./index.rsh:93:22:function exp)'],
          msg: 'out',
          who: 'UserAPI_deposit'
          });
        }
      else {
        }
      
      const v1312 = stdlib.sub(v626, v775);
      const v1313 = stdlib.mul(v1228, v1312);
      const v1314 = stdlib.add(v661, v1313);
      const v1315 = stdlib.sub(v1314, stdlib.checkedBigNumberify('./index.rsh:100:11:decimal', stdlib.UInt_max, '1'));
      const v1317 = [v661, v1315, v1228];
      await stdlib.mapSet(map0, v772, v1317);
      const v1321 = stdlib.sub(v1236, v1228);
      ;
      const v1327 = v634.randomNum;
      const v1333 = stdlib.add(v657, v1228);
      const v1335 = stdlib.add(v659, stdlib.checkedBigNumberify('./index.rsh:111:48:decimal', stdlib.UInt_max, '1'));
      const v1337 = stdlib.add(v660, stdlib.checkedBigNumberify('./index.rsh:112:44:decimal', stdlib.UInt_max, '1'));
      const v1339 = stdlib.add(v663, v1228);
      const v1340 = {
        actualPrizePool: v665,
        currProbArrSize: v1315,
        maxBankASAbal: v664,
        numDepositors: v1335,
        numDeposits: v1337,
        randomNum: v1327,
        requestReclaim: v662,
        supplyAmtToDefi: v1339,
        totalDeposit: v1333,
        totalWithdrawal: v658
        };
      const v3254 = v1340;
      const v3256 = v1321;
      const v3257 = v1340.totalDeposit;
      const v3258 = v1340.totalWithdrawal;
      const v3259 = v1340.numDepositors;
      const v3260 = v1340.numDeposits;
      const v3261 = v1340.currProbArrSize;
      const v3262 = v1340.requestReclaim;
      const v3263 = v1340.supplyAmtToDefi;
      const v3264 = v1340.maxBankASAbal;
      const v3265 = v1340.actualPrizePool;
      return;
      
      break;
      }
    case 'UserAPI_setBankASAbal0_82': {
      const v1442 = v773[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_82': {
      const v1664 = v773[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_82': {
      const v1886 = v773[1];
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
  const ctc6 = stdlib.T_Object({
    actualPrizePool: ctc1,
    currProbArrSize: ctc1,
    maxBankASAbal: ctc1,
    numDepositors: ctc1,
    numDeposits: ctc1,
    randomNum: ctc1,
    requestReclaim: ctc5,
    supplyAmtToDefi: ctc1,
    totalDeposit: ctc1,
    totalWithdrawal: ctc1
    });
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Data({
    UserAPI_claimReward0_82: ctc8,
    UserAPI_clearSupplyAmtToDefi0_82: ctc7,
    UserAPI_deposit0_82: ctc7,
    UserAPI_setBankASAbal0_82: ctc7,
    UserAPI_transferFunds0_82: ctc9,
    UserAPI_withdraw0_82: ctc8
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const v750 = ctc.selfAddress();
  const v752 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_setBankASAbal0_82" (defined at: ./index.rsh:219:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_setBankASAbal'
    });
  const v755 = stdlib.addressEq(v750, v619);
  stdlib.assert(v755, {
    at: './index.rsh:222:15:application',
    fs: ['at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_setBankASAbal0_82" (defined at: ./index.rsh:219:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'You are not the lottery creator',
    who: 'UserAPI_setBankASAbal'
    });
  const v759 = ['UserAPI_setBankASAbal0_82', v752];
  
  const txn1 = await (ctc.sendrecv({
    args: [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665, v759],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:223:26:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
      
      switch (v773[0]) {
        case 'UserAPI_claimReward0_82': {
          const v776 = v773[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_82': {
          const v998 = v773[1];
          
          break;
          }
        case 'UserAPI_deposit0_82': {
          const v1220 = v773[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_82': {
          const v1442 = v773[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_setBankASAbal"
            });
          ;
          const v1565 = v1442[stdlib.checkedBigNumberify('./index.rsh:219:9:spread', stdlib.UInt_max, '0')];
          const v1567 = null;
          const v1568 = await txn1.getOutput('UserAPI_setBankASAbal', 'v1567', ctc0, v1567);
          
          const v1579 = v634.randomNum;
          const v1584 = {
            actualPrizePool: v665,
            currProbArrSize: v661,
            maxBankASAbal: v1565,
            numDepositors: v659,
            numDeposits: v660,
            randomNum: v1579,
            requestReclaim: v662,
            supplyAmtToDefi: v663,
            totalDeposit: v657,
            totalWithdrawal: v658
            };
          const v3401 = v1584;
          const v3403 = v638;
          const v3404 = v1584.totalDeposit;
          const v3405 = v1584.totalWithdrawal;
          const v3406 = v1584.numDepositors;
          const v3407 = v1584.numDeposits;
          const v3408 = v1584.currProbArrSize;
          const v3409 = v1584.requestReclaim;
          const v3410 = v1584.supplyAmtToDefi;
          const v3411 = v1584.maxBankASAbal;
          const v3412 = v1584.actualPrizePool;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_transferFunds0_82': {
          const v1664 = v773[1];
          
          break;
          }
        case 'UserAPI_withdraw0_82': {
          const v1886 = v773[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
  switch (v773[0]) {
    case 'UserAPI_claimReward0_82': {
      const v776 = v773[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_82': {
      const v998 = v773[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_82': {
      const v1220 = v773[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_82': {
      const v1442 = v773[1];
      undefined /* setApiDetails */;
      ;
      const v1565 = v1442[stdlib.checkedBigNumberify('./index.rsh:219:9:spread', stdlib.UInt_max, '0')];
      const v1566 = stdlib.addressEq(v772, v619);
      stdlib.assert(v1566, {
        at: './index.rsh:225:16:application',
        fs: ['at ./index.rsh:224:32:application call to [unknown function] (defined at: ./index.rsh:224:32:function exp)'],
        msg: null,
        who: 'UserAPI_setBankASAbal'
        });
      const v1567 = null;
      const v1568 = await txn1.getOutput('UserAPI_setBankASAbal', 'v1567', ctc0, v1567);
      if (v362) {
        stdlib.protect(ctc0, await interact.out(v1442, v1568), {
          at: './index.rsh:220:7:application',
          fs: ['at ./index.rsh:220:7:application call to [unknown function] (defined at: ./index.rsh:220:7:function exp)', 'at ./index.rsh:226:16:application call to "returnF" (defined at: ./index.rsh:224:32:function exp)', 'at ./index.rsh:224:32:application call to [unknown function] (defined at: ./index.rsh:224:32:function exp)'],
          msg: 'out',
          who: 'UserAPI_setBankASAbal'
          });
        }
      else {
        }
      
      const v1579 = v634.randomNum;
      const v1584 = {
        actualPrizePool: v665,
        currProbArrSize: v661,
        maxBankASAbal: v1565,
        numDepositors: v659,
        numDeposits: v660,
        randomNum: v1579,
        requestReclaim: v662,
        supplyAmtToDefi: v663,
        totalDeposit: v657,
        totalWithdrawal: v658
        };
      const v3401 = v1584;
      const v3403 = v638;
      const v3404 = v1584.totalDeposit;
      const v3405 = v1584.totalWithdrawal;
      const v3406 = v1584.numDepositors;
      const v3407 = v1584.numDeposits;
      const v3408 = v1584.currProbArrSize;
      const v3409 = v1584.requestReclaim;
      const v3410 = v1584.supplyAmtToDefi;
      const v3411 = v1584.maxBankASAbal;
      const v3412 = v1584.actualPrizePool;
      return;
      
      break;
      }
    case 'UserAPI_transferFunds0_82': {
      const v1664 = v773[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_82': {
      const v1886 = v773[1];
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
  const ctc6 = stdlib.T_Object({
    actualPrizePool: ctc1,
    currProbArrSize: ctc1,
    maxBankASAbal: ctc1,
    numDepositors: ctc1,
    numDeposits: ctc1,
    randomNum: ctc1,
    requestReclaim: ctc5,
    supplyAmtToDefi: ctc1,
    totalDeposit: ctc1,
    totalWithdrawal: ctc1
    });
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    UserAPI_claimReward0_82: ctc8,
    UserAPI_clearSupplyAmtToDefi0_82: ctc9,
    UserAPI_deposit0_82: ctc9,
    UserAPI_setBankASAbal0_82: ctc9,
    UserAPI_transferFunds0_82: ctc7,
    UserAPI_withdraw0_82: ctc8
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const v698 = ctc.selfAddress();
  const v700 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:154:26:application call to [unknown function] (defined at: ./index.rsh:154:26:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_transferFunds0_82" (defined at: ./index.rsh:152:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_transferFunds'
    });
  const v702 = v700[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v706 = stdlib.addressEq(v698, v619);
  stdlib.assert(v706, {
    at: './index.rsh:155:15:application',
    fs: ['at ./index.rsh:154:26:application call to [unknown function] (defined at: ./index.rsh:154:26:function exp)', 'at ./index.rsh:154:26:application call to [unknown function] (defined at: ./index.rsh:154:26:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_transferFunds0_82" (defined at: ./index.rsh:152:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'You are not the lottery creator',
    who: 'UserAPI_transferFunds'
    });
  stdlib.assert(v662, {
    at: './index.rsh:156:15:application',
    fs: ['at ./index.rsh:154:26:application call to [unknown function] (defined at: ./index.rsh:154:26:function exp)', 'at ./index.rsh:154:26:application call to [unknown function] (defined at: ./index.rsh:154:26:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_transferFunds0_82" (defined at: ./index.rsh:152:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'Funds already transferred',
    who: 'UserAPI_transferFunds'
    });
  const v709 = stdlib.ge(v702, v657);
  stdlib.assert(v709, {
    at: './index.rsh:157:15:application',
    fs: ['at ./index.rsh:154:26:application call to [unknown function] (defined at: ./index.rsh:154:26:function exp)', 'at ./index.rsh:154:26:application call to [unknown function] (defined at: ./index.rsh:154:26:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_transferFunds0_82" (defined at: ./index.rsh:152:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'Amount reclaimed from DeFi must be greater than deposits',
    who: 'UserAPI_transferFunds'
    });
  const v714 = ['UserAPI_transferFunds0_82', v700];
  
  const txn1 = await (ctc.sendrecv({
    args: [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665, v714],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v702, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
      
      switch (v773[0]) {
        case 'UserAPI_claimReward0_82': {
          const v776 = v773[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_82': {
          const v998 = v773[1];
          
          break;
          }
        case 'UserAPI_deposit0_82': {
          const v1220 = v773[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_82': {
          const v1442 = v773[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_82': {
          const v1664 = v773[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_transferFunds"
            });
          const v1677 = v1664[stdlib.checkedBigNumberify('./index.rsh:152:9:spread', stdlib.UInt_max, '1')];
          const v1680 = stdlib.add(v638, v1677);
          sim_r.txns.push({
            amt: v1677,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1809 = v1664[stdlib.checkedBigNumberify('./index.rsh:152:9:spread', stdlib.UInt_max, '0')];
          const v1821 = null;
          const v1822 = await txn1.getOutput('UserAPI_transferFunds', 'v1821', ctc0, v1821);
          
          const v1840 = stdlib.sub(v1677, v657);
          const v1841 = {
            actualPrizePool: v1840,
            currProbArrSize: v661,
            maxBankASAbal: v664,
            numDepositors: v659,
            numDeposits: v660,
            randomNum: v1809,
            requestReclaim: false,
            supplyAmtToDefi: v663,
            totalDeposit: v657,
            totalWithdrawal: v658
            };
          const v3548 = v1841;
          const v3550 = v1680;
          const v3551 = v1841.totalDeposit;
          const v3552 = v1841.totalWithdrawal;
          const v3553 = v1841.numDepositors;
          const v3554 = v1841.numDeposits;
          const v3555 = v1841.currProbArrSize;
          const v3556 = v1841.requestReclaim;
          const v3557 = v1841.supplyAmtToDefi;
          const v3558 = v1841.maxBankASAbal;
          const v3559 = v1841.actualPrizePool;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_withdraw0_82': {
          const v1886 = v773[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
  switch (v773[0]) {
    case 'UserAPI_claimReward0_82': {
      const v776 = v773[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_82': {
      const v998 = v773[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_82': {
      const v1220 = v773[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_82': {
      const v1442 = v773[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_82': {
      const v1664 = v773[1];
      undefined /* setApiDetails */;
      const v1677 = v1664[stdlib.checkedBigNumberify('./index.rsh:152:9:spread', stdlib.UInt_max, '1')];
      const v1680 = stdlib.add(v638, v1677);
      ;
      const v1809 = v1664[stdlib.checkedBigNumberify('./index.rsh:152:9:spread', stdlib.UInt_max, '0')];
      const v1811 = stdlib.addressEq(v772, v619);
      const v1813 = v1811 ? v662 : false;
      const v1815 = stdlib.ge(v1677, v657);
      const v1816 = v1813 ? v1815 : false;
      const v1818 = stdlib.le(v775, v626);
      const v1819 = v1818 ? false : true;
      const v1820 = v1816 ? v1819 : false;
      stdlib.assert(v1820, {
        at: './index.rsh:164:16:application',
        fs: ['at ./index.rsh:163:35:application call to [unknown function] (defined at: ./index.rsh:163:35:function exp)'],
        msg: null,
        who: 'UserAPI_transferFunds'
        });
      const v1821 = null;
      const v1822 = await txn1.getOutput('UserAPI_transferFunds', 'v1821', ctc0, v1821);
      if (v362) {
        stdlib.protect(ctc0, await interact.out(v1664, v1822), {
          at: './index.rsh:153:7:application',
          fs: ['at ./index.rsh:153:7:application call to [unknown function] (defined at: ./index.rsh:153:7:function exp)', 'at ./index.rsh:168:16:application call to "returnF" (defined at: ./index.rsh:163:35:function exp)', 'at ./index.rsh:163:35:application call to [unknown function] (defined at: ./index.rsh:163:35:function exp)'],
          msg: 'out',
          who: 'UserAPI_transferFunds'
          });
        }
      else {
        }
      
      const v1840 = stdlib.sub(v1677, v657);
      const v1841 = {
        actualPrizePool: v1840,
        currProbArrSize: v661,
        maxBankASAbal: v664,
        numDepositors: v659,
        numDeposits: v660,
        randomNum: v1809,
        requestReclaim: false,
        supplyAmtToDefi: v663,
        totalDeposit: v657,
        totalWithdrawal: v658
        };
      const v3548 = v1841;
      const v3550 = v1680;
      const v3551 = v1841.totalDeposit;
      const v3552 = v1841.totalWithdrawal;
      const v3553 = v1841.numDepositors;
      const v3554 = v1841.numDeposits;
      const v3555 = v1841.currProbArrSize;
      const v3556 = v1841.requestReclaim;
      const v3557 = v1841.supplyAmtToDefi;
      const v3558 = v1841.maxBankASAbal;
      const v3559 = v1841.actualPrizePool;
      return;
      
      break;
      }
    case 'UserAPI_withdraw0_82': {
      const v1886 = v773[1];
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
  const ctc6 = stdlib.T_Object({
    actualPrizePool: ctc1,
    currProbArrSize: ctc1,
    maxBankASAbal: ctc1,
    numDepositors: ctc1,
    numDeposits: ctc1,
    randomNum: ctc1,
    requestReclaim: ctc5,
    supplyAmtToDefi: ctc1,
    totalDeposit: ctc1,
    totalWithdrawal: ctc1
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Data({
    UserAPI_claimReward0_82: ctc7,
    UserAPI_clearSupplyAmtToDefi0_82: ctc8,
    UserAPI_deposit0_82: ctc8,
    UserAPI_setBankASAbal0_82: ctc8,
    UserAPI_transferFunds0_82: ctc9,
    UserAPI_withdraw0_82: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const v681 = ctc.selfAddress();
  const v683 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:120:10:application call to [unknown function] (defined at: ./index.rsh:120:10:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_withdraw0_82" (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_withdraw'
    });
  const v685 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v681), null);
  const v686 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v687 = stdlib.fromSome(v685, v686);
  const v688 = v687[stdlib.checkedBigNumberify('./index.rsh:121:71:array ref', stdlib.UInt_max, '2')];
  const v689 = stdlib.gt(v688, stdlib.checkedBigNumberify('./index.rsh:122:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v689, {
    at: './index.rsh:122:15:application',
    fs: ['at ./index.rsh:120:10:application call to [unknown function] (defined at: ./index.rsh:120:10:function exp)', 'at ./index.rsh:120:10:application call to [unknown function] (defined at: ./index.rsh:120:10:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_withdraw0_82" (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'You have no balance to withdraw',
    who: 'UserAPI_withdraw'
    });
  const v691 = v662 ? false : true;
  stdlib.assert(v691, {
    at: './index.rsh:123:15:application',
    fs: ['at ./index.rsh:120:10:application call to [unknown function] (defined at: ./index.rsh:120:10:function exp)', 'at ./index.rsh:120:10:application call to [unknown function] (defined at: ./index.rsh:120:10:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_withdraw0_82" (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'Funds not reclaimed from DeFi protocol',
    who: 'UserAPI_withdraw'
    });
  const v693 = stdlib.ge(v638, v688);
  stdlib.assert(v693, {
    at: './index.rsh:124:15:application',
    fs: ['at ./index.rsh:120:10:application call to [unknown function] (defined at: ./index.rsh:120:10:function exp)', 'at ./index.rsh:120:10:application call to [unknown function] (defined at: ./index.rsh:120:10:function exp)', 'at ./index.rsh:62:31:application call to "runUserAPI_withdraw0_82" (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:62:31:application call to [unknown function] (defined at: ./index.rsh:62:31:function exp)'],
    msg: 'Contract does not have enough funds to dispense',
    who: 'UserAPI_withdraw'
    });
  const v696 = ['UserAPI_withdraw0_82', v683];
  
  const txn1 = await (ctc.sendrecv({
    args: [v619, v622, v626, v634, v638, v657, v658, v659, v660, v661, v662, v663, v664, v665, v696],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:129:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
      
      switch (v773[0]) {
        case 'UserAPI_claimReward0_82': {
          const v776 = v773[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_82': {
          const v998 = v773[1];
          
          break;
          }
        case 'UserAPI_deposit0_82': {
          const v1220 = v773[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_82': {
          const v1442 = v773[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_82': {
          const v1664 = v773[1];
          
          break;
          }
        case 'UserAPI_withdraw0_82': {
          const v1886 = v773[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_withdraw"
            });
          ;
          const v2066 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v772), null);
          const v2067 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2068 = stdlib.fromSome(v2066, v2067);
          const v2069 = v2068[stdlib.checkedBigNumberify('./index.rsh:132:43:array ref', stdlib.UInt_max, '2')];
          const v2081 = null;
          const v2082 = await txn1.getOutput('UserAPI_withdraw', 'v2081', ctc0, v2081);
          
          const v2087 = v2068[stdlib.checkedBigNumberify('./index.rsh:140:25:array ref', stdlib.UInt_max, '0')];
          const v2088 = v2068[stdlib.checkedBigNumberify('./index.rsh:141:25:array ref', stdlib.UInt_max, '1')];
          const v2089 = [v2087, v2088, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v772, v2089);
          const v2093 = stdlib.sub(v638, v2069);
          sim_r.txns.push({
            kind: 'from',
            to: v772,
            tok: undefined /* Nothing */
            });
          const v2099 = v634.randomNum;
          const v2105 = stdlib.add(v658, v2069);
          const v2106 = {
            actualPrizePool: v665,
            currProbArrSize: v661,
            maxBankASAbal: v664,
            numDepositors: v659,
            numDeposits: v660,
            randomNum: v2099,
            requestReclaim: v662,
            supplyAmtToDefi: v663,
            totalDeposit: v657,
            totalWithdrawal: v2105
            };
          const v3695 = v2106;
          const v3697 = v2093;
          const v3698 = v2106.totalDeposit;
          const v3699 = v2106.totalWithdrawal;
          const v3700 = v2106.numDepositors;
          const v3701 = v2106.numDeposits;
          const v3702 = v2106.currProbArrSize;
          const v3703 = v2106.requestReclaim;
          const v3704 = v2106.supplyAmtToDefi;
          const v3705 = v2106.maxBankASAbal;
          const v3706 = v2106.actualPrizePool;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v773], secs: v775, time: v774, didSend: v362, from: v772 } = txn1;
  switch (v773[0]) {
    case 'UserAPI_claimReward0_82': {
      const v776 = v773[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_82': {
      const v998 = v773[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_82': {
      const v1220 = v773[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_82': {
      const v1442 = v773[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_82': {
      const v1664 = v773[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_82': {
      const v1886 = v773[1];
      undefined /* setApiDetails */;
      ;
      const v2066 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v772), null);
      const v2067 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2068 = stdlib.fromSome(v2066, v2067);
      const v2069 = v2068[stdlib.checkedBigNumberify('./index.rsh:132:43:array ref', stdlib.UInt_max, '2')];
      const v2070 = stdlib.gt(v2069, stdlib.checkedBigNumberify('./index.rsh:133:31:decimal', stdlib.UInt_max, '0'));
      const v2072 = v662 ? false : true;
      const v2073 = v2070 ? v2072 : false;
      const v2075 = stdlib.ge(v638, v2069);
      const v2076 = v2073 ? v2075 : false;
      const v2078 = stdlib.le(v775, v626);
      const v2079 = v2078 ? false : true;
      const v2080 = v2076 ? v2079 : false;
      stdlib.assert(v2080, {
        at: './index.rsh:133:16:application',
        fs: ['at ./index.rsh:130:17:application call to [unknown function] (defined at: ./index.rsh:130:17:function exp)'],
        msg: null,
        who: 'UserAPI_withdraw'
        });
      const v2081 = null;
      const v2082 = await txn1.getOutput('UserAPI_withdraw', 'v2081', ctc0, v2081);
      if (v362) {
        stdlib.protect(ctc0, await interact.out(v1886, v2082), {
          at: './index.rsh:119:7:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:7:function exp)', 'at ./index.rsh:137:16:application call to "returnF" (defined at: ./index.rsh:130:17:function exp)', 'at ./index.rsh:130:17:application call to [unknown function] (defined at: ./index.rsh:130:17:function exp)'],
          msg: 'out',
          who: 'UserAPI_withdraw'
          });
        }
      else {
        }
      
      const v2087 = v2068[stdlib.checkedBigNumberify('./index.rsh:140:25:array ref', stdlib.UInt_max, '0')];
      const v2088 = v2068[stdlib.checkedBigNumberify('./index.rsh:141:25:array ref', stdlib.UInt_max, '1')];
      const v2089 = [v2087, v2088, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, v772, v2089);
      const v2093 = stdlib.sub(v638, v2069);
      ;
      const v2099 = v634.randomNum;
      const v2105 = stdlib.add(v658, v2069);
      const v2106 = {
        actualPrizePool: v665,
        currProbArrSize: v661,
        maxBankASAbal: v664,
        numDepositors: v659,
        numDeposits: v660,
        randomNum: v2099,
        requestReclaim: v662,
        supplyAmtToDefi: v663,
        totalDeposit: v657,
        totalWithdrawal: v2105
        };
      const v3695 = v2106;
      const v3697 = v2093;
      const v3698 = v2106.totalDeposit;
      const v3699 = v2106.totalWithdrawal;
      const v3700 = v2106.numDepositors;
      const v3701 = v2106.numDeposits;
      const v3702 = v2106.currProbArrSize;
      const v3703 = v2106.requestReclaim;
      const v3704 = v2106.supplyAmtToDefi;
      const v3705 = v2106.maxBankASAbal;
      const v3706 = v2106.actualPrizePool;
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
    pure: [`UserView_actualPrizePool()uint64`, `UserView_currProbArrSize()uint64`, `UserView_deadlineSecs()uint64`, `UserView_deploymentSecs()uint64`, `UserView_getUserDeposit(address)uint64`, `UserView_maxBankASAbal()uint64`, `UserView_numDepositors()uint64`, `UserView_numDeposits()uint64`, `UserView_requestReclaim()byte`, `UserView_supplyAmtToDefi()uint64`, `UserView_totalDeposit()uint64`, `UserView_totalWithdrawal()uint64`],
    sigs: [`UserAPI_claimReward()byte[0]`, `UserAPI_clearSupplyAmtToDefi(uint64)byte[0]`, `UserAPI_deposit(uint64)byte[0]`, `UserAPI_setBankASAbal(uint64)byte[0]`, `UserAPI_transferFunds(uint64,uint64)byte[0]`, `UserAPI_withdraw()byte[0]`, `UserView_actualPrizePool()uint64`, `UserView_currProbArrSize()uint64`, `UserView_deadlineSecs()uint64`, `UserView_deploymentSecs()uint64`, `UserView_getUserDeposit(address)uint64`, `UserView_maxBankASAbal()uint64`, `UserView_numDepositors()uint64`, `UserView_numDeposits()uint64`, `UserView_requestReclaim()byte`, `UserView_supplyAmtToDefi()uint64`, `UserView_totalDeposit()uint64`, `UserView_totalWithdrawal()uint64`]
    },
  appApproval: `BiAcAAEDCBACBRgZo9TxsQzSto2LDta+5NkOnOmL9A6Urb65D/m1nckO/tqy+AzUq/a0Damlmu0M/Mb1kgKrwafOBZG+4qsI8dzhkQu289niAuOY1Hq62bOGAYqrlR0gKCYDAQABAQAiNQAxGEEHeypkSSJbNQElWzUCMRkjEkEACjEAKCEIr2ZCB0g2GgAXSUECQSI1BCM1BkkhCQxAASVJIQoMQACNSSELDEAATUkhDAxAAC1JIQ0MQAASIQ0SRCo1/yg0/1AhBK9QQgIeIQwSRCo1/4ABBTT/UCEEr1BCAgohCxJENAEkEkQoZClkUEk1A1eqCDUHQgbnSSEODEAAGSEOEkQ0ASQSRChkKWRQSTUDV6kBNQdCBschChJENAEkEkQoZClkUEk1A1eRCDUHQgauSSEPDEAANUkhEAxAABUhEBJENhoBNf+AAQM0/1Alr1BCAZUhDxJENAEkEkQoZClkUEk1A1e6CDUHQgZySSERDEAAGSEREkQ0ASQSRChkKWRQSTUDV5kINQdCBlIhCRJENAEkEkQ2GgGIBlRJNf4iVUAABiI1/0IAEDT+VwEYSTX9IQRbNf9CAAA0/xY1B0IGHUkhEgxAAJlJIRMMQABZSSEUDEAAOUkhFQxAABkhFRJENAEkEkQoZClkUEk1A1eyCDUHQgXoIRQSRDQBJBJEKGQpZFBJNQNXoQg1B0IFzyETEkQ0ASQSRChkKWRQSTUDVygINQdCBbZJIRYMQAAZIRYSRDQBJBJEKGQpZFBJNQNXiQg1B0IFliESEkQ0ASQSRChkKWRQSTUDV4EINQdCBX1JIRcMQAAvSSEYDEAAFSEYEkQ2GgE1/4ABAjT/UCWvUEIAZCEXEkQ2GgE1/yk0/1Alr1BCAFFJIRkMQAAZIRkSRDQBJBJEKGQpZFBJNQNXIAg1B0IFJ4H7zbwYEkQ2GgE2GgJQNf+AAQQ0/1BCABg2GgIXNQQ2GgM2GgEXSSEFDEADkiEFEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSkpKVwAgNf8hGls1/iEbWzX9VzBJNfyBeVs1+4GBAVs1+oGJAVs1+YGRAVs1+IGZAVs194GhAVs19lepARc19YGqAVs19IGyAVs184G6AVs18kk1BTXxgASKiizcNPFQsDTxIlVJJAxAAXhJgQQMQAEdSSEGDEAApSEGEkQhB68xAIgEZkk171cBGDTvIlVNSTXwIQRbSTXvIg009RQQNPs07w8QMgc0/Q4UEESACAAAAAAAAAghsCo1BzEAKCk08FcACDTwVwgIUCWvUFBmsSKyATTvsggjshAxALIHszT/NP40/TTyFjT2FlA08xZQNPgWUDT3FlA0/FcoCFA09RZRBwhQNPQWUDT6FlA0+TTvCBZQMgY0+zTvCUIC2Ug08VcBEDXwNPAlWzXvNO+IA8kxADT/EjT1EDTvNPoPEDIHNP0OFBBEgAgAAAAAAAAHHbAqNQc0/zT+NP007zT6CRY09hZQNPMWUDT4FlA09xZQNPBXAAhQKFA09BZQNPoWUDT5FlAyBjT7NO8IQgJoSDTxVwEINfAxADT/EkSACAAAAAAAAAYfsCo1BzT/NP40/TTyFjT2FlA08FA0+BZQNPcWUDT8VygIUDT1FlEHCFA09BZQNPoWUDT5FlAyBjT7QgIUSSMMQAEbSSEFDEAAu0g08VcBCDXwNPAXNe8074gC+DEAiALkSTXtIlVAAAYjNe5CAAYiNe5CAAA07jIHNP0OEESACAAAAAAAAAUXsCo1BzT2NO80/TIHCQsIIwk17TEAKCk09hY07RZQNO8WUFBmsSKyATTvsggjshA0/7IHszT/NP40/TTyFjTtFlA08xZQNPgjCBZQNPcjCBZQNPxXKAhQNPUWUQcIUDT0NO8IFlA0+jTvCBZQNPkWUDIGNPs07wg07wlCAUxINPFXAQg18DEANP8SRIAIAAAAAAAABBuwKjUHNP80/jT9NPIWNPYWUDTzFlA0+BZQNPcWUDT8VygIUDT1FlEHCFA09DTwFwkWUDT6FlA0+RZQMgY0+0IA80ghB68xAIgB3kk171cBGDTvIlVNNfA0/CEbWzXvNPUUNPs08g8QNO808CJbDxA07zTwJVsOEDIHNP0OFBBEsSKyATTysggjshAxALIHs4AIAAAAAAAAAzSwKjUHNP80/jT9NPwyBjT7NPIJQgCFIhJEgaCNBogBfiI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDEAMgcyBzT/CIBJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIGIkIAADX/Nf41/TX8Nfs1+jT9gTlbNfk0/YFBWzX4NP0hB1s19zT9IRpbNfY0/SVbNfU0/VcwARc19DT9gTFbNfM0/SEEWzXyNP0iWzXxNPo0+xZQNPwWUDT9UDT/FlA0+RZQNPgWUDT3FlA09hZQNPUWUDT0FlEHCFA08xZQNPIWUDTxFlAoSwFXAH9nKUsBV39DZ0gkNQEyBjUCQgAcMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEIr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 25,
  stateKeys: 2,
  stateSize: 194,
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
                "name": "v620",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
                "name": "v620",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_claimReward0_82",
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
                    "internalType": "struct T10",
                    "name": "_UserAPI_clearSupplyAmtToDefi0_82",
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
                    "internalType": "struct T10",
                    "name": "_UserAPI_deposit0_82",
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
                    "internalType": "struct T10",
                    "name": "_UserAPI_setBankASAbal0_82",
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
                    "internalType": "struct T11",
                    "name": "_UserAPI_transferFunds0_82",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_withdraw0_82",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v773",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
    "name": "_reach_oe_v1051",
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
    "name": "_reach_oe_v1303",
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
    "name": "_reach_oe_v1567",
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
    "name": "_reach_oe_v1821",
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
    "name": "_reach_oe_v2081",
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
    "name": "_reach_oe_v820",
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
        "name": "v3720",
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
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_claimReward0_82",
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
                    "internalType": "struct T10",
                    "name": "_UserAPI_clearSupplyAmtToDefi0_82",
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
                    "internalType": "struct T10",
                    "name": "_UserAPI_deposit0_82",
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
                    "internalType": "struct T10",
                    "name": "_UserAPI_setBankASAbal0_82",
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
                    "internalType": "struct T11",
                    "name": "_UserAPI_transferFunds0_82",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_withdraw0_82",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v773",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
  Bytecode: `0x6080604052604051620032ac380380620032ac8339810160408190526200002691620004fd565b60008055436003556200003862000273565b604080513381528351602080830191909152840151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008c3415601362000140565b80516000908190528151602001819052815160400181905281516060018190528151608001819052815160a0018190528151600160c090910152815160e00181905281516101000181905281516101200152620000e8620002dc565b80513390528051426020918201819052908401515162000108916200059f565b81516040908101919091528251602080840180519290925281514391015251600091015262000137816200016a565b50505062000732565b81620001665760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001746200030e565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015281840180515160608086019190915281518301516080808701919091528251516101009081015160a08801528351516101209081015160c0808a01919091528551519094015160e0808a019190915285515190930151918801919091528351518601519087015282515190910151151561014086015281515101516101608501528051518201516101808501525151516101a084015260036000554360015551620002489183910162000632565b604051602081830303815290604052600290805190602001906200026e929190620003df565b505050565b6040518060200160405280620002d76040518061014001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620002d76200046e565b604051806101c0016040528060006001600160a01b031681526020016000815260200160008152602001620003916040518061014001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b828054620003ed90620006f5565b90600052602060002090601f0160209004810192826200041157600085556200045c565b82601f106200042c57805160ff19168380011785556200045c565b828001600101855582156200045c579182015b828111156200045c5782518255916020019190600101906200043f565b506200046a929150620004e6565b5090565b6040518060600160405280620004d26040518061014001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b815260200160008152602001600081525090565b5b808211156200046a5760008155600101620004e7565b60008183036040808212156200051257600080fd5b80518082016001600160401b0380821183831017156200054257634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200055c57600080fd5b8351945060208501915084821081831117156200058957634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620005c157634e487b7160e01b600052601160045260246000fd5b500190565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c08101516200061060c084018215159052565b5060e08181015190830152610100808201519083015261012090810151910152565b81516001600160a01b031681526102e08101602083015160208301526040830151604083015260608301516200066c6060840182620005c6565b5060808301516101a0818185015260a08501516101c085015260c08501516101e085015260e08501516102008501526101008501516102208501526101208501516102408501526101408501519150620006cb61026085018315159052565b6101608501516102808501526101808501516102a0850152808501516102c0850152505092915050565b600181811c908216806200070a57607f821691505b602082108114156200072c57634e487b7160e01b600052602260045260246000fd5b50919050565b612b6a80620007426000396000f3fe6080604052600436106101385760003560e01c806383230757116100b0578063ad31e8521161006c578063ad31e852146102d4578063b30e4275146102e9578063eb5e5d0a146102fe578063edc9c79314610313578063ee86704c14610328578063f81120961461033d57005b8063832307571461024a578063974207881461025f5780639f0b35a714610274578063ab53f2c614610289578063ac9ab3c1146102ac578063acb275b9146102bf57005b80633bc5b7bf116100ff5780633bc5b7bf146101ce57806344b6b609146101fb5780636137f38a1461021057806369a2941f146102185780636cfb32211461022d57806371fadb901461024257005b80630fd59e41146101415780631e93b0f1146101695780632a223a81146101885780632db837bb1461019b57806330a2d774146101ae57005b3661013f57005b005b61015461014f36600461239c565b610350565b60405190151581526020015b60405180910390f35b34801561017557600080fd5b506003545b604051908152602001610160565b61013f6101963660046123b5565b6103a8565b6101546101a93660046123ce565b6103cc565b3480156101ba57600080fd5b5061017a6101c9366004612408565b61042b565b3480156101da57600080fd5b506101ee6101e9366004612408565b610565565b6040516101609190612442565b34801561020757600080fd5b5061017a61057c565b610154610642565b34801561022457600080fd5b5061017a61068c565b34801561023957600080fd5b5061017a610750565b610154610813565b34801561025657600080fd5b5060015461017a565b34801561026b57600080fd5b5061017a610860565b34801561028057600080fd5b5061017a610924565b34801561029557600080fd5b5061029e6109e7565b60405161016092919061249a565b6101546102ba36600461239c565b610a84565b3480156102cb57600080fd5b5061017a610adc565b3480156102e057600080fd5b5061017a610ba0565b3480156102f557600080fd5b5061017a610c64565b34801561030a57600080fd5b5061017a610d27565b34801561031f57600080fd5b50610154610dea565b34801561033457600080fd5b5061017a610eae565b61015461034b36600461239c565b610f72565b600061035a611f71565b610362611fa6565b61036a611fc5565b6040805160208082018352878252608084019190915260038352815180820190925282825283015261039c8284610fc9565b50506060015192915050565b6103b0611f71565b6103c86103c23684900384018461268d565b82610fc9565b5050565b60006103d6611f71565b6103de611fa6565b6103e6611fc5565b604080518082018252878152602080820188905260a084019190915260048352815180820190925282825283015261041e8284610fc9565b5050608001519392505050565b6000600360005414156105545760006002805461044790612762565b80601f016020809104026020016040519081016040528092919081815260200182805461047390612762565b80156104c05780601f10610495576101008083540402835291602001916104c0565b820191906000526020600020905b8154815290600101906020018083116104a357829003601f168201915b50505050508060200190518101906104d89190612839565b90506104e2612029565b60006104ed85611d5f565b5160018111156104ff576104ff61242c565b141561050e576000815261054c565b600161051985611d5f565b51600181111561052b5761052b61242c565b141561054c5761053a84611d5f565b60409081015160208301819052015181525b519392505050565b6105606000600b611e49565b919050565b61056d612043565b61057682611d5f565b92915050565b6000600360005414156106335760006002805461059890612762565b80601f01602080910402602001604051908101604052809291908181526020018280546105c490612762565b80156106115780601f106105e657610100808354040283529160200191610611565b820191906000526020600020905b8154815290600101906020018083116105f457829003601f168201915b50505050508060200190518101906106299190612839565b60a0015192915050565b61063f60006011611e49565b90565b600061064c611f71565b610654611fa6565b61065c611fc5565b6000602082810182905290825260408051808301909152828152908301526106848284610fc9565b505051919050565b600060036000541415610744576000600280546106a890612762565b80601f01602080910402602001604051908101604052809291908181526020018280546106d490612762565b80156107215780601f106106f657610100808354040283529160200191610721565b820191906000526020600020905b81548152906001019060200180831161070457829003601f168201915b50505050508060200190518101906107399190612839565b6101a0015192915050565b61063f60006007611e49565b6000600360005414156108075760006002805461076c90612762565b80601f016020809104026020016040519081016040528092919081815260200182805461079890612762565b80156107e55780601f106107ba576101008083540402835291602001916107e5565b820191906000526020600020905b8154815290600101906020018083116107c857829003601f168201915b50505050508060200190518101906107fd9190612839565b6040015192915050565b61063f60006009611e49565b600061081d611f71565b610825611fa6565b61082d611fc5565b600060c082015260058152604080516020808201909252828152908301526108558284610fc9565b505060a00151919050565b6000600360005414156109185760006002805461087c90612762565b80601f01602080910402602001604051908101604052809291908181526020018280546108a890612762565b80156108f55780601f106108ca576101008083540402835291602001916108f5565b820191906000526020600020905b8154815290600101906020018083116108d857829003601f168201915b505050505080602001905181019061090d9190612839565b610120015192915050565b61063f60006008611e49565b6000600360005414156109db5760006002805461094090612762565b80601f016020809104026020016040519081016040528092919081815260200182805461096c90612762565b80156109b95780601f1061098e576101008083540402835291602001916109b9565b820191906000526020600020905b81548152906001019060200180831161099c57829003601f168201915b50505050508060200190518101906109d19190612839565b60c0015192915050565b61063f60006012611e49565b6000606060005460028080546109fc90612762565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2890612762565b8015610a755780601f10610a4a57610100808354040283529160200191610a75565b820191906000526020600020905b815481529060010190602001808311610a5857829003601f168201915b50505050509050915091509091565b6000610a8e611f71565b610a96611fa6565b610a9e611fc5565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610ad08284610fc9565b50506040015192915050565b600060036000541415610b9457600060028054610af890612762565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2490612762565b8015610b715780601f10610b4657610100808354040283529160200191610b71565b820191906000526020600020905b815481529060010190602001808311610b5457829003601f168201915b5050505050806020019051810190610b899190612839565b610160015192915050565b61063f60006010611e49565b600060036000541415610c5857600060028054610bbc90612762565b80601f0160208091040260200160405190810160405280929190818152602001828054610be890612762565b8015610c355780601f10610c0a57610100808354040283529160200191610c35565b820191906000526020600020905b815481529060010190602001808311610c1857829003601f168201915b5050505050806020019051810190610c4d9190612839565b610100015192915050565b61063f6000600e611e49565b600060036000541415610d1b57600060028054610c8090612762565b80601f0160208091040260200160405190810160405280929190818152602001828054610cac90612762565b8015610cf95780601f10610cce57610100808354040283529160200191610cf9565b820191906000526020600020905b815481529060010190602001808311610cdc57829003601f168201915b5050505050806020019051810190610d119190612839565b60e0015192915050565b61063f6000600d611e49565b600060036000541415610dde57600060028054610d4390612762565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6f90612762565b8015610dbc5780601f10610d9157610100808354040283529160200191610dbc565b820191906000526020600020905b815481529060010190602001808311610d9f57829003601f168201915b5050505050806020019051810190610dd49190612839565b6020015192915050565b61063f6000600a611e49565b600060036000541415610ea257600060028054610e0690612762565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3290612762565b8015610e7f5780601f10610e5457610100808354040283529160200191610e7f565b820191906000526020600020905b815481529060010190602001808311610e6257829003601f168201915b5050505050806020019051810190610e979190612839565b610140015192915050565b61063f6000600f611e49565b600060036000541415610f6657600060028054610eca90612762565b80601f0160208091040260200160405190810160405280929190818152602001828054610ef690612762565b8015610f435780601f10610f1857610100808354040283529160200191610f43565b820191906000526020600020905b815481529060010190602001808311610f2657829003601f168201915b5050505050806020019051810190610f5b9190612839565b610180015192915050565b61063f6000600c611e49565b6000610f7c611f71565b610f84611fa6565b610f8c611fc5565b604080516020808201835287825283830191909152600183528151808201909252828252830152610fbd8284610fc9565b50506020015192915050565b610fd96003600054146020611e49565b8151610ff4901580610fed57508251600154145b6021611e49565b60008080556002805461100690612762565b80601f016020809104026020016040519081016040528092919081815260200182805461103290612762565b801561107f5780601f106110545761010080835404028352916020019161107f565b820191906000526020600020905b81548152906001019060200180831161106257829003601f168201915b50505050508060200190518101906110979190612839565b90506110a1612062565b7f5849854b9a47badfc865c301d0e712b0916363428590a1d208a978aa39d28a1533856040516110d2929190612909565b60405180910390a160006020850151515160058111156110f4576110f461242c565b14156112b95761110634156014611e49565b80516000908190528151602001819052815160400152600161112733611d5f565b5160018111156111395761113961242c565b14611145578051611153565b61114e33611d5f565b604001515b60208201526101408201516111df9061117857826101a001518360800151101561117b565b60005b611186576000611198565b602082015151606084015160a0015110155b6111a35760006111b7565b6020828101510151606084015160a0015111155b6111c25760006111d8565b82604001514211156111d55760016111d8565b60005b6015611e49565b6101a0820151604051339180156108fc02916000818181858888f19350505050158015611210573d6000803e3d6000fd5b50604051600081527fdae82dc1b0c13711e7f1432401ff54b121302c06336476efb34f40722546a7cd9060200160405180910390a160008352611251612179565b825181516001600160a01b0390911690526020808401518251820152604080850151835190910152606084015181830180519190915251439101526101a083015160808401516112a191906129bb565b6020820151604001526112b381611e6e565b50611d59565b60016020850151515160058111156112d3576112d361242c565b141561144557602084015151604090810151908201526112f534156016611e49565b815161130d906001600160a01b031633146017611e49565b604051600081527ff8a3fc5581ede987458851f211ecd664a40c6a0372c486e8f3e742daa269f3bc9060200160405180910390a160006020808501919091526101a08301516060808401805192909252610120850151825190930192909252610180840151815160409081019190915260e085015182518401526101008501518251608001529184015160a090810151825190910152610140840151905190151560c090910152810151516101608301516113c891906129bb565b60608201805160e0019190915260a08301518151610100015260c0830151905161012001526113f5612179565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608401518284018051919091528051439301929092526080850151915101526112b381611e6e565b600260208501515151600581111561145f5761145f61242c565b1415611756576020840151516060015160808201819052516114849034146018611e49565b600061148f33611d5f565b5160018111156114a1576114a161242c565b14156114b357600160a08201526114de565b60016114be33611d5f565b5160018111156114d0576114d061242c565b14156114de57600060a08201525b6115018160a001516114f15760006114fa565b82604001514211155b6019611e49565b604051600081527f6ba0bc7b2428a40572da50c05a8c66c91661ebd425aa711d7801b28b3aa3abe49060200160405180910390a160006040808501919091528201516001906115519042906129bb565b60808301515161156191906129d2565b83610120015161157191906129f1565b61157b91906129bb565b60c0820190815261012083015160e0830180519190915290518151602090810191909152608083015151825160409081019190915233600090815260049092529020805460ff19166001908117825591516115dc92919091019060036121a9565b5081516080820151516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561161b573d6000803e3d6000fd5b506101a0820151610100820180519190915260c082015181516020015261018083015190516040015260e0820151611655906001906129f1565b6101008083015160600191909152820151611672906001906129f1565b61010082018051608090810192909252606084015160a090810151825190910152610140840151905190151560c090910152810151516101608301516116b891906129f1565b61010082015160e0015260808101515160a08301516116d791906129f1565b61010080830180519091019190915260c0830151905161012001526116fa612179565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101526101008301518183018051919091525143910152608080830151519084015161174c9082906129f1565b6112a191906129bb565b60036020850151515160058111156117705761177061242c565b14156118c757602084015151608001516101208201526117923415601a611e49565b81516117aa906001600160a01b03163314601b611e49565b604051600081527f69f74ef5f3af836a0802e4d43888b6b6d3e6cc27e4655448e9f216d3eb4a62209060200160405180910390a160006060808501919091526101a083015161014080840180519290925261012080860151835160200152808501515183516040015260e0808701518451860152610100808801518551608001529487015160a090810151855182015292870151845190151560c09182015261016088015185519092019190915291860151835190940193909352840151905190910152611876612179565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526101408401518284018051919091528051439301929092526080850151915101526112b381611e6e565b60046020850151515160058111156118e1576118e161242c565b1415611a98576020808501515160a0015161016083018190520151611909903414601c611e49565b8151611971906001600160a01b0316331461192557600061192c565b8261014001515b611937576000611949565b8260a001518261016001516020015110155b61195457600061196a565b826040015142111561196757600161196a565b60005b601d611e49565b604051600081527fcd11a8ed54213897362eba7587e146bda9d9918f29b755bf3709c002c9d3e55a9060200160405180910390a16000608084015260a0820151610160820151602001516119c591906129bb565b610180808301805192909252610120808501518351602001529084015182516040015260e080850151835160600152610100808601518451608001526101608086015151855160a0908101919091528551600060c091820152918801518651909401939093529186015184519091015284015191510152611a44612179565b825181516001600160a01b0390911690526020808401518251820152604080850151835190910152610180830151818301805191909152514390820152610160830151015160808401516112a191906129f1565b6005602085015151516005811115611ab257611ab261242c565b1415611d5957611ac43415601e611e49565b6101a08101805160009081905281516020018190529051604001526001611aea33611d5f565b516001811115611afc57611afc61242c565b14611b0c57806101a00151611b1a565b611b1533611d5f565b604001515b6101c0820181905260400151611b8e90611b35576000611b49565b826101400151611b46576001611b49565b60005b611b54576000611b66565b6101c082015160400151608084015110155b611b71576000611b87565b8260400151421115611b84576001611b87565b60005b601f611e49565b604051600081527f6ca56d4d4f1c24aa762887738b9db4735910253105b7d963645e093d469978489060200160405180910390a1600060a084018190526101c082018051516101e0840180519190915290516020908101518251820152815160409081018490523384526004909152909120805460ff1916600190811782559151611c1f92919091019060036121a9565b506101c08101516040908101519051339180156108fc02916000818181858888f19350505050158015611c56573d6000803e3d6000fd5b506101a0820151610200820180519190915261012083015181516020015261018083015181516040015260e0808401518251606090810191909152610100808601518451608001529085015160a0908101518451820152610140860151845190151560c09091015261016086015184519093019290925290840151915101526101c0810151600260200201518260c00151611cf191906129f1565b6102008201516101200152611d04612179565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015261020084015182840180519190915251439201919091526101c0830151015160808401516112a191906129bb565b50505050565b611d67612043565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611d9657611d9661242c565b1415611e3a576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611dd757611dd761242c565b6001811115611de857611de861242c565b81528154610100900460ff16151560208201526040805160608101808352919092019190600184019060039082845b815481526020019060010190808311611e17575050505050815250509050919050565b60008082526020820152919050565b816103c85760405163100960cb60e01b81526004810182905260240160405180910390fd5b611e766121e7565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015281840180515160608086019190915281518301516080808701919091528251516101009081015160a08801528351516101209081015160c0808a01919091528551519094015160e0808a019190915285515190930151918801919091528351518601519087015282515190910151151561014086015281515101516101608501528051518201516101808501525151516101a084015260036000554360015551611f4891839101612a74565b60405160208183030381529060405260029080519060200190611f6c929190612267565b505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b604051806040016040528060008152602001611fc06122da565b905290565b6040805160e08101825260008082526020808301829052835180820185528281528385015283518082018552828152606084015283518082018552828152608084015283518085019094528184528301529060a08201908152600060209091015290565b604051806040016040528060008152602001611fc06122ed565b6040805160608101825260008082526020820152908101611fc06122ed565b6040518061022001604052806120766122ed565b81526020016120836122ed565b815260200161209e6040518060200160405280600081525090565b81526020016120ab61230b565b81526020016120c66040518060200160405280600081525090565b815260006020820181905260408201526060016120e16122ed565b81526020016120ee61230b565b81526020016121096040518060200160405280600081525090565b815260200161211661230b565b8152602001612138604051806040016040528060008152602001600081525090565b815260200161214561230b565b81526020016121526122ed565b815260200161215f6122ed565b815260200161216c6122ed565b8152602001611fc061230b565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611fc0612360565b82600381019282156121d7579160200282015b828111156121d75782518255916020019190600101906121bc565b506121e3929150612387565b5090565b604051806101c0016040528060006001600160a01b03168152602001600081526020016000815260200161221961230b565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b82805461227390612762565b90600052602060002090601f01602090048101928261229557600085556121d7565b82601f106122ae57805160ff19168380011785556121d7565b828001600101855582156121d757918201828111156121d75782518255916020019190600101906121bc565b6040518060200160405280611fc0611fc5565b60405180606001604052806003906020820280368337509192915050565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b604051806060016040528061237361230b565b815260200160008152602001600081525090565b5b808211156121e35760008155600101612388565b6000602082840312156123ae57600080fd5b5035919050565b600061012082840312156123c857600080fd5b50919050565b600080604083850312156123e157600080fd5b50508035926020909101359150565b6001600160a01b038116811461240557600080fd5b50565b60006020828403121561241a57600080fd5b8135612425816123f0565b9392505050565b634e487b7160e01b600052602160045260246000fd5b815160a0820190600281106124595761245961242c565b825260208381015115158184015260408085015190840160005b600381101561249057825182529183019190830190600101612473565b5050505092915050565b82815260006020604081840152835180604085015260005b818110156124ce578581018301518582016060015282016124b2565b818111156124e0576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff8111828210171561252857634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561252857634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561252857634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561252857634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561252857634e487b7160e01b600052604160045260246000fd5b801515811461240557600080fd5b8035610560816125f4565b60006020828403121561261f57600080fd5b6040516020810181811067ffffffffffffffff8211171561265057634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b60006040828403121561266f57600080fd5b6126776124f7565b9050813581526020820135602082015292915050565b60008183036101208112156126a157600080fd5b6126a96124f7565b8335815261010080601f19840112156126c157600080fd5b6126c961252e565b92506126d361255f565b6020860135600681106126e557600080fd5b81526126f360408701612602565b6020820152612705876060880161260d565b6040820152612717876080880161260d565b60608201526127298760a0880161260d565b608082015261273b8760c0880161265d565b60a082015261274b828701612602565b60c082015283525060208101919091529392505050565b600181811c9082168061277657607f821691505b602082108114156123c857634e487b7160e01b600052602260045260246000fd5b8051610560816123f0565b8051610560816125f4565b600061014082840312156127c057600080fd5b6127c8612590565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015261280c60c083016127a2565b60c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b60006102e0828403121561284c57600080fd5b6128546125c2565b61285d83612797565b8152602083015160208201526040830151604082015261288084606085016127ad565b60608201526101a08084015160808301526101c084015160a08301526101e084015160c083015261020084015160e08301526102208401516101008301526102408401516101208301526128d761026085016127a2565b6101408301526102808401516101608301526102a08401516101808301526102c0909301519281019290925250919050565b6001600160a01b03831681528151602080830191909152820151518051610140830191906006811061293d5761293d61242c565b80604085015250602081015115156060840152604081015151608084015260608101515160a0840152608081015161297860c0850182519052565b5060a0810151805160e08501526020015161010084015260c0015115156101209092019190915292915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156129cd576129cd6129a5565b500390565b60008160001904831182151516156129ec576129ec6129a5565b500290565b60008219821115612a0457612a046129a5565b500190565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c0810151612a5260c084018215159052565b5060e08181015190830152610100808201519083015261012090810151910152565b81516001600160a01b031681526102e0810160208301516020830152604083015160408301526060830151612aac6060840182612a09565b5060808301516101a0818185015260a08501516101c085015260c08501516101e085015260e08501516102008501526101008501516102208501526101208501516102408501526101408501519150612b0a61026085018315159052565b6101608501516102808501526101808501516102a0850152808501516102c085015250509291505056fea2646970667358221220ab40de5d7509f22e365caed241119913cfcb57b167ff2a1dc61a02dcae0a540464736f6c634300080c0033`,
  BytecodeLen: 12972,
  Which: `oD`,
  version: 7,
  views: {
    UserView: {
      actualPrizePool: `UserView_actualPrizePool`,
      currProbArrSize: `UserView_currProbArrSize`,
      deadlineSecs: `UserView_deadlineSecs`,
      deploymentSecs: `UserView_deploymentSecs`,
      getUserDeposit: `UserView_getUserDeposit`,
      maxBankASAbal: `UserView_maxBankASAbal`,
      numDepositors: `UserView_numDepositors`,
      numDeposits: `UserView_numDeposits`,
      requestReclaim: `UserView_requestReclaim`,
      supplyAmtToDefi: `UserView_supplyAmtToDefi`,
      totalDeposit: `UserView_totalDeposit`,
      totalWithdrawal: `UserView_totalWithdrawal`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:231:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:62:31:after expr stmt semicolon',
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
