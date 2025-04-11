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

export default function Page() {

  const parentRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0);

  const [activeTab, setActiveTab] = useState("home");
  const [showRechargeMeter, setShowRechargeMeter] = useState(false);

  const { meterId } = useGlobalContext();
  const { avatar } = useGlobalContext();

  const toggleRechargeMeter = () => {
    setShowRechargeMeter(!showRechargeMeter);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (parentRef.current) {
        console.log(parentRef.current.classList)
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
        return <HomeTab toggleRechargeMeter={toggleRechargeMeter} />;
    }
  };

  if (showRechargeMeter)
    return <RechargeMeter toggleRechargeMeter={toggleRechargeMeter} />;

  return (
    <div ref={parentRef} className="w-full flex flex-col items-center justify-between">
      {(activeTab === "home" || activeTab === "profile") && <HeaderBar meterId={meterId} avatar={avatar} />}
      <main className="flex-1 p-4 w-full mb-24 z-1">{renderActiveTab()}</main>
      <FooterNav width={width} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};
