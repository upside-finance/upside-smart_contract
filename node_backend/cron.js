import { loadStdlib } from "@reach-sh/stdlib";
import dotenv from "dotenv";
import * as backend from "../reach_sc/build/index.main.mjs";

const script = async () => {
  const reach = loadStdlib("ALGO");
  reach.setProviderByEnv({
    ALGO_TOKEN:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ALGO_SERVER: "http://localhost",
    ALGO_PORT: 4001,
    ALGO_INDEXER_TOKEN:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ALGO_INDEXER_SERVER: "http://localhost",
    ALGO_INDEXER_PORT: 8980,
  });

  const backendAcc = await reach.newAccountFromMnemonic(process.env.mnemonic);

  const ctc = backendAcc.contract(backend, process.env.appID);
};

dotenv.config();
script();
