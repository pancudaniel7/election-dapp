import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Election", (m) => {
  const voting = m.contract("Voting");
  return { voting };
});
