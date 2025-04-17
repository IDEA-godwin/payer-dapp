'use client'

import { useEffect, useRef, useState } from "react";

import FooterNav from "@/components/sub-components/FooterNav";
import HeaderBar from "@/components/sub-components/HeaderBar";

import HomeTab from "@/components/tabs/HomeTab";
import ShopTab from "@/components/tabs/ShopTab";
import SearchTab from "@/components/tabs/SearchTab";
import ProfileTab from "@/components/tabs/ProfileTab";
import RechargeMeter from "@/components/RechargeMeter";

import { useGlobalContext } from "@/contexts/GlobalContext";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useWeb3 } from "@/contexts/useWeb3";

export default function Page() {

  const parentRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0);

  const { address, isConnected } = useAccount()
  const [contractTxId, setContractTxId] = useState("")

  const [activeTab, setActiveTab] = useState("home");
  const [showRechargeMeter, setShowRechargeMeter] = useState(false);

  const { m3ter } = useGlobalContext();
  const { getContractTxIdByToken } = useWeb3();
  const navigate = useRouter()

  const toggleRechargeMeter = () => {
    setShowRechargeMeter(!showRechargeMeter);
  };

  useEffect(() => {
    async function getM3terContractTxId(m3ter: any) {
      const contractTxId: any = await getContractTxIdByToken(BigInt(m3ter));
      setContractTxId(contractTxId)
    }
    if (!m3ter) navigate.push("/link-meter")
    getM3terContractTxId(m3ter)
    const updateWidth = () => {
      if (parentRef.current) {
        setWidth(parentRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "shop":
        return <ShopTab />;
      case "search":
        return <SearchTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return <HomeTab isConnected={isConnected} contractTxId={contractTxId} toggleRechargeMeter={toggleRechargeMeter} />;
    }
  };

  if (showRechargeMeter)
    return <RechargeMeter toggleRechargeMeter={toggleRechargeMeter} />;

  return (
    <div ref={parentRef} className="w-full flex flex-col items-center justify-between">
      {(activeTab === "home" || activeTab === "profile") && <HeaderBar m3ter={m3ter} />}
      <main className="flex-1 p-4 w-full mb-24 z-1">{renderActiveTab()}</main>
      <FooterNav width={width} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};
