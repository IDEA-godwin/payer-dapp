import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

// @ts-ignore
import { M3terHead } from "m3ters";
import { WalletButton } from "../ConnectWallet";

const HeaderBar = ({ m3ter }: any) => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex justify-between items-center px-3 py-3 transition-shadow duration-300 ease-in-out text-[#f5f5f5] w-full sticky top-0 ${hasShadow ? "shadow-md shadow-[rgba(255,255,255,0.1)] bg-[#221F1F]/80" : ""}`}>
      <div className="flex items-center space-x-2">
        <M3terHead seed={m3ter} size={50} />
        <div className="text-left -space-y-1">
          <p>Meter ID</p>
          <p>#{m3ter}</p>
        </div>
      </div>
      <WalletButton />
    </header>
  );
};

export default HeaderBar;
