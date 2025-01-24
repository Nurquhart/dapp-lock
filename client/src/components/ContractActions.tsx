import { depositFund, withdrawFund } from "@/utils/contractUtils";
import React, { useState } from "react";

const ContractActions = () => {
  const [depositValue, setDepositValue] = useState("");

  const handleDeposit = async () => {
    try {
      await depositFund(depositValue);
    } catch (error) {
      //   toast.error(error?.reason);
    }
    setDepositValue("");
  };

  const handleWithdraw = async () => {
    try {
      await withdrawFund();
    } catch (error) {
      //   toast.error(error?.reason);
    }
  };

  return (
    <div>
      <h2>Contract Actions</h2>
      <div>
        <input
          type="text"
          value={depositValue}
          onChange={(e) => setDepositValue(e.target.value)}
          placeholder="Amount in ETH"
        />
        <button onClick={handleDeposit}>Deposit Funds</button>
      </div>
      <br />
      <div>
        <button onClick={handleWithdraw}>Withdraw Funds</button>
      </div>
    </div>
  );
};

export default ContractActions;
