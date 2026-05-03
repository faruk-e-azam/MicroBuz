import { BarChart3, Zap } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-3">
      {/* Secondary Button: View Reports */}
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm active:scale-95">
        <BarChart3 size={16} className="text-gray-500" />
        <span className="text-sm font-semibold text-gray-700">
          View Reports
        </span>
      </button>

      {/* Primary Button: Quick Sale */}
      <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-200/50 active:scale-95">
        <Zap size={16} fill="white" className="text-white" />
        <span className="text-sm font-bold">Quick Sale</span>
      </button>
    </div>
  );
}
