// components/WeeklyCashflow.tsx
"use client"; // Required for Recharts in Next.js
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Mon", revenue: 2500, expenses: 2000 },
  { name: "Tue", revenue: 1800, expenses: 2200 },
  { name: "Wed", revenue: 9500, expenses: 4500 },
  { name: "Thu", revenue: 4000, expenses: 3000 },
  { name: "Fri", revenue: 4800, expenses: 3200 },
  { name: "Sat", revenue: 3800, expenses: 2500 },
  { name: "Sun", revenue: 4200, expenses: 2100 },
];

export default function WeeklyCashflow() {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm w-full max-w-sm">
      <h3 className="text-sm font-bold text-slate-800 mb-6">Weekly Cashflow</h3>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#94a3b8" }}
            />
            <YAxis hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRev)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#10b981"
              strokeWidth={2}
              fill="transparent"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-4 mt-4 justify-center">
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
          <div className="w-2 h-2 rounded-full bg-blue-500" /> Revenue
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
          <div className="w-2 h-2 rounded-full bg-emerald-400" /> Expenses
        </div>
      </div>
    </div>
  );
}
