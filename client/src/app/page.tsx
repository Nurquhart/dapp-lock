"use client"; // This is a client component
import ConnectWalletButton from "@/components/ConnectButton";
import ContractActions from "@/components/ContractActions";
import ContractInfo from "@/components/ContractInformation";
import { requestAccount } from "@/utils/contractUtils";
import { BrowserProvider, Eip1193Provider } from "ethers";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    ethereum: Eip1193Provider & BrowserProvider;
  }
}

export default function Home() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const fetchCurAccount = async () => {
      const account = await requestAccount();
      setAccount(account);
    };
    fetchCurAccount();
  }, []);

  useEffect(() => {
    const handleAccountChanged = (newAccounts: any[]) =>
      setAccount(newAccounts.length > 0 ? newAccounts[0] : null);
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountChanged);
    }
    return () => {
      window.ethereum?.removeListener("accountsChanged", handleAccountChanged);
    };
  });

  return (
    <div className="app">
      {!account ? (
        <ConnectWalletButton setAccount={setAccount} />
      ) : (
        <div className="contract-interactions">
          <ContractInfo account={account} />
          <ContractActions />
        </div>
      )}
    </div>
  );
}
