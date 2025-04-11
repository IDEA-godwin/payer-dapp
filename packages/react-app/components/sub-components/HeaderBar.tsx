import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

const HeaderBar = ({ meterId, avatar }: any) => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex justify-between items-center px-3 py-3 transition-shadow duration-300 ease-in-out  text-[#f5f5f5] w-full sticky top-0 ${hasShadow ? "shadow-md shadow-[rgba(255,255,255,0.1)] bg-[#221F1F]/80" : ""}`}>
      <div className="flex items-center space-x-2">
        <img src={avatar} className="w-10 h-auto" />
        <div className="text-left -space-y-1">
          <p>Meter ID</p>
          <p>{meterId}</p>
        </div>
      </div>
      <div className="relative ">
        <Bell className="text-gray-500" />
        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
      </div>
    </header>
  );
};

export default HeaderBar;
