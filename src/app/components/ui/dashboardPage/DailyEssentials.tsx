import { DailyEssentials as DailyEssentialsData } from "@/app/Data/DailyEssentials";
import { LucideIcon, Plus } from "lucide-react";

// 1. Define the shape of a single item for the loop
interface DailyEssentialItem {
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
}

// 2. Component should NOT take title/description as props if it's mapping internal data
export default function DailyEssentials() {
  return (
    <section className="w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
          <h2 className="text-xl font-bold text-slate-800">
            Stage 1: Daily Essentials
          </h2>
        </div>
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100">
          Active Phase
        </span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Loop over the data array */}
        {DailyEssentialsData.map((item: DailyEssentialItem, index: number) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
          >
            {/* Icon Box */}
            <div
              className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-inherit/20`}
            >
              <item.icon size={24} />
            </div>

            {/* Text Content */}
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
              {item.description}
            </p>

            {/* Bottom Link */}
            <div className="text-blue-500 text-xs font-bold tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all uppercase">
              Open Module <span className="text-base">›</span>
            </div>
          </div>
        ))}

        {/* Add Custom Tool Button */}
        <button className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-blue-300 hover:bg-blue-50/50 transition-all group min-h-[220px]">
          <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:border-blue-400 group-hover:text-blue-500 transition-colors">
            <Plus size={20} />
          </div>
          <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-widest">
            Add Custom Tool
          </span>
        </button>
      </div>
    </section>
  );
}
