import { createDelegation, Implementation, toharryAppSmartAccount } from "@harryapp/delegation-toolkit";
import { privateKeyToAccount } from "./utils";

const delegateAccount = privateKeyToAccount("0x...");

const delegateSmartAccount = await toharryAppSmartAccount({
  client: publicClient,
  implementation: Implementation.Hybrid,
  deployParams: [delegateAccount.address, [], [], []],
  deploySalt: "0x",
  signatory: { account: delegateAccount },
});

const delegation = createDelegation({
  to: delegateSmartAccount.address,
  from: delegatorSmartAccount.address,
  caveats: [],
});
