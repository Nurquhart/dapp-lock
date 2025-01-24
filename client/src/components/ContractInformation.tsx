import { getContractBalanceInETH } from "@/utils/contractUtils";
import React, { useEffect, useState } from "react";

const ContractInfo = (params: { account: any }) => {
  const { account } = params;
  const [balance, setBalance] = useState<string>();

  useEffect(() => {
    const fetchBalance = async () => {
      const balanceInETH = await getContractBalanceInETH();
      setBalance(balanceInETH);
    };
    fetchBalance();
  }, []);

  return (
    <div>
      <h2>Contract Balance: {balance} ETH</h2>
      <p>Connected Account: {account}</p>
    </div>
  );
};

export default ContractInfo;
