// components/BusinessGrowth.tsx
import { TrendingUp, Users, Wallet } from "lucide-react";

const growthItems = [
  {
    title: "Manufacturing",
    sub: "3 Active Batches",
    icon: TrendingUp,
  },
  {
    title: "Employee Management",
    sub: "12 Staff Profiles",
    icon: Users,
  },
  {
    title: "Payroll Runs",
    sub: "Pending: June 30",
    icon: Wallet,
  },
];

export default function BusinessGrowth() {
  return (
    <div className="bg-[#E9FAF1] p-6 rounded-3xl w-full max-w-sm">
      <header className="mb-6">
        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">
          Upcoming
        </p>
        <h2 className="text-xl font-bold text-slate-800">
          Stage 2: Business Growth
        </h2>
        <p className="text-xs text-emerald-700/60 mt-1 leading-relaxed">
          Operational tools for scaling your production and team.
        </p>
      </header>

      <div className="space-y-3">
        {growthItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <item.icon size={18} className="text-slate-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
              <p className="text-xs italic text-slate-400">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
