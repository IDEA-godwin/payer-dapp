'use client'

import { useState } from "react";

import FooterNav from "@/components/sub-components/FooterNav";
import HeaderBar from "@/components/sub-components/HeaderBar";

import HomeTab from "@/components/tabs/HomeTab";
import ShopTab from "@/components/tabs/ShopTab";
import SearchTab from "@/components/tabs/SearchTab";
import ProfileTab from "@/components/tabs/ProfileTab";
import RechargeMeter from "@/components/RechargeMeter";

import { useGlobalContext } from "@/contexts/GlobalContext";

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");
  const [showRechargeMeter, setShowRechargeMeter] = useState(false);

  const { meterId } = useGlobalContext();
  const { avatar } = useGlobalContext();

  const toggleRechargeMeter = () => {
    setShowRechargeMeter(!showRechargeMeter);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "shop":
        return <ShopTab />;
      case "search":
        return <SearchTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return <HomeTab toggleRechargeMeter={toggleRechargeMeter} />;
    }
  };

  if (showRechargeMeter)
    return <RechargeMeter toggleRechargeMeter={toggleRechargeMeter} />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-5">
      {activeTab === "home" && <HeaderBar meterId={meterId} avatar={avatar} />}
      <main className="flex-1 p-4 w-full mt-20 mb-24">{renderActiveTab()}</main>
      <FooterNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};
