import { Home, ShoppingCart, Search, User } from "lucide-react";

const FooterNav = ({ width, activeTab, setActiveTab }: any) => {
  const isActive = (tab: any) => tab === activeTab;

  return (
    <footer
      className="fixed bottom-0 left-0 bg-[#221F1F] pt-4 flex justify-around items-center z-50 text-[#f5f5f5] px-4"
      style={{ width }}
    >
      {[
        { icon: <Home />, label: "Home", key: "home" },
        { icon: <ShoppingCart />, label: "Shop", key: "shop" },
        { icon: <Search />, label: "Search", key: "search" },
        { icon: <User />, label: "Profile", key: "profile" },
      ].map(({ icon, label, key }) => (
        <div
          key={key}
          onClick={() => setActiveTab(key)}
          className={`flex items-center justify-center flex-col font-light cursor-pointer ${isActive(key) ? "text-[#F85A16] border-b-2 border-[#F85A16]" : ""
            }`}
        >
          {icon}
          <p>{label}</p>
          {isActive(key) && (
            <div className="py-[2px] rounded-t-2xl w-full bg-[var(--link-color)]"></div>
          )}
        </div>
      ))}
    </footer>
  );
};

export default FooterNav;
