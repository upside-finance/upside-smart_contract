import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

(async () => {
  const depositor = await stdlib.newTestAccount(stdlib.parseCurrency(10000000));
  const receiver = await stdlib.newTestAccount(stdlib.parseCurrency(200));

  const ctcDep = depositor.contract(backend);
  const ctcRec = receiver.contract(backend, ctcDep.getInfo());
  ctcDep.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  });

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async (acc) => fmt(await stdlib.balanceOf(acc));
  const printBalance = async (acc) => {
    const bal = await getBalance(acc);
    console.log(`${acc} balance is ${bal}`);
  };

  await printBalance(depositor);
  await printBalance(receiver);

  await Promise.all([
    ctcDep.p.depositor({
      deposit: stdlib.parseCurrency(0.5),
      payMsg: (amt) => console.log(`Moved ${amt} ALGO`),
    }),
    ctcRec.p.receiver({}),
  ]);

  await printBalance(depositor);
  await printBalance(receiver);
})();
