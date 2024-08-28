import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Election", (m) => {
  const election = m.contract("election");
  return { election };
});
