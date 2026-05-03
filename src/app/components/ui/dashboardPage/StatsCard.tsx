// components/StatsCard.tsx

import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  trend: string;
  trendType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor: string;
}

export default function StatsCard({
  title,
  value,
  trend,
  trendType,
  icon: Icon,
  iconColor,
}: StatsCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between min-w-[240px]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            {title}
          </p>
          <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
        </div>
        <div
          className={`p-2 rounded-lg bg-opacity-10 ${iconColor.replace("text", "bg")}`}
        >
          <Icon className={`${iconColor}`} size={18} />
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <span
          className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
            trendType === "positive"
              ? "text-emerald-600 bg-emerald-50"
              : trendType === "negative"
                ? "text-rose-600 bg-rose-50"
                : "text-amber-600 bg-amber-50"
          }`}
        >
          {trend}
        </span>
        <span className="text-[11px] text-gray-400 font-medium">
          vs. yesterday
        </span>
      </div>
    </div>
  );
}
