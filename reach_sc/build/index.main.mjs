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
        currProbArrSize: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v625;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        deadlineSecs: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v598;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        deploymentSecs: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v594;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        maxBankASAbal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v628;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        numDepositors: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v623;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        numDeposits: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v624;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        requestReclaim: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v626;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        supplyAmtToDefi: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v627;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        totalDeposit: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v621;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        totalWithdrawal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = svs;
              return (await ((async () => {
                
                
                return v622;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1]
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
    UserAPI_claimReward0_70: ctc4,
    UserAPI_clearSupplyAmtToDefi0_70: ctc4,
    UserAPI_deposit0_70: ctc5,
    UserAPI_setBankASAbal0_70: ctc5,
    UserAPI_transferFunds0_70: ctc6,
    UserAPI_withdraw0_70: ctc4
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v588 = stdlib.protect(ctc1, interact.relativeDeadlineSecs, 'for PoolCreator\'s interact field relativeDeadlineSecs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v588],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v592], secs: v594, time: v593, didSend: v27, from: v591 } = txn1;
      
      ;
      
      const v598 = stdlib.add(v594, v592);
      const v599 = {
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
      const v600 = v599;
      const v601 = v593;
      const v604 = stdlib.checkedBigNumberify('./index.rsh:35:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v621 = v600.totalDeposit;
        const v622 = v600.totalWithdrawal;
        const v623 = v600.numDepositors;
        const v624 = v600.numDeposits;
        const v625 = v600.currProbArrSize;
        const v626 = v600.requestReclaim;
        const v627 = v600.supplyAmtToDefi;
        const v628 = v600.maxBankASAbal;
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
  const {data: [v592], secs: v594, time: v593, didSend: v27, from: v591 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.disconnect(), {
    at: './index.rsh:41:34:application',
    fs: ['at ./index.rsh:41:34:application call to [unknown function] (defined at: ./index.rsh:41:34:function exp)', 'at ./index.rsh:41:34:application call to "liftedInteract" (defined at: ./index.rsh:41:34:application)'],
    msg: 'disconnect',
    who: 'PoolCreator'
    });
  
  const v598 = stdlib.add(v594, v592);
  const v599 = {
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
  let v600 = v599;
  let v601 = v593;
  let v604 = stdlib.checkedBigNumberify('./index.rsh:35:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v621 = v600.totalDeposit;
    const v622 = v600.totalWithdrawal;
    const v623 = v600.numDepositors;
    const v624 = v600.numDeposits;
    const v625 = v600.currProbArrSize;
    const v626 = v600.requestReclaim;
    const v627 = v600.supplyAmtToDefi;
    const v628 = v600.maxBankASAbal;
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn2;
    switch (v732[0]) {
      case 'UserAPI_claimReward0_70': {
        const v735 = v732[1];
        undefined /* setApiDetails */;
        ;
        const v752 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v731), null);
        const v753 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v754 = stdlib.fromSome(v752, v753);
        const v760 = stdlib.sub(v621, v622);
        const v761 = stdlib.gt(v604, v760);
        const v762 = v626 ? false : v761;
        const v763 = v600.randomNum;
        const v764 = v754[stdlib.checkedBigNumberify('./index.rsh:176:44:array ref', stdlib.UInt_max, '0')];
        const v765 = stdlib.ge(v763, v764);
        const v766 = v762 ? v765 : false;
        const v768 = v754[stdlib.checkedBigNumberify('./index.rsh:177:44:array ref', stdlib.UInt_max, '1')];
        const v769 = stdlib.le(v763, v768);
        const v770 = v766 ? v769 : false;
        const v772 = stdlib.le(v734, v598);
        const v773 = v772 ? false : true;
        const v774 = v770 ? v773 : false;
        stdlib.assert(v774, {
          at: './index.rsh:174:16:application',
          fs: ['at ./index.rsh:172:17:application call to [unknown function] (defined at: ./index.rsh:172:17:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v779 = stdlib.sub(v604, v760);
        const v783 = stdlib.sub(v604, v779);
        ;
        const v784 = null;
        await txn2.getOutput('UserAPI_claimReward', 'v784', ctc0, v784);
        const cv600 = v600;
        const cv601 = v733;
        const cv604 = v783;
        
        v600 = cv600;
        v601 = cv601;
        v604 = cv604;
        
        continue;
        break;
        }
      case 'UserAPI_clearSupplyAmtToDefi0_70': {
        const v948 = v732[1];
        undefined /* setApiDetails */;
        ;
        const v1004 = stdlib.addressEq(v731, v591);
        stdlib.assert(v1004, {
          at: './index.rsh:194:16:application',
          fs: ['at ./index.rsh:193:17:application call to [unknown function] (defined at: ./index.rsh:193:17:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        await txn2.getOutput('UserAPI_clearSupplyAmtToDefi', 'v627', ctc1, v627);
        const v1015 = v600.randomNum;
        const v1020 = {
          currProbArrSize: v625,
          maxBankASAbal: v628,
          numDepositors: v623,
          numDeposits: v624,
          randomNum: v1015,
          requestReclaim: v626,
          supplyAmtToDefi: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          totalDeposit: v621,
          totalWithdrawal: v622
          };
        const cv600 = v1020;
        const cv601 = v733;
        const cv604 = v604;
        
        v600 = cv600;
        v601 = cv601;
        v604 = cv604;
        
        continue;
        break;
        }
      case 'UserAPI_deposit0_70': {
        const v1161 = v732[1];
        undefined /* setApiDetails */;
        const v1168 = v1161[stdlib.checkedBigNumberify('./index.rsh:75:9:spread', stdlib.UInt_max, '0')];
        const v1176 = stdlib.add(v604, v1168);
        ;
        const v1237 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v731), null);
        let v1238;
        switch (v1237[0]) {
          case 'None': {
            const v1239 = v1237[1];
            v1238 = true;
            
            break;
            }
          case 'Some': {
            const v1240 = v1237[1];
            v1238 = false;
            
            break;
            }
          }
        const v1242 = stdlib.le(v734, v598);
        const v1243 = v1238 ? v1242 : false;
        stdlib.assert(v1243, {
          at: './index.rsh:82:16:application',
          fs: ['at ./index.rsh:81:22:application call to [unknown function] (defined at: ./index.rsh:81:22:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1244 = null;
        await txn2.getOutput('UserAPI_deposit', 'v1244', ctc0, v1244);
        const v1253 = stdlib.sub(v598, v734);
        const v1254 = stdlib.mul(v1168, v1253);
        const v1255 = stdlib.add(v625, v1254);
        const v1256 = stdlib.sub(v1255, stdlib.checkedBigNumberify('./index.rsh:88:11:decimal', stdlib.UInt_max, '1'));
        const v1258 = [v625, v1256, v1168];
        await stdlib.mapSet(map0, v731, v1258);
        const v1262 = stdlib.sub(v1176, v1168);
        ;
        const v1267 = v600.randomNum;
        const v1273 = stdlib.add(v621, v1168);
        const v1275 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:99:48:decimal', stdlib.UInt_max, '1'));
        const v1277 = stdlib.add(v624, stdlib.checkedBigNumberify('./index.rsh:100:44:decimal', stdlib.UInt_max, '1'));
        const v1279 = stdlib.add(v627, v1168);
        const v1280 = {
          currProbArrSize: v1256,
          maxBankASAbal: v628,
          numDepositors: v1275,
          numDeposits: v1277,
          randomNum: v1267,
          requestReclaim: v626,
          supplyAmtToDefi: v1279,
          totalDeposit: v1273,
          totalWithdrawal: v622
          };
        const cv600 = v1280;
        const cv601 = v733;
        const cv604 = v1262;
        
        v600 = cv600;
        v601 = cv601;
        v604 = cv604;
        
        continue;
        break;
        }
      case 'UserAPI_setBankASAbal0_70': {
        const v1374 = v732[1];
        undefined /* setApiDetails */;
        ;
        const v1496 = v1374[stdlib.checkedBigNumberify('./index.rsh:199:9:spread', stdlib.UInt_max, '0')];
        const v1497 = stdlib.addressEq(v731, v591);
        stdlib.assert(v1497, {
          at: './index.rsh:205:16:application',
          fs: ['at ./index.rsh:204:32:application call to [unknown function] (defined at: ./index.rsh:204:32:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1498 = null;
        await txn2.getOutput('UserAPI_setBankASAbal', 'v1498', ctc0, v1498);
        const v1509 = v600.randomNum;
        const v1514 = {
          currProbArrSize: v625,
          maxBankASAbal: v1496,
          numDepositors: v623,
          numDeposits: v624,
          randomNum: v1509,
          requestReclaim: v626,
          supplyAmtToDefi: v627,
          totalDeposit: v621,
          totalWithdrawal: v622
          };
        const cv600 = v1514;
        const cv601 = v733;
        const cv604 = v604;
        
        v600 = cv600;
        v601 = cv601;
        v604 = cv604;
        
        continue;
        break;
        }
      case 'UserAPI_transferFunds0_70': {
        const v1587 = v732[1];
        undefined /* setApiDetails */;
        const v1599 = v1587[stdlib.checkedBigNumberify('./index.rsh:140:9:spread', stdlib.UInt_max, '1')];
        const v1602 = stdlib.add(v604, v1599);
        ;
        const v1730 = v1587[stdlib.checkedBigNumberify('./index.rsh:140:9:spread', stdlib.UInt_max, '0')];
        const v1732 = stdlib.addressEq(v731, v591);
        const v1734 = v1732 ? v626 : false;
        const v1736 = stdlib.le(v734, v598);
        const v1737 = v1736 ? false : true;
        const v1738 = v1734 ? v1737 : false;
        stdlib.assert(v1738, {
          at: './index.rsh:148:16:application',
          fs: ['at ./index.rsh:147:35:application call to [unknown function] (defined at: ./index.rsh:147:35:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1739 = null;
        await txn2.getOutput('UserAPI_transferFunds', 'v1739', ctc0, v1739);
        const v1756 = {
          currProbArrSize: v625,
          maxBankASAbal: v628,
          numDepositors: v623,
          numDeposits: v624,
          randomNum: v1730,
          requestReclaim: false,
          supplyAmtToDefi: v627,
          totalDeposit: v621,
          totalWithdrawal: v622
          };
        const cv600 = v1756;
        const cv601 = v733;
        const cv604 = v1602;
        
        v600 = cv600;
        v601 = cv601;
        v604 = cv604;
        
        continue;
        break;
        }
      case 'UserAPI_withdraw0_70': {
        const v1800 = v732[1];
        undefined /* setApiDetails */;
        ;
        const v1972 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v731), null);
        const v1973 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v1974 = stdlib.fromSome(v1972, v1973);
        const v1975 = v1974[stdlib.checkedBigNumberify('./index.rsh:120:43:array ref', stdlib.UInt_max, '2')];
        const v1976 = stdlib.gt(v1975, stdlib.checkedBigNumberify('./index.rsh:121:31:decimal', stdlib.UInt_max, '0'));
        const v1978 = v626 ? false : true;
        const v1979 = v1976 ? v1978 : false;
        const v1981 = stdlib.ge(v604, v1975);
        const v1982 = v1979 ? v1981 : false;
        const v1984 = stdlib.le(v734, v598);
        const v1985 = v1984 ? false : true;
        const v1986 = v1982 ? v1985 : false;
        stdlib.assert(v1986, {
          at: './index.rsh:121:16:application',
          fs: ['at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
          msg: null,
          who: 'PoolCreator'
          });
        const v1987 = null;
        await txn2.getOutput('UserAPI_withdraw', 'v1987', ctc0, v1987);
        const v1993 = v1974[stdlib.checkedBigNumberify('./index.rsh:128:25:array ref', stdlib.UInt_max, '0')];
        const v1994 = v1974[stdlib.checkedBigNumberify('./index.rsh:129:25:array ref', stdlib.UInt_max, '1')];
        const v1995 = [v1993, v1994, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, v731, v1995);
        const v1999 = stdlib.sub(v604, v1975);
        ;
        const v2004 = v600.randomNum;
        const v2010 = stdlib.add(v622, v1975);
        const v2011 = {
          currProbArrSize: v625,
          maxBankASAbal: v628,
          numDepositors: v623,
          numDeposits: v624,
          randomNum: v2004,
          requestReclaim: v626,
          supplyAmtToDefi: v627,
          totalDeposit: v621,
          totalWithdrawal: v2010
          };
        const cv600 = v2011;
        const cv601 = v733;
        const cv604 = v1999;
        
        v600 = cv600;
        v601 = cv601;
        v604 = cv604;
        
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
    UserAPI_claimReward0_70: ctc7,
    UserAPI_clearSupplyAmtToDefi0_70: ctc7,
    UserAPI_deposit0_70: ctc8,
    UserAPI_setBankASAbal0_70: ctc8,
    UserAPI_transferFunds0_70: ctc9,
    UserAPI_withdraw0_70: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1]);
  const v677 = ctc.selfAddress();
  const v679 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_claimReward0_70" (defined at: ./index.rsh:156:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_claimReward'
    });
  const v682 = v626 ? false : true;
  stdlib.assert(v682, {
    at: './index.rsh:159:15:application',
    fs: ['at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_claimReward0_70" (defined at: ./index.rsh:156:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'Winner not selected yet',
    who: 'UserAPI_claimReward'
    });
  const v683 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v677), null);
  const v684 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v685 = stdlib.fromSome(v683, v684);
  const v686 = v600.randomNum;
  const v687 = v685[stdlib.checkedBigNumberify('./index.rsh:162:44:array ref', stdlib.UInt_max, '0')];
  const v688 = stdlib.ge(v686, v687);
  const v690 = v685[stdlib.checkedBigNumberify('./index.rsh:163:46:array ref', stdlib.UInt_max, '1')];
  const v691 = stdlib.le(v686, v690);
  const v692 = v688 ? v691 : false;
  stdlib.assert(v692, {
    at: './index.rsh:161:15:application',
    fs: ['at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_claimReward0_70" (defined at: ./index.rsh:156:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'You did not win the lottery',
    who: 'UserAPI_claimReward'
    });
  const v696 = stdlib.sub(v621, v622);
  const v697 = stdlib.gt(v604, v696);
  stdlib.assert(v697, {
    at: './index.rsh:166:15:application',
    fs: ['at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_claimReward0_70" (defined at: ./index.rsh:156:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'Contract does not have enough funds to dispense',
    who: 'UserAPI_claimReward'
    });
  const v700 = ['UserAPI_claimReward0_70', v679];
  
  const txn1 = await (ctc.sendrecv({
    args: [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628, v700],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:171:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
      
      switch (v732[0]) {
        case 'UserAPI_claimReward0_70': {
          const v735 = v732[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_claimReward"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v731), null);
          const v760 = stdlib.sub(v621, v622);
          const v779 = stdlib.sub(v604, v760);
          const v783 = stdlib.sub(v604, v779);
          sim_r.txns.push({
            kind: 'from',
            to: v731,
            tok: undefined /* Nothing */
            });
          const v784 = null;
          const v785 = await txn1.getOutput('UserAPI_claimReward', 'v784', ctc0, v784);
          
          const v2822 = v600;
          const v2824 = v783;
          const v2825 = v600.totalDeposit;
          const v2826 = v600.totalWithdrawal;
          const v2827 = v600.numDepositors;
          const v2828 = v600.numDeposits;
          const v2829 = v600.currProbArrSize;
          const v2830 = v600.requestReclaim;
          const v2831 = v600.supplyAmtToDefi;
          const v2832 = v600.maxBankASAbal;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_70': {
          const v948 = v732[1];
          
          break;
          }
        case 'UserAPI_deposit0_70': {
          const v1161 = v732[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_70': {
          const v1374 = v732[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_70': {
          const v1587 = v732[1];
          
          break;
          }
        case 'UserAPI_withdraw0_70': {
          const v1800 = v732[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
  switch (v732[0]) {
    case 'UserAPI_claimReward0_70': {
      const v735 = v732[1];
      undefined /* setApiDetails */;
      ;
      const v752 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v731), null);
      const v753 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v754 = stdlib.fromSome(v752, v753);
      const v760 = stdlib.sub(v621, v622);
      const v761 = stdlib.gt(v604, v760);
      const v762 = v626 ? false : v761;
      const v763 = v600.randomNum;
      const v764 = v754[stdlib.checkedBigNumberify('./index.rsh:176:44:array ref', stdlib.UInt_max, '0')];
      const v765 = stdlib.ge(v763, v764);
      const v766 = v762 ? v765 : false;
      const v768 = v754[stdlib.checkedBigNumberify('./index.rsh:177:44:array ref', stdlib.UInt_max, '1')];
      const v769 = stdlib.le(v763, v768);
      const v770 = v766 ? v769 : false;
      const v772 = stdlib.le(v734, v598);
      const v773 = v772 ? false : true;
      const v774 = v770 ? v773 : false;
      stdlib.assert(v774, {
        at: './index.rsh:174:16:application',
        fs: ['at ./index.rsh:172:17:application call to [unknown function] (defined at: ./index.rsh:172:17:function exp)'],
        msg: null,
        who: 'UserAPI_claimReward'
        });
      const v779 = stdlib.sub(v604, v760);
      const v783 = stdlib.sub(v604, v779);
      ;
      const v784 = null;
      const v785 = await txn1.getOutput('UserAPI_claimReward', 'v784', ctc0, v784);
      if (v343) {
        stdlib.protect(ctc0, await interact.out(v735, v785), {
          at: './index.rsh:157:7:application',
          fs: ['at ./index.rsh:157:7:application call to [unknown function] (defined at: ./index.rsh:157:7:function exp)', 'at ./index.rsh:184:16:application call to "returnF" (defined at: ./index.rsh:172:17:function exp)', 'at ./index.rsh:172:17:application call to [unknown function] (defined at: ./index.rsh:172:17:function exp)'],
          msg: 'out',
          who: 'UserAPI_claimReward'
          });
        }
      else {
        }
      
      const v2822 = v600;
      const v2824 = v783;
      const v2825 = v600.totalDeposit;
      const v2826 = v600.totalWithdrawal;
      const v2827 = v600.numDepositors;
      const v2828 = v600.numDeposits;
      const v2829 = v600.currProbArrSize;
      const v2830 = v600.requestReclaim;
      const v2831 = v600.supplyAmtToDefi;
      const v2832 = v600.maxBankASAbal;
      return;
      
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_70': {
      const v948 = v732[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_70': {
      const v1161 = v732[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_70': {
      const v1374 = v732[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_70': {
      const v1587 = v732[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_70': {
      const v1800 = v732[1];
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
    UserAPI_claimReward0_70: ctc7,
    UserAPI_clearSupplyAmtToDefi0_70: ctc7,
    UserAPI_deposit0_70: ctc8,
    UserAPI_setBankASAbal0_70: ctc8,
    UserAPI_transferFunds0_70: ctc9,
    UserAPI_withdraw0_70: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1]);
  const v702 = ctc.selfAddress();
  const v704 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:191:10:application call to [unknown function] (defined at: ./index.rsh:191:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_clearSupplyAmtToDefi0_70" (defined at: ./index.rsh:189:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_clearSupplyAmtToDefi'
    });
  const v705 = stdlib.addressEq(v702, v591);
  stdlib.assert(v705, {
    at: './index.rsh:191:19:application',
    fs: ['at ./index.rsh:191:10:application call to [unknown function] (defined at: ./index.rsh:191:10:function exp)', 'at ./index.rsh:191:10:application call to [unknown function] (defined at: ./index.rsh:191:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_clearSupplyAmtToDefi0_70" (defined at: ./index.rsh:189:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'You are not the lottery creator',
    who: 'UserAPI_clearSupplyAmtToDefi'
    });
  const v708 = ['UserAPI_clearSupplyAmtToDefi0_70', v704];
  
  const txn1 = await (ctc.sendrecv({
    args: [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628, v708],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:192:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
      
      switch (v732[0]) {
        case 'UserAPI_claimReward0_70': {
          const v735 = v732[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_70': {
          const v948 = v732[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_clearSupplyAmtToDefi"
            });
          ;
          const v1006 = await txn1.getOutput('UserAPI_clearSupplyAmtToDefi', 'v627', ctc1, v627);
          
          const v1015 = v600.randomNum;
          const v1020 = {
            currProbArrSize: v625,
            maxBankASAbal: v628,
            numDepositors: v623,
            numDeposits: v624,
            randomNum: v1015,
            requestReclaim: v626,
            supplyAmtToDefi: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            totalDeposit: v621,
            totalWithdrawal: v622
            };
          const v2955 = v1020;
          const v2957 = v604;
          const v2958 = v1020.totalDeposit;
          const v2959 = v1020.totalWithdrawal;
          const v2960 = v1020.numDepositors;
          const v2961 = v1020.numDeposits;
          const v2962 = v1020.currProbArrSize;
          const v2963 = v1020.requestReclaim;
          const v2964 = v1020.supplyAmtToDefi;
          const v2965 = v1020.maxBankASAbal;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_deposit0_70': {
          const v1161 = v732[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_70': {
          const v1374 = v732[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_70': {
          const v1587 = v732[1];
          
          break;
          }
        case 'UserAPI_withdraw0_70': {
          const v1800 = v732[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
  switch (v732[0]) {
    case 'UserAPI_claimReward0_70': {
      const v735 = v732[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_70': {
      const v948 = v732[1];
      undefined /* setApiDetails */;
      ;
      const v1004 = stdlib.addressEq(v731, v591);
      stdlib.assert(v1004, {
        at: './index.rsh:194:16:application',
        fs: ['at ./index.rsh:193:17:application call to [unknown function] (defined at: ./index.rsh:193:17:function exp)'],
        msg: null,
        who: 'UserAPI_clearSupplyAmtToDefi'
        });
      const v1006 = await txn1.getOutput('UserAPI_clearSupplyAmtToDefi', 'v627', ctc1, v627);
      if (v343) {
        stdlib.protect(ctc0, await interact.out(v948, v1006), {
          at: './index.rsh:190:7:application',
          fs: ['at ./index.rsh:190:7:application call to [unknown function] (defined at: ./index.rsh:190:7:function exp)', 'at ./index.rsh:195:16:application call to "returnF" (defined at: ./index.rsh:193:17:function exp)', 'at ./index.rsh:193:17:application call to [unknown function] (defined at: ./index.rsh:193:17:function exp)'],
          msg: 'out',
          who: 'UserAPI_clearSupplyAmtToDefi'
          });
        }
      else {
        }
      
      const v1015 = v600.randomNum;
      const v1020 = {
        currProbArrSize: v625,
        maxBankASAbal: v628,
        numDepositors: v623,
        numDeposits: v624,
        randomNum: v1015,
        requestReclaim: v626,
        supplyAmtToDefi: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalDeposit: v621,
        totalWithdrawal: v622
        };
      const v2955 = v1020;
      const v2957 = v604;
      const v2958 = v1020.totalDeposit;
      const v2959 = v1020.totalWithdrawal;
      const v2960 = v1020.numDepositors;
      const v2961 = v1020.numDeposits;
      const v2962 = v1020.currProbArrSize;
      const v2963 = v1020.requestReclaim;
      const v2964 = v1020.supplyAmtToDefi;
      const v2965 = v1020.maxBankASAbal;
      return;
      
      break;
      }
    case 'UserAPI_deposit0_70': {
      const v1161 = v732[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_70': {
      const v1374 = v732[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_70': {
      const v1587 = v732[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_70': {
      const v1800 = v732[1];
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
    UserAPI_claimReward0_70: ctc8,
    UserAPI_clearSupplyAmtToDefi0_70: ctc8,
    UserAPI_deposit0_70: ctc7,
    UserAPI_setBankASAbal0_70: ctc7,
    UserAPI_transferFunds0_70: ctc9,
    UserAPI_withdraw0_70: ctc8
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1]);
  const v629 = ctc.selfAddress();
  const v631 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:13:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_deposit0_70" (defined at: ./index.rsh:75:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_deposit'
    });
  const v632 = v631[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v635 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
  let v636;
  switch (v635[0]) {
    case 'None': {
      const v637 = v635[1];
      v636 = true;
      
      break;
      }
    case 'Some': {
      const v638 = v635[1];
      v636 = false;
      
      break;
      }
    }
  stdlib.assert(v636, {
    at: './index.rsh:78:15:application',
    fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:13:function exp)', 'at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:13:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_deposit0_70" (defined at: ./index.rsh:75:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'You cannot deposit more than once',
    who: 'UserAPI_deposit'
    });
  const v642 = ['UserAPI_deposit0_70', v631];
  
  const txn1 = await (ctc.sendrecv({
    args: [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628, v642],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v632, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
      
      switch (v732[0]) {
        case 'UserAPI_claimReward0_70': {
          const v735 = v732[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_70': {
          const v948 = v732[1];
          
          break;
          }
        case 'UserAPI_deposit0_70': {
          const v1161 = v732[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_deposit"
            });
          const v1168 = v1161[stdlib.checkedBigNumberify('./index.rsh:75:9:spread', stdlib.UInt_max, '0')];
          const v1176 = stdlib.add(v604, v1168);
          sim_r.txns.push({
            amt: v1168,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v731), null);
          const v1244 = null;
          const v1245 = await txn1.getOutput('UserAPI_deposit', 'v1244', ctc0, v1244);
          
          const v1253 = stdlib.sub(v598, v734);
          const v1254 = stdlib.mul(v1168, v1253);
          const v1255 = stdlib.add(v625, v1254);
          const v1256 = stdlib.sub(v1255, stdlib.checkedBigNumberify('./index.rsh:88:11:decimal', stdlib.UInt_max, '1'));
          const v1258 = [v625, v1256, v1168];
          await stdlib.simMapSet(sim_r, 0, v731, v1258);
          const v1262 = stdlib.sub(v1176, v1168);
          sim_r.txns.push({
            kind: 'from',
            to: v591,
            tok: undefined /* Nothing */
            });
          const v1267 = v600.randomNum;
          const v1273 = stdlib.add(v621, v1168);
          const v1275 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:99:48:decimal', stdlib.UInt_max, '1'));
          const v1277 = stdlib.add(v624, stdlib.checkedBigNumberify('./index.rsh:100:44:decimal', stdlib.UInt_max, '1'));
          const v1279 = stdlib.add(v627, v1168);
          const v1280 = {
            currProbArrSize: v1256,
            maxBankASAbal: v628,
            numDepositors: v1275,
            numDeposits: v1277,
            randomNum: v1267,
            requestReclaim: v626,
            supplyAmtToDefi: v1279,
            totalDeposit: v1273,
            totalWithdrawal: v622
            };
          const v3088 = v1280;
          const v3090 = v1262;
          const v3091 = v1280.totalDeposit;
          const v3092 = v1280.totalWithdrawal;
          const v3093 = v1280.numDepositors;
          const v3094 = v1280.numDeposits;
          const v3095 = v1280.currProbArrSize;
          const v3096 = v1280.requestReclaim;
          const v3097 = v1280.supplyAmtToDefi;
          const v3098 = v1280.maxBankASAbal;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_setBankASAbal0_70': {
          const v1374 = v732[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_70': {
          const v1587 = v732[1];
          
          break;
          }
        case 'UserAPI_withdraw0_70': {
          const v1800 = v732[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
  switch (v732[0]) {
    case 'UserAPI_claimReward0_70': {
      const v735 = v732[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_70': {
      const v948 = v732[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_70': {
      const v1161 = v732[1];
      undefined /* setApiDetails */;
      const v1168 = v1161[stdlib.checkedBigNumberify('./index.rsh:75:9:spread', stdlib.UInt_max, '0')];
      const v1176 = stdlib.add(v604, v1168);
      ;
      const v1237 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v731), null);
      let v1238;
      switch (v1237[0]) {
        case 'None': {
          const v1239 = v1237[1];
          v1238 = true;
          
          break;
          }
        case 'Some': {
          const v1240 = v1237[1];
          v1238 = false;
          
          break;
          }
        }
      const v1242 = stdlib.le(v734, v598);
      const v1243 = v1238 ? v1242 : false;
      stdlib.assert(v1243, {
        at: './index.rsh:82:16:application',
        fs: ['at ./index.rsh:81:22:application call to [unknown function] (defined at: ./index.rsh:81:22:function exp)'],
        msg: null,
        who: 'UserAPI_deposit'
        });
      const v1244 = null;
      const v1245 = await txn1.getOutput('UserAPI_deposit', 'v1244', ctc0, v1244);
      if (v343) {
        stdlib.protect(ctc0, await interact.out(v1161, v1245), {
          at: './index.rsh:76:7:application',
          fs: ['at ./index.rsh:76:7:application call to [unknown function] (defined at: ./index.rsh:76:7:function exp)', 'at ./index.rsh:83:16:application call to "returnF" (defined at: ./index.rsh:81:22:function exp)', 'at ./index.rsh:81:22:application call to [unknown function] (defined at: ./index.rsh:81:22:function exp)'],
          msg: 'out',
          who: 'UserAPI_deposit'
          });
        }
      else {
        }
      
      const v1253 = stdlib.sub(v598, v734);
      const v1254 = stdlib.mul(v1168, v1253);
      const v1255 = stdlib.add(v625, v1254);
      const v1256 = stdlib.sub(v1255, stdlib.checkedBigNumberify('./index.rsh:88:11:decimal', stdlib.UInt_max, '1'));
      const v1258 = [v625, v1256, v1168];
      await stdlib.mapSet(map0, v731, v1258);
      const v1262 = stdlib.sub(v1176, v1168);
      ;
      const v1267 = v600.randomNum;
      const v1273 = stdlib.add(v621, v1168);
      const v1275 = stdlib.add(v623, stdlib.checkedBigNumberify('./index.rsh:99:48:decimal', stdlib.UInt_max, '1'));
      const v1277 = stdlib.add(v624, stdlib.checkedBigNumberify('./index.rsh:100:44:decimal', stdlib.UInt_max, '1'));
      const v1279 = stdlib.add(v627, v1168);
      const v1280 = {
        currProbArrSize: v1256,
        maxBankASAbal: v628,
        numDepositors: v1275,
        numDeposits: v1277,
        randomNum: v1267,
        requestReclaim: v626,
        supplyAmtToDefi: v1279,
        totalDeposit: v1273,
        totalWithdrawal: v622
        };
      const v3088 = v1280;
      const v3090 = v1262;
      const v3091 = v1280.totalDeposit;
      const v3092 = v1280.totalWithdrawal;
      const v3093 = v1280.numDepositors;
      const v3094 = v1280.numDeposits;
      const v3095 = v1280.currProbArrSize;
      const v3096 = v1280.requestReclaim;
      const v3097 = v1280.supplyAmtToDefi;
      const v3098 = v1280.maxBankASAbal;
      return;
      
      break;
      }
    case 'UserAPI_setBankASAbal0_70': {
      const v1374 = v732[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_70': {
      const v1587 = v732[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_70': {
      const v1800 = v732[1];
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
    UserAPI_claimReward0_70: ctc8,
    UserAPI_clearSupplyAmtToDefi0_70: ctc8,
    UserAPI_deposit0_70: ctc7,
    UserAPI_setBankASAbal0_70: ctc7,
    UserAPI_transferFunds0_70: ctc9,
    UserAPI_withdraw0_70: ctc8
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1]);
  const v710 = ctc.selfAddress();
  const v712 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_setBankASAbal0_70" (defined at: ./index.rsh:199:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_setBankASAbal'
    });
  const v715 = stdlib.addressEq(v710, v591);
  stdlib.assert(v715, {
    at: './index.rsh:202:15:application',
    fs: ['at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:201:23:application call to [unknown function] (defined at: ./index.rsh:201:23:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_setBankASAbal0_70" (defined at: ./index.rsh:199:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'You are not the lottery creator',
    who: 'UserAPI_setBankASAbal'
    });
  const v719 = ['UserAPI_setBankASAbal0_70', v712];
  
  const txn1 = await (ctc.sendrecv({
    args: [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628, v719],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:203:26:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
      
      switch (v732[0]) {
        case 'UserAPI_claimReward0_70': {
          const v735 = v732[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_70': {
          const v948 = v732[1];
          
          break;
          }
        case 'UserAPI_deposit0_70': {
          const v1161 = v732[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_70': {
          const v1374 = v732[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_setBankASAbal"
            });
          ;
          const v1496 = v1374[stdlib.checkedBigNumberify('./index.rsh:199:9:spread', stdlib.UInt_max, '0')];
          const v1498 = null;
          const v1499 = await txn1.getOutput('UserAPI_setBankASAbal', 'v1498', ctc0, v1498);
          
          const v1509 = v600.randomNum;
          const v1514 = {
            currProbArrSize: v625,
            maxBankASAbal: v1496,
            numDepositors: v623,
            numDeposits: v624,
            randomNum: v1509,
            requestReclaim: v626,
            supplyAmtToDefi: v627,
            totalDeposit: v621,
            totalWithdrawal: v622
            };
          const v3221 = v1514;
          const v3223 = v604;
          const v3224 = v1514.totalDeposit;
          const v3225 = v1514.totalWithdrawal;
          const v3226 = v1514.numDepositors;
          const v3227 = v1514.numDeposits;
          const v3228 = v1514.currProbArrSize;
          const v3229 = v1514.requestReclaim;
          const v3230 = v1514.supplyAmtToDefi;
          const v3231 = v1514.maxBankASAbal;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_transferFunds0_70': {
          const v1587 = v732[1];
          
          break;
          }
        case 'UserAPI_withdraw0_70': {
          const v1800 = v732[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
  switch (v732[0]) {
    case 'UserAPI_claimReward0_70': {
      const v735 = v732[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_70': {
      const v948 = v732[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_70': {
      const v1161 = v732[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_70': {
      const v1374 = v732[1];
      undefined /* setApiDetails */;
      ;
      const v1496 = v1374[stdlib.checkedBigNumberify('./index.rsh:199:9:spread', stdlib.UInt_max, '0')];
      const v1497 = stdlib.addressEq(v731, v591);
      stdlib.assert(v1497, {
        at: './index.rsh:205:16:application',
        fs: ['at ./index.rsh:204:32:application call to [unknown function] (defined at: ./index.rsh:204:32:function exp)'],
        msg: null,
        who: 'UserAPI_setBankASAbal'
        });
      const v1498 = null;
      const v1499 = await txn1.getOutput('UserAPI_setBankASAbal', 'v1498', ctc0, v1498);
      if (v343) {
        stdlib.protect(ctc0, await interact.out(v1374, v1499), {
          at: './index.rsh:200:7:application',
          fs: ['at ./index.rsh:200:7:application call to [unknown function] (defined at: ./index.rsh:200:7:function exp)', 'at ./index.rsh:206:16:application call to "returnF" (defined at: ./index.rsh:204:32:function exp)', 'at ./index.rsh:204:32:application call to [unknown function] (defined at: ./index.rsh:204:32:function exp)'],
          msg: 'out',
          who: 'UserAPI_setBankASAbal'
          });
        }
      else {
        }
      
      const v1509 = v600.randomNum;
      const v1514 = {
        currProbArrSize: v625,
        maxBankASAbal: v1496,
        numDepositors: v623,
        numDeposits: v624,
        randomNum: v1509,
        requestReclaim: v626,
        supplyAmtToDefi: v627,
        totalDeposit: v621,
        totalWithdrawal: v622
        };
      const v3221 = v1514;
      const v3223 = v604;
      const v3224 = v1514.totalDeposit;
      const v3225 = v1514.totalWithdrawal;
      const v3226 = v1514.numDepositors;
      const v3227 = v1514.numDeposits;
      const v3228 = v1514.currProbArrSize;
      const v3229 = v1514.requestReclaim;
      const v3230 = v1514.supplyAmtToDefi;
      const v3231 = v1514.maxBankASAbal;
      return;
      
      break;
      }
    case 'UserAPI_transferFunds0_70': {
      const v1587 = v732[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_70': {
      const v1800 = v732[1];
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
    UserAPI_claimReward0_70: ctc8,
    UserAPI_clearSupplyAmtToDefi0_70: ctc8,
    UserAPI_deposit0_70: ctc9,
    UserAPI_setBankASAbal0_70: ctc9,
    UserAPI_transferFunds0_70: ctc7,
    UserAPI_withdraw0_70: ctc8
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1]);
  const v661 = ctc.selfAddress();
  const v663 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:142:26:application call to [unknown function] (defined at: ./index.rsh:142:26:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_transferFunds0_70" (defined at: ./index.rsh:140:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_transferFunds'
    });
  const v665 = v663[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v669 = stdlib.addressEq(v661, v591);
  stdlib.assert(v669, {
    at: './index.rsh:143:15:application',
    fs: ['at ./index.rsh:142:26:application call to [unknown function] (defined at: ./index.rsh:142:26:function exp)', 'at ./index.rsh:142:26:application call to [unknown function] (defined at: ./index.rsh:142:26:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_transferFunds0_70" (defined at: ./index.rsh:140:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'You are not the lottery creator',
    who: 'UserAPI_transferFunds'
    });
  stdlib.assert(v626, {
    at: './index.rsh:144:15:application',
    fs: ['at ./index.rsh:142:26:application call to [unknown function] (defined at: ./index.rsh:142:26:function exp)', 'at ./index.rsh:142:26:application call to [unknown function] (defined at: ./index.rsh:142:26:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_transferFunds0_70" (defined at: ./index.rsh:140:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'Funds already transferred',
    who: 'UserAPI_transferFunds'
    });
  const v675 = ['UserAPI_transferFunds0_70', v663];
  
  const txn1 = await (ctc.sendrecv({
    args: [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628, v675],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v665, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
      
      switch (v732[0]) {
        case 'UserAPI_claimReward0_70': {
          const v735 = v732[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_70': {
          const v948 = v732[1];
          
          break;
          }
        case 'UserAPI_deposit0_70': {
          const v1161 = v732[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_70': {
          const v1374 = v732[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_70': {
          const v1587 = v732[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_transferFunds"
            });
          const v1599 = v1587[stdlib.checkedBigNumberify('./index.rsh:140:9:spread', stdlib.UInt_max, '1')];
          const v1602 = stdlib.add(v604, v1599);
          sim_r.txns.push({
            amt: v1599,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1730 = v1587[stdlib.checkedBigNumberify('./index.rsh:140:9:spread', stdlib.UInt_max, '0')];
          const v1739 = null;
          const v1740 = await txn1.getOutput('UserAPI_transferFunds', 'v1739', ctc0, v1739);
          
          const v1756 = {
            currProbArrSize: v625,
            maxBankASAbal: v628,
            numDepositors: v623,
            numDeposits: v624,
            randomNum: v1730,
            requestReclaim: false,
            supplyAmtToDefi: v627,
            totalDeposit: v621,
            totalWithdrawal: v622
            };
          const v3354 = v1756;
          const v3356 = v1602;
          const v3357 = v1756.totalDeposit;
          const v3358 = v1756.totalWithdrawal;
          const v3359 = v1756.numDepositors;
          const v3360 = v1756.numDeposits;
          const v3361 = v1756.currProbArrSize;
          const v3362 = v1756.requestReclaim;
          const v3363 = v1756.supplyAmtToDefi;
          const v3364 = v1756.maxBankASAbal;
          sim_r.isHalt = false;
          
          break;
          }
        case 'UserAPI_withdraw0_70': {
          const v1800 = v732[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
  switch (v732[0]) {
    case 'UserAPI_claimReward0_70': {
      const v735 = v732[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_70': {
      const v948 = v732[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_70': {
      const v1161 = v732[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_70': {
      const v1374 = v732[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_70': {
      const v1587 = v732[1];
      undefined /* setApiDetails */;
      const v1599 = v1587[stdlib.checkedBigNumberify('./index.rsh:140:9:spread', stdlib.UInt_max, '1')];
      const v1602 = stdlib.add(v604, v1599);
      ;
      const v1730 = v1587[stdlib.checkedBigNumberify('./index.rsh:140:9:spread', stdlib.UInt_max, '0')];
      const v1732 = stdlib.addressEq(v731, v591);
      const v1734 = v1732 ? v626 : false;
      const v1736 = stdlib.le(v734, v598);
      const v1737 = v1736 ? false : true;
      const v1738 = v1734 ? v1737 : false;
      stdlib.assert(v1738, {
        at: './index.rsh:148:16:application',
        fs: ['at ./index.rsh:147:35:application call to [unknown function] (defined at: ./index.rsh:147:35:function exp)'],
        msg: null,
        who: 'UserAPI_transferFunds'
        });
      const v1739 = null;
      const v1740 = await txn1.getOutput('UserAPI_transferFunds', 'v1739', ctc0, v1739);
      if (v343) {
        stdlib.protect(ctc0, await interact.out(v1587, v1740), {
          at: './index.rsh:141:7:application',
          fs: ['at ./index.rsh:141:7:application call to [unknown function] (defined at: ./index.rsh:141:7:function exp)', 'at ./index.rsh:151:16:application call to "returnF" (defined at: ./index.rsh:147:35:function exp)', 'at ./index.rsh:147:35:application call to [unknown function] (defined at: ./index.rsh:147:35:function exp)'],
          msg: 'out',
          who: 'UserAPI_transferFunds'
          });
        }
      else {
        }
      
      const v1756 = {
        currProbArrSize: v625,
        maxBankASAbal: v628,
        numDepositors: v623,
        numDeposits: v624,
        randomNum: v1730,
        requestReclaim: false,
        supplyAmtToDefi: v627,
        totalDeposit: v621,
        totalWithdrawal: v622
        };
      const v3354 = v1756;
      const v3356 = v1602;
      const v3357 = v1756.totalDeposit;
      const v3358 = v1756.totalWithdrawal;
      const v3359 = v1756.numDepositors;
      const v3360 = v1756.numDeposits;
      const v3361 = v1756.currProbArrSize;
      const v3362 = v1756.requestReclaim;
      const v3363 = v1756.supplyAmtToDefi;
      const v3364 = v1756.maxBankASAbal;
      return;
      
      break;
      }
    case 'UserAPI_withdraw0_70': {
      const v1800 = v732[1];
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
    UserAPI_claimReward0_70: ctc7,
    UserAPI_clearSupplyAmtToDefi0_70: ctc7,
    UserAPI_deposit0_70: ctc8,
    UserAPI_setBankASAbal0_70: ctc8,
    UserAPI_transferFunds0_70: ctc9,
    UserAPI_withdraw0_70: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1]);
  const v644 = ctc.selfAddress();
  const v646 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:108:10:application call to [unknown function] (defined at: ./index.rsh:108:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_withdraw0_70" (defined at: ./index.rsh:106:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'in',
    who: 'UserAPI_withdraw'
    });
  const v648 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v644), null);
  const v649 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v650 = stdlib.fromSome(v648, v649);
  const v651 = v650[stdlib.checkedBigNumberify('./index.rsh:109:71:array ref', stdlib.UInt_max, '2')];
  const v652 = stdlib.gt(v651, stdlib.checkedBigNumberify('./index.rsh:110:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v652, {
    at: './index.rsh:110:15:application',
    fs: ['at ./index.rsh:108:10:application call to [unknown function] (defined at: ./index.rsh:108:10:function exp)', 'at ./index.rsh:108:10:application call to [unknown function] (defined at: ./index.rsh:108:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_withdraw0_70" (defined at: ./index.rsh:106:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'You have no balance to withdraw',
    who: 'UserAPI_withdraw'
    });
  const v654 = v626 ? false : true;
  stdlib.assert(v654, {
    at: './index.rsh:111:15:application',
    fs: ['at ./index.rsh:108:10:application call to [unknown function] (defined at: ./index.rsh:108:10:function exp)', 'at ./index.rsh:108:10:application call to [unknown function] (defined at: ./index.rsh:108:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_withdraw0_70" (defined at: ./index.rsh:106:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'Funds not reclaimed from DeFi protocol',
    who: 'UserAPI_withdraw'
    });
  const v656 = stdlib.ge(v604, v651);
  stdlib.assert(v656, {
    at: './index.rsh:112:15:application',
    fs: ['at ./index.rsh:108:10:application call to [unknown function] (defined at: ./index.rsh:108:10:function exp)', 'at ./index.rsh:108:10:application call to [unknown function] (defined at: ./index.rsh:108:10:function exp)', 'at ./index.rsh:52:31:application call to "runUserAPI_withdraw0_70" (defined at: ./index.rsh:106:9:function exp)', 'at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)'],
    msg: 'Contract does not have enough funds to dispense',
    who: 'UserAPI_withdraw'
    });
  const v659 = ['UserAPI_withdraw0_70', v646];
  
  const txn1 = await (ctc.sendrecv({
    args: [v591, v594, v598, v600, v604, v621, v622, v623, v624, v625, v626, v627, v628, v659],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:117:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
      
      switch (v732[0]) {
        case 'UserAPI_claimReward0_70': {
          const v735 = v732[1];
          
          break;
          }
        case 'UserAPI_clearSupplyAmtToDefi0_70': {
          const v948 = v732[1];
          
          break;
          }
        case 'UserAPI_deposit0_70': {
          const v1161 = v732[1];
          
          break;
          }
        case 'UserAPI_setBankASAbal0_70': {
          const v1374 = v732[1];
          
          break;
          }
        case 'UserAPI_transferFunds0_70': {
          const v1587 = v732[1];
          
          break;
          }
        case 'UserAPI_withdraw0_70': {
          const v1800 = v732[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_withdraw"
            });
          ;
          const v1972 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v731), null);
          const v1973 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v1974 = stdlib.fromSome(v1972, v1973);
          const v1975 = v1974[stdlib.checkedBigNumberify('./index.rsh:120:43:array ref', stdlib.UInt_max, '2')];
          const v1987 = null;
          const v1988 = await txn1.getOutput('UserAPI_withdraw', 'v1987', ctc0, v1987);
          
          const v1993 = v1974[stdlib.checkedBigNumberify('./index.rsh:128:25:array ref', stdlib.UInt_max, '0')];
          const v1994 = v1974[stdlib.checkedBigNumberify('./index.rsh:129:25:array ref', stdlib.UInt_max, '1')];
          const v1995 = [v1993, v1994, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v731, v1995);
          const v1999 = stdlib.sub(v604, v1975);
          sim_r.txns.push({
            kind: 'from',
            to: v731,
            tok: undefined /* Nothing */
            });
          const v2004 = v600.randomNum;
          const v2010 = stdlib.add(v622, v1975);
          const v2011 = {
            currProbArrSize: v625,
            maxBankASAbal: v628,
            numDepositors: v623,
            numDeposits: v624,
            randomNum: v2004,
            requestReclaim: v626,
            supplyAmtToDefi: v627,
            totalDeposit: v621,
            totalWithdrawal: v2010
            };
          const v3487 = v2011;
          const v3489 = v1999;
          const v3490 = v2011.totalDeposit;
          const v3491 = v2011.totalWithdrawal;
          const v3492 = v2011.numDepositors;
          const v3493 = v2011.numDeposits;
          const v3494 = v2011.currProbArrSize;
          const v3495 = v2011.requestReclaim;
          const v3496 = v2011.supplyAmtToDefi;
          const v3497 = v2011.maxBankASAbal;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v732], secs: v734, time: v733, didSend: v343, from: v731 } = txn1;
  switch (v732[0]) {
    case 'UserAPI_claimReward0_70': {
      const v735 = v732[1];
      return;
      break;
      }
    case 'UserAPI_clearSupplyAmtToDefi0_70': {
      const v948 = v732[1];
      return;
      break;
      }
    case 'UserAPI_deposit0_70': {
      const v1161 = v732[1];
      return;
      break;
      }
    case 'UserAPI_setBankASAbal0_70': {
      const v1374 = v732[1];
      return;
      break;
      }
    case 'UserAPI_transferFunds0_70': {
      const v1587 = v732[1];
      return;
      break;
      }
    case 'UserAPI_withdraw0_70': {
      const v1800 = v732[1];
      undefined /* setApiDetails */;
      ;
      const v1972 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v731), null);
      const v1973 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1974 = stdlib.fromSome(v1972, v1973);
      const v1975 = v1974[stdlib.checkedBigNumberify('./index.rsh:120:43:array ref', stdlib.UInt_max, '2')];
      const v1976 = stdlib.gt(v1975, stdlib.checkedBigNumberify('./index.rsh:121:31:decimal', stdlib.UInt_max, '0'));
      const v1978 = v626 ? false : true;
      const v1979 = v1976 ? v1978 : false;
      const v1981 = stdlib.ge(v604, v1975);
      const v1982 = v1979 ? v1981 : false;
      const v1984 = stdlib.le(v734, v598);
      const v1985 = v1984 ? false : true;
      const v1986 = v1982 ? v1985 : false;
      stdlib.assert(v1986, {
        at: './index.rsh:121:16:application',
        fs: ['at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
        msg: null,
        who: 'UserAPI_withdraw'
        });
      const v1987 = null;
      const v1988 = await txn1.getOutput('UserAPI_withdraw', 'v1987', ctc0, v1987);
      if (v343) {
        stdlib.protect(ctc0, await interact.out(v1800, v1988), {
          at: './index.rsh:107:7:application',
          fs: ['at ./index.rsh:107:7:application call to [unknown function] (defined at: ./index.rsh:107:7:function exp)', 'at ./index.rsh:125:16:application call to "returnF" (defined at: ./index.rsh:118:17:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
          msg: 'out',
          who: 'UserAPI_withdraw'
          });
        }
      else {
        }
      
      const v1993 = v1974[stdlib.checkedBigNumberify('./index.rsh:128:25:array ref', stdlib.UInt_max, '0')];
      const v1994 = v1974[stdlib.checkedBigNumberify('./index.rsh:129:25:array ref', stdlib.UInt_max, '1')];
      const v1995 = [v1993, v1994, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, v731, v1995);
      const v1999 = stdlib.sub(v604, v1975);
      ;
      const v2004 = v600.randomNum;
      const v2010 = stdlib.add(v622, v1975);
      const v2011 = {
        currProbArrSize: v625,
        maxBankASAbal: v628,
        numDepositors: v623,
        numDeposits: v624,
        randomNum: v2004,
        requestReclaim: v626,
        supplyAmtToDefi: v627,
        totalDeposit: v621,
        totalWithdrawal: v2010
        };
      const v3487 = v2011;
      const v3489 = v1999;
      const v3490 = v2011.totalDeposit;
      const v3491 = v2011.totalWithdrawal;
      const v3492 = v2011.numDepositors;
      const v3493 = v2011.numDeposits;
      const v3494 = v2011.currProbArrSize;
      const v3495 = v2011.requestReclaim;
      const v3496 = v2011.supplyAmtToDefi;
      const v3497 = v2011.maxBankASAbal;
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
    impure: [`UserAPI_claimReward()byte[0]`, `UserAPI_clearSupplyAmtToDefi()uint64`, `UserAPI_deposit(uint64)byte[0]`, `UserAPI_setBankASAbal(uint64)byte[0]`, `UserAPI_transferFunds(uint64,uint64)byte[0]`, `UserAPI_withdraw()byte[0]`],
    pure: [`UserView_currProbArrSize()uint64`, `UserView_deadlineSecs()uint64`, `UserView_deploymentSecs()uint64`, `UserView_maxBankASAbal()uint64`, `UserView_numDepositors()uint64`, `UserView_numDeposits()uint64`, `UserView_requestReclaim()byte`, `UserView_supplyAmtToDefi()uint64`, `UserView_totalDeposit()uint64`, `UserView_totalWithdrawal()uint64`],
    sigs: [`UserAPI_claimReward()byte[0]`, `UserAPI_clearSupplyAmtToDefi()uint64`, `UserAPI_deposit(uint64)byte[0]`, `UserAPI_setBankASAbal(uint64)byte[0]`, `UserAPI_transferFunds(uint64,uint64)byte[0]`, `UserAPI_withdraw()byte[0]`, `UserView_currProbArrSize()uint64`, `UserView_deadlineSecs()uint64`, `UserView_deploymentSecs()uint64`, `UserView_maxBankASAbal()uint64`, `UserView_numDepositors()uint64`, `UserView_numDeposits()uint64`, `UserView_requestReclaim()byte`, `UserView_supplyAmtToDefi()uint64`, `UserView_totalDeposit()uint64`, `UserView_totalWithdrawal()uint64`]
    },
  appApproval: `BiAZAAEDCBACBRgZqaWa7Qz5tZ3JDpzpi/QOlK2+uQ/WvuTZDtSr9rQN0raNiw7M4YLzDLbz2eICkb7iqwjx3OGRC6vBp84FutmzhgH8xvWSAoqrlR0gJgMBAAEBACI1ADEYQQbvKmRJIls1ASVbNQIxGSMSQQAKMQAoIQivZkIGvDYaABdJQQHkIjUEIzUGSSEJDEAA4kkhCgxAAG1JIQsMQAAtSSEMDEAAEiEMEkQqNf8oNP9QIQSvUEIByCELEkQqNf+AAQU0/1AhBK9QQgG0SSENDEAAGSENEkQ0ASQSRChkKWRQSTUDV6IINQdCBlshChJENAEkEkQoZClkUEk1A1ehATUHQgZCSSEODEAANUkhDwxAABkhDxJENAEkEkQoZClkUEk1A1eJCDUHQgYbIQ4SRDYaATX/gAEDNP9QJa9QQgE/SSEQDEAAEiEQEkQqNf8pNP9QIQSvUEIBJiEJEkQ0ASQSRChkKWRQSTUDV5EINQdCBdRJIREMQAB5SSESDEAAOUkhEwxAABkhExJENAEkEkQoZClkUEk1A1eqCDUHQgWmIRISRDQBJBJEKGQpZFBJNQNXmQg1B0IFjUkhFAxAABkhFBJENAEkEkQoZClkUEk1A1coCDUHQgVtIRESRDQBJBJEKGQpZFBJNQNXgQg1B0IFVEkhFQxAADVJIRYMQAAZIRYSRDQBJBJEKGQpZFBJNQNXeQg1B0IFLSEVEkQ2GgE1/4ABAjT/UCWvUEIAUUkhFwxAABkhFxJENAEkEkQoZClkUEk1A1cgCDUHQgT4gfvNvBgSRDYaATYaAlA1/4ABBDT/UEIAGDYaAhc1BDYaAzYaARdJIQUMQAN2IQUSRCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSklXACA1/yEYWzX+gShbNf1XMEE1/IFxWzX7gXlbNfqBgQFbNfmBiQFbNfiBkQFbNfeBmQFbNfZXoQEXNfWBogFbNfSBqgFbNfNJNQU18oAEioos3DTyULA08iJVSSQMQAFjSYEEDEABDEkhBgxAAKEhBhJEIQevMQCIBD5JNfBXARg08CJVTUk18SEEW0k18CINNPUUEDT7NPAPEDIHNP0OFBBEgAgAAAAAAAAHw7AqNQcxACgpNPFXAAg08VcICFAlr1BQZrEisgE08LIII7IQMQCyB7M0/zT+NP009hY08xZQNPgWUDT3FlA0/FcgCFA09RZRBwhQNPQWUDT6FlA0+TTwCBZQMgY0+zTwCUICwEg08lcBEDXxNPElWzXwNPCIA6UxADT/EjT1EDIHNP0OFBBEgAgAAAAAAAAGy7AqNQc0/zT+NP009hY08xZQNPgWUDT3FlA08VcACFAoUDT0FlA0+hZQNPkWUDIGNPs08AhCAlxINPJXAQg18TEANP8SRIAIAAAAAAAABdqwKjUHNP80/jT9NPYWNPFQNPgWUDT3FlA0/FcgCFA09RZRBwhQNPQWUDT6FlA0+RZQMgY0+0ICDEkjDEABDUkhBQxAALdINPJXAQg18TTxFzXwNPCIAuUxAIgC0Uk17iJVQAAGIzXvQgAGIjXvQgAANO8yBzT9DhBEgAgAAAAAAAAE3LAqNQc09jTwNP0yBwkLCCMJNe4xACgpNPYWNO4WUDTwFlBQZrEisgE08LIII7IQNP+yB7M0/zT+NP007hY08xZQNPgjCBZQNPcjCBZQNPxXIAhQNPUWUQcIUDT0NPAIFlA0+jTwCBZQNPkWUDIGNPs08Ag08AlCAUhIMQA0/xJEgAgAAAAAAAACczT0FlCwNPQWNQc0/zT+NP009hY08xZQNPgWUDT3FlA0/FcgCFA09RZRBwhQJa9QNPoWUDT5FlAyBjT7QgD5SCEHrzEAiAHZSTXwVwEYNPAiVU018TT6NPkJNfA0/CEYWzXvNPUUNPs08A0QNO808SJbDxA07zTxJVsOEDIHNP0OFBBENPs08Ak17rEisgE07rIII7IQMQCyB7OACAAAAAAAAAMQsCo1BzT/NP40/TT8MgY0+zTuCUIAfSISRIGgjQaIAWsiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAxADIHMgc0/wiAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgYiQgAANf81/jX9Nfw1+zX6NP2BMVs1+TT9gTlbNfg0/SEEWzX3NP0hB1s19jT9Ils19TT9VygBFzX0NP2BKVs18zT9JVs18jT6NPsWUDT8FlA0/VA0/xZQNPkWUDT4FlA09xZQNPYWUDT1FlA09BZRBwhQNPMWUDTyFlAoSwFXAH9nKUsBV38zZ0gkNQEyBjUCQgAcMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEIr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 25,
  stateKeys: 2,
  stateSize: 178,
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
                "name": "v592",
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
                "name": "v592",
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
                    "name": "_UserAPI_claimReward0_70",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_clearSupplyAmtToDefi0_70",
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
                    "name": "_UserAPI_deposit0_70",
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
                    "name": "_UserAPI_setBankASAbal0_70",
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
                    "name": "_UserAPI_transferFunds0_70",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_withdraw0_70",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v732",
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
    "name": "_reach_oe_v1244",
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
    "name": "_reach_oe_v1498",
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
    "name": "_reach_oe_v1739",
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
    "name": "_reach_oe_v1987",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v627",
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
    "name": "_reach_oe_v784",
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
    "inputs": [],
    "name": "UserAPI_clearSupplyAmtToDefi",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
                    "name": "_UserAPI_claimReward0_70",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_clearSupplyAmtToDefi0_70",
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
                    "name": "_UserAPI_deposit0_70",
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
                    "name": "_UserAPI_setBankASAbal0_70",
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
                    "name": "_UserAPI_transferFunds0_70",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UserAPI_withdraw0_70",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v732",
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
  Bytecode: `0x608060405260405162002f2438038062002f248339810160408190526200002691620004ca565b6000805543600355620000386200025c565b604080513381528351602080830191909152840151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008c3415601162000137565b805160009081905281516020018190528151604001819052815160600181905281516080018190528151600160a090910152815160c001819052815160e00181905281516101000152620000df620002be565b805133905280514260209182018190529084015151620000ff916200056c565b8151604090810191909152825160208084018051929092528151439101525160009101526200012e8162000161565b505050620006dd565b816200015d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200016b620002f0565b8151516001600160a01b031681528151602090810151818301528251604090810151818401528184018051516060808601919091528151830151608086015281515160e09081015160a0808801919091528351516101009081015160c0808a0191909152855151870151938901939093528451519093015192870192909252825151516101208701528251519091015115156101408601528151510151610160850152515182015161018084015260036000554360015551620002319183910162000593565b6040516020818303038152906040526002908051906020019062000257929190620003b3565b505050565b6040518060200160405280620002b960405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620002b962000442565b604051806101a0016040528060006001600160a01b0316815260200160008152602001600081526020016200036c60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081525090565b828054620003c190620006a0565b90600052602060002090601f016020900481019282620003e5576000855562000430565b82601f106200040057805160ff191683800117855562000430565b8280016001018555821562000430579182015b828111156200043057825182559160200191906001019062000413565b506200043e929150620004b3565b5090565b60405180606001604052806200049f60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b815260200160008152602001600081525090565b5b808211156200043e5760008155600101620004b4565b6000818303604080821215620004df57600080fd5b80518082016001600160401b0380821183831017156200050f57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200052957600080fd5b8351945060208501915084821081831117156200055657634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600082198211156200058e57634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b031681526102a0810160208301516020830152604083015160408301526060830151620006236060840182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a0810151151560a083015260c081015160c083015260e081015160e08301526101008082015181840152505050565b506080830151610180818185015260a08501516101a085015260c08501516101c085015260e08501516101e085015261010085015161020085015261012085015161022085015261014085015191506200068261024085018315159052565b61016085015161026085015280850151610280850152505092915050565b600181811c90821680620006b557607f821691505b60208210811415620006d757634e487b7160e01b600052602260045260246000fd5b50919050565b61283780620006ed6000396000f3fe6080604052600436106101225760003560e01c80639f0b35a7116100a5578063b30e42751161006c578063b30e42751461028b578063d6e42657146102a0578063e862dc28146102b3578063eb5e5d0a146102bb578063edc9c793146102d0578063ee86704c146102e557005b80639f0b35a714610216578063ab53f2c61461022b578063ac9ab3c11461024e578063acb275b914610261578063ad31e8521461027657005b80636137f38a116100e95780636137f38a146101c75780636cfb3221146101cf57806371fadb90146101e457806383230757146101ec578063974207881461020157005b80630fd59e411461012b5780631e93b0f1146101535780632db837bb146101725780633bc5b7bf1461018557806344b6b609146101b257005b3661012957005b005b61013e61013936600461209e565b6102fa565b60405190151581526020015b60405180910390f35b34801561015f57600080fd5b506003545b60405190815260200161014a565b61013e6101803660046120b7565b610352565b34801561019157600080fd5b506101a56101a03660046120f1565b6103b1565b60405161014a919061212b565b3480156101be57600080fd5b506101646103c8565b61013e61048e565b3480156101db57600080fd5b506101646104d8565b61013e61059b565b3480156101f857600080fd5b50600154610164565b34801561020d57600080fd5b506101646105e8565b34801561022257600080fd5b506101646106ac565b34801561023757600080fd5b5061024061076f565b60405161014a929190612183565b61013e61025c36600461209e565b61080c565b34801561026d57600080fd5b50610164610864565b34801561028257600080fd5b50610164610928565b34801561029757600080fd5b506101646109ec565b6101296102ae3660046121e0565b610aaf565b610164610ad3565b3480156102c757600080fd5b50610164610b23565b3480156102dc57600080fd5b5061013e610be6565b3480156102f157600080fd5b50610164610caa565b6000610304611cb0565b61030c611ce5565b610314611d04565b604080516020808201835287825260808401919091526003835281518082019092528282528301526103468284610d6e565b50506060015192915050565b600061035c611cb0565b610364611ce5565b61036c611d04565b604080518082018252878152602080820188905260a08401919091526004835281518082019092528282528301526103a48284610d6e565b5050608001519392505050565b6103b9611d60565b6103c282611aab565b92915050565b60006003600054141561047f576000600280546103e4906121f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610410906121f9565b801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b505050505080602001905181019061047591906123cf565b60a0015192915050565b61048b6000600f611b96565b90565b6000610498611cb0565b6104a0611ce5565b6104a8611d04565b6000602082810182905290825260408051808301909152828152908301526104d08284610d6e565b505051919050565b60006003600054141561058f576000600280546104f4906121f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610520906121f9565b801561056d5780601f106105425761010080835404028352916020019161056d565b820191906000526020600020905b81548152906001019060200180831161055057829003601f168201915b505050505080602001905181019061058591906123cf565b6040015192915050565b61048b60006008611b96565b60006105a5611cb0565b6105ad611ce5565b6105b5611d04565b600060c082015260058152604080516020808201909252828152908301526105dd8284610d6e565b505060a00151919050565b6000600360005414156106a057600060028054610604906121f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610630906121f9565b801561067d5780601f106106525761010080835404028352916020019161067d565b820191906000526020600020905b81548152906001019060200180831161066057829003601f168201915b505050505080602001905181019061069591906123cf565b610120015192915050565b61048b60006007611b96565b600060036000541415610763576000600280546106c8906121f9565b80601f01602080910402602001604051908101604052809291908181526020018280546106f4906121f9565b80156107415780601f1061071657610100808354040283529160200191610741565b820191906000526020600020905b81548152906001019060200180831161072457829003601f168201915b505050505080602001905181019061075991906123cf565b60c0015192915050565b61048b60006010611b96565b600060606000546002808054610784906121f9565b80601f01602080910402602001604051908101604052809291908181526020018280546107b0906121f9565b80156107fd5780601f106107d2576101008083540402835291602001916107fd565b820191906000526020600020905b8154815290600101906020018083116107e057829003601f168201915b50505050509050915091509091565b6000610816611cb0565b61081e611ce5565b610826611d04565b604080516020808201835287825260608401919091526002835281518082019092528282528301526108588284610d6e565b50506040015192915050565b60006003600054141561091c57600060028054610880906121f9565b80601f01602080910402602001604051908101604052809291908181526020018280546108ac906121f9565b80156108f95780601f106108ce576101008083540402835291602001916108f9565b820191906000526020600020905b8154815290600101906020018083116108dc57829003601f168201915b505050505080602001905181019061091191906123cf565b610160015192915050565b61048b6000600e611b96565b6000600360005414156109e057600060028054610944906121f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610970906121f9565b80156109bd5780601f10610992576101008083540402835291602001916109bd565b820191906000526020600020905b8154815290600101906020018083116109a057829003601f168201915b50505050508060200190518101906109d591906123cf565b610100015192915050565b61048b6000600c611b96565b600060036000541415610aa357600060028054610a08906121f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610a34906121f9565b8015610a815780601f10610a5657610100808354040283529160200191610a81565b820191906000526020600020905b815481529060010190602001808311610a6457829003601f168201915b5050505050806020019051810190610a9991906123cf565b60e0015192915050565b61048b6000600b611b96565b610ab7611cb0565b610acf610ac93684900384018461251e565b82610d6e565b5050565b6000610add611cb0565b610ae5611ce5565b610aed611d04565b600060408201526001818190525060408051602080820190925282815290830152610b188284610d6e565b505060200151919050565b600060036000541415610bda57600060028054610b3f906121f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6b906121f9565b8015610bb85780601f10610b8d57610100808354040283529160200191610bb8565b820191906000526020600020905b815481529060010190602001808311610b9b57829003601f168201915b5050505050806020019051810190610bd091906123cf565b6020015192915050565b61048b60006009611b96565b600060036000541415610c9e57600060028054610c02906121f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2e906121f9565b8015610c7b5780601f10610c5057610100808354040283529160200191610c7b565b820191906000526020600020905b815481529060010190602001808311610c5e57829003601f168201915b5050505050806020019051810190610c9391906123cf565b610140015192915050565b61048b6000600d611b96565b600060036000541415610d6257600060028054610cc6906121f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf2906121f9565b8015610d3f5780601f10610d1457610100808354040283529160200191610d3f565b820191906000526020600020905b815481529060010190602001808311610d2257829003601f168201915b5050505050806020019051810190610d5791906123cf565b610180015192915050565b61048b6000600a611b96565b610d7e600360005414601e611b96565b8151610d99901580610d9257508251600154145b601f611b96565b600080805560028054610dab906121f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd7906121f9565b8015610e245780601f10610df957610100808354040283529160200191610e24565b820191906000526020600020905b815481529060010190602001808311610e0757829003601f168201915b5050505050806020019051810190610e3c91906123cf565b9050610e46611d7f565b7f6eae04cfc42eba9b394f7efd7ece6eace442aedfc4644b6616b765960de1dd593385604051610e779291906125f2565b60405180910390a16000602085015151516005811115610e9957610e99612115565b141561108b57610eab34156012611b96565b805160009081905281516020018190528151604001526001610ecc33611aab565b516001811115610ede57610ede612115565b14610eea578051610ef8565b610ef333611aab565b604001515b602082015260c082015160a0830151610f1191906126a8565b6040820152610140820151610f9b90610f34578160400151836080015111610f37565b60005b610f42576000610f54565b60208201515160608401516080015110155b610f5f576000610f73565b602082810151015160608401516080015111155b610f7e576000610f94565b8260400151421115610f91576001610f94565b60005b6013611b96565b80604001518260800151610faf91906126a8565b60608201819052604051339180156108fc02916000818181858888f19350505050158015610fe1573d6000803e3d6000fd5b50604051600081527f99f40914b59452383c166fcdbc8d343add3ae3ba519450693b76f0936f8831c99060200160405180910390a160008352611022611e89565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101526060808501518284018051919091525143920191909152820151608084015161107391906126a8565b60208201516040015261108581611bbb565b50611aa5565b60016020850151515160058111156110a5576110a5612115565b14156111f1576110b734156014611b96565b81516110cf906001600160a01b031633146015611b96565b7f44b24c98cd8a735d0174b8d2ef9281b0315fcd166d37c5f3b2fedfa70cb9510482610160015160405161110591815260200190565b60405180910390a1610160820151602080850191909152610120830151608080840180519290925261018085015182519093019290925260e080850151825160400152610100808601518351606090810191909152860151840151835190940193909352610140850151825190151560a0918201528251600060c091820152908601518351909201919091528401519051909101526111a2611e89565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526080808501518385018051919091528051439401939093528501519151015261108581611bbb565b600260208501515151600581111561120b5761120b612115565b14156114f3576020840151516060015160a08201819052516112309034146016611b96565b600061123b33611aab565b51600181111561124d5761124d612115565b141561125f57600160c082015261128a565b600161126a33611aab565b51600181111561127c5761127c612115565b141561128a57600060c08201525b6112ad8160c0015161129d5760006112a6565b82604001514211155b6017611b96565b604051600081527fe5a1466259c45be8532c7bc3c82554434d49e27260fa4a3277a8c04a520da39e9060200160405180910390a160006040808501919091528201516001906112fd9042906126a8565b60a08301515161130d91906126bf565b83610120015161131d91906126de565b61132791906126a8565b60e0820190815261012083015161010083018051919091529051815160209081019190915260a083015151825160409081019190915233600090815260049092529020805460ff19166001908117825591516113899291909101906003611eb9565b50815160a0820151516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156113c8573d6000803e3d6000fd5b5060e08082015161012083018051919091526101808401519051602001528201516113f5906001906126de565b61012082015160400152610100820151611411906001906126de565b6101208201805160609081019290925290830151608090810151825190910152610140830151905190151560a0918201528101515161016083015161145691906126de565b61012082015160c0015260a080820151519083015161147591906126de565b6101208201805160e0019190915260c083015190516101000152611497611e89565b825181516001600160a01b0390911690526020808401518251820152604080850151835190910152610120830151818301805191909152514391015260a08201515160808401516114e99082906126de565b61107391906126a8565b600360208501515151600581111561150d5761150d612115565b1415611658576020840151516080015161014082015261152f34156018611b96565b8151611547906001600160a01b031633146019611b96565b604051600081527f174521bfeba2c8858bb289fefac419469303055fd276c2de9403f9db69b68d289060200160405180910390a16000606080850191909152610120830151610160808401805192909252610140808501515183516020015260e0808701518451604001526101008088015185518701529487015160809081015185519091015290860151835190151560a09182015291860151835160c09081019190915291860151835190910152840151905190910152611607611e89565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015261016084015182840180519190915280514393019290925260808501519151015261108581611bbb565b600460208501515151600581111561167257611672612115565b14156117f5576020808501515160a001516101808301819052015161169a903414601a611b96565b81516116e5906001600160a01b031633146116b65760006116bd565b8261014001515b6116c85760006116de565b82604001514211156116db5760016116de565b60005b601b611b96565b604051600081527f26584d8208545bfd606a0e157732e3a7d64ac49a5137264ce8e8fb86c65c54259060200160405180910390a1600060808085018290526101208401516101a084018051919091526101808086015182516020015260e080870151835160400152610100808801518451606001529186015151835190940193909352815160a090810194909452610160860151825160c0908101919091529386015182519093019290925291840151915101526117a1611e89565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101526101a08301518183018051919091525143908201526101808301510151608084015161107391906126de565b600560208501515151600581111561180f5761180f612115565b1415611aa5576118213415601c611b96565b6101c0810180516000908190528151602001819052905160400152600161184733611aab565b51600181111561185957611859612115565b1461186957806101c00151611877565b61187233611aab565b604001515b6101e08201819052604001516118eb906118925760006118a6565b8261014001516118a35760016118a6565b60005b6118b15760006118c3565b6101e082015160400151608084015110155b6118ce5760006118e4565b82604001514211156118e15760016118e4565b60005b601d611b96565b604051600081527f7bfad8fabe0c264e07d80bddcb3df692476022680a5a306da9b5e095257094819060200160405180910390a1600060a084018190526101e08201805151610200840180519190915290516020908101518251820152815160409081018490523384526004909152909120805460ff191660019081178255915161197c9291909101906003611eb9565b506101e08101516040908101519051339180156108fc02916000818181858888f193505050501580156119b3573d6000803e3d6000fd5b50610120820151610220820180519190915261018083015181516020015260e0808401518251604001526101008401518251606090810191909152840151608090810151835190910152610140840151825190151560a091820152610160850151835160c00152840151915101526101e0810151600260200201518260c00151611a3d91906126de565b6102208201516101000152611a50611e89565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015261022084015182840180519190915251439201919091526101e08301510151608084015161107391906126a8565b50505050565b611ab3611d60565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611ae257611ae2612115565b1415611b86576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611b2357611b23612115565b6001811115611b3457611b34612115565b81528154610100900460ff16151560208201526040805160608101808352919092019190600184019060039082845b815481526020019060010190808311611b63575050505050815250509050919050565b600080825260208201525b919050565b81610acf5760405163100960cb60e01b81526004810182905260240160405180910390fd5b611bc3611ef7565b8151516001600160a01b031681528151602090810151818301528251604090810151818401528184018051516060808601919091528151830151608086015281515160e09081015160a0808801919091528351516101009081015160c0808a0191909152855151870151938901939093528451519093015192870192909252825151516101208701528251519091015115156101408601528151510151610160850152515182015161018084015260036000554360015551611c87918391016126f6565b60405160208183030381529060405260029080519060200190611cab929190611f70565b505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b604051806040016040528060008152602001611cff611fe3565b905290565b6040805160e0810182526000808252602080830182905282840182905283518082018552828152606084015283518082018552828152608084015283518085019094528184528301529060a08201908152600060209091015290565b6040805160608101825260008082526020820152908101611cff611ff6565b604051806102400160405280611d93611ff6565b8152602001611da0611ff6565b81526020016000815260200160008152602001611dbb612014565b8152602001611dd66040518060200160405280600081525090565b81526000602082018190526040820152606001611df1611ff6565b8152602001611dfe612014565b8152602001611e196040518060200160405280600081525090565b8152602001611e26612014565b8152602001611e48604051806040016040528060008152602001600081525090565b8152602001611e55612014565b8152602001611e62611ff6565b8152602001611e6f611ff6565b8152602001611e7c611ff6565b8152602001611cff612014565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611cff612062565b8260038101928215611ee7579160200282015b82811115611ee7578251825591602001919060010190611ecc565b50611ef3929150612089565b5090565b604051806101a0016040528060006001600160a01b031681526020016000815260200160008152602001611f29612014565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081525090565b828054611f7c906121f9565b90600052602060002090601f016020900481019282611f9e5760008555611ee7565b82601f10611fb757805160ff1916838001178555611ee7565b82800160010185558215611ee75791820182811115611ee7578251825591602001919060010190611ecc565b6040518060200160405280611cff611d04565b60405180606001604052806003906020820280368337509192915050565b60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b6040518060600160405280612075612014565b815260200160008152602001600081525090565b5b80821115611ef3576000815560010161208a565b6000602082840312156120b057600080fd5b5035919050565b600080604083850312156120ca57600080fd5b50508035926020909101359150565b6001600160a01b03811681146120ee57600080fd5b50565b60006020828403121561210357600080fd5b813561210e816120d9565b9392505050565b634e487b7160e01b600052602160045260246000fd5b815160a08201906002811061214257612142612115565b825260208381015115158184015260408085015190840160005b60038110156121795782518252918301919083019060010161215c565b5050505092915050565b82815260006020604081840152835180604085015260005b818110156121b75785810183015185820160600152820161219b565b818111156121c9576000606083870101525b50601f01601f191692909201606001949350505050565b600061012082840312156121f357600080fd5b50919050565b600181811c9082168061220d57607f821691505b602082108114156121f357634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561226057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516101a0810167ffffffffffffffff8111828210171561226057634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561226057634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561226057634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561226057634e487b7160e01b600052604160045260246000fd5b8051611b91816120d9565b80151581146120ee57600080fd5b8051611b9181612336565b6000610120828403121561236257600080fd5b61236a61222e565b905081518152602082015160208201526040820151604082015260608201516060820152608082015160808201526123a460a08301612344565b60a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b60006102a082840312156123e257600080fd5b6123ea612266565b6123f38361232b565b81526020830151602082015260408301516040820152612416846060850161234f565b60608201526101808084015160808301526101a084015160a08301526101c084015160c08301526101e084015160e083015261020084015161010083015261022084015161012083015261246d6102408501612344565b610140830152610260840151610160830152610280909301519281019290925250919050565b8035611b9181612336565b6000602082840312156124b057600080fd5b6040516020810181811067ffffffffffffffff821117156124e157634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b60006040828403121561250057600080fd5b612508612298565b9050813581526020820135602082015292915050565b600081830361012081121561253257600080fd5b61253a612298565b8335815261010080601f198401121561255257600080fd5b61255a6122c9565b92506125646122fa565b60208601356006811061257657600080fd5b815261258460408701612493565b602082015261259560608701612493565b60408201526125a7876080880161249e565b60608201526125b98760a0880161249e565b60808201526125cb8760c088016124ee565b60a08201526125db828701612493565b60c082015283525060208101919091529392505050565b6001600160a01b03831681528151602080830191909152820151518051610140830191906006811061262657612626612115565b80604085015250602081015115156060840152604081015115156080840152606081015161265760a0850182519052565b506080810151805160c08501525060a0810151805160e085015260208101516101008501525060c00151801515610120840152509392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156126ba576126ba612692565b500390565b60008160001904831182151516156126d9576126d9612692565b500290565b600082198211156126f1576126f1612692565b500190565b81516001600160a01b031681526102a08101602083015160208301526040830151604083015260608301516127856060840182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a0810151151560a083015260c081015160c083015260e081015160e08301526101008082015181840152505050565b506080830151610180818185015260a08501516101a085015260c08501516101c085015260e08501516101e085015261010085015161020085015261012085015161022085015261014085015191506127e361024085018315159052565b6101608501516102608501528085015161028085015250509291505056fea2646970667358221220eb03830e76625bb8f18f699b2bf5bd0fe89b79cc58f55b93aae501d32924e95364736f6c634300080c0033`,
  BytecodeLen: 12068,
  Which: `oD`,
  version: 7,
  views: {
    UserView: {
      currProbArrSize: `UserView_currProbArrSize`,
      deadlineSecs: `UserView_deadlineSecs`,
      deploymentSecs: `UserView_deploymentSecs`,
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
    at: './index.rsh:211:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:31:after expr stmt semicolon',
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
