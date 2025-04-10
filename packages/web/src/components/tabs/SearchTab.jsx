import { SearchIcon } from "lucide-react";

const SearchTab = () => (
  <div className="text-center -mt-22 -mx-3 relative">
    <input
      type="text"
      placeholder="search..."
      className="bg-[#051836] w-full px-5 p-3 rounded-xl outline-none border-none"
    />
    <SearchIcon className="absolute top-2.5 right-5" />
  </div>
);

export default SearchTab;
