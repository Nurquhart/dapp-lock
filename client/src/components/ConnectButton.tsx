import { requestAccount } from "@/utils/contractUtils";
import React, { Dispatch, SetStateAction } from "react";

const ConnectWalletButton = (params: {
  setAccount: Dispatch<SetStateAction<any>>;
}) => {
  const { setAccount } = params;
  const connectWallet = async () => {
    try {
      const account = await requestAccount();
      setAccount(account);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return <button onClick={connectWallet}>Connect Web3 Wallet</button>;
};

export default ConnectWalletButton;
