import { useState } from "react";
import FooterNav from "./sub-components/FooterNav";
import HeaderBar from "./sub-components/HeaderBar";

import HomeTab from "./tabs/HomeTab";
import ShopTab from "./tabs/ShopTab";
import SearchTab from "./tabs/SearchTab";
import ProfileTab from "./tabs/ProfileTab";

import RechargeMeter from "./RechargeMeter";

import { useGlobalContext } from "../context/GlobalContext";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showRechargeMeter, setShowRechargeMeter] = useState(false);

  const { meterId } = useGlobalContext();
  const { avatar } = useGlobalContext();

  const toggleRechargeMeter = () => {
    setShowRechargeMeter(!showRechargeMeter);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab toggleRechargeMeter={toggleRechargeMeter} />;
      case "shop":
        return <ShopTab />;
      case "search":
        return <SearchTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return <HomeTab />;
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

export default HomePage;
