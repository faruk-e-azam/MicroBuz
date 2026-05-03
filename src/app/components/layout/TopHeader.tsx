// components/TopHeader.tsx
import { Bell, HelpCircle, Search } from "lucide-react";

export default function TopHeader() {
  return (
    <header className="h-16 w-full bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Left Section: Branding */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-bold text-gray-800 whitespace-nowrap">
          MicroBiz Suite
        </h1>
        <div className="h-6 w-[1px] bg-gray-300 mx-2" />{" "}
        {/* Vertical Divider */}
        <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
          Industrial Management
        </span>
      </div>

      {/* Right Section: Search & Utilities */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative group hidden md:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Search resources..."
            className="pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-md text-sm w-64 focus:outline-none focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-blue-600 transition-colors p-1">
            <Bell size={20} />
          </button>
          <button className="hover:text-blue-600 transition-colors p-1">
            <HelpCircle size={20} />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center ml-2 border-l border-gray-200 pl-4">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200 hover:ring-2 hover:ring-blue-100 transition-all cursor-pointer">
            <img
              src="https://ui-avatars.com"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
