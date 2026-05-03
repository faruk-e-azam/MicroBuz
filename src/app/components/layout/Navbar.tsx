// components/Sidebar.tsx
import { navItems } from "@/app/types/navigation";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-50 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Top Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-blue-600 p-1.5 rounded-md">
          <div className="w-5 h-5 border-2 border-white rotate-45" />
        </div>
        <span className="text-xl font-bold text-gray-800">MicroBiz</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-4 px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
          >
            <item.icon size={20} className="group-hover:text-blue-600" />
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Action Section */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-all">
          <PlusCircle size={18} />
          <span className="text-sm font-medium">Quick Add Tool</span>
        </button>
      </div>
    </aside>
  );
}
