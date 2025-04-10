import {
  Moon,
  Sun,
  HelpCircle,
  ChevronRight,
  UserPenIcon,
  PhoneCallIcon,
} from "lucide-react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useState } from "react";

export default function ProfileTab() {
  const { meterId, avatar } = useGlobalContext();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle Dark Mode Toggle
  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    // Optionally you can also handle actual theme switch logic here
    // Example: document.body.classList.toggle('dark', !isDarkMode);
  };

  const handleOptionClick = (option) => {
    console.log("option clicked", option);
  };

  return (
    <div className="h-[70vh] text-white">
      <div className="flex flex-col items-center -mt-24">
        <div className="w-40 h-auto rounded-full p-1 overflow-hidden">
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="mt-2 text-sm tracking-wider">{meterId}</p>
      </div>

      {/* Options */}
      <div className="mt-14 px-4 py-6 rounded-2xl space-y-5 bg-[#425183] profile-bg shadow-[0_0_60px_10px_rgba(66,81,131,0.99)]">
        <Option
          icon={<UserPenIcon size={18} />}
          label="Replace meter"
          onClick={() => handleOptionClick("replace")}
        />
        <Option
          icon={isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          label={isDarkMode ? "Light mode" : "Dark mode"}
          trailing={
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDarkMode}
                onChange={handleDarkMode}
              />
              <div className="w-11 h-6 bg-white/30 rounded-full relative transition-colors duration-300 peer-checked:bg-[var(--link-color)]">
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 text-orange-500 grid place-items-center ${
                    isDarkMode ? "translate-x-5" : ""
                  }`}
                >
                  {isDarkMode ? (
                    <Sun size={18} className="text-black" />
                  ) : (
                    <Moon size={18} />
                  )}
                </span>
              </div>
            </label>
          }
        />
        <Option
          icon={<HelpCircle size={18} />}
          label="Help"
          onClick={() => handleOptionClick("help")}
        />
        <Option
          icon={<PhoneCallIcon size={18} />}
          label="Contact us"
          onClick={() => handleOptionClick("contact")}
        />
      </div>
    </div>
  );
}

function Option({ icon, label, trailing, onClick }) {
  return (
    <div
      className="group flex select-none justify-between items-center hover:bg-white/10 p-2 rounded-lg transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 text-orange-400">
        <span className=" ">{icon}</span>
        <span className="text-sm text-white">{label}</span>
      </div>
      {trailing || (
        <span className="text-white text-lg">
          <ChevronRight className="group-hover:scale-125 transition-transform duration-300" />
        </span>
      )}
    </div>
  );
}
