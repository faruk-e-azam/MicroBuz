"use client";

import {
  Activity,
  BarChart3,
  Calendar,
  ChevronRight,
  Download,
  Factory,
  FileText,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function AnalyticsReporting() {
  const transactions = [
    {
      id: "TRX-100",
      date: "2024-06-15",
      category: "Handmade Pottery",
      amount: "$1,250",
      status: "Completed",
      variance: "+12%",
    },
    {
      id: "TRX-101",
      date: "2024-06-14",
      category: "Glass Ornaments",
      amount: "$620",
      status: "Completed",
      variance: "-2%",
    },
    {
      id: "TRX-102",
      date: "2024-06-14",
      category: "Custom Tiles",
      amount: "$2,100",
      status: "Pending",
      variance: "+25%",
    },
    {
      id: "TRX-103",
      date: "2024-06-13",
      category: "Handmade Pottery",
      amount: "$450",
      status: "Completed",
      variance: "+5%",
    },
    {
      id: "TRX-104",
      date: "2024-06-12",
      category: "Glass Supplies",
      amount: "$335",
      status: "Refunded",
      variance: "0%",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-10 font-sans text-slate-800">
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Analytics & Reporting
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Insights and performance tracking for your cottage industry
            operations.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-500">
            <Calendar size={14} /> Jun 1, 2024 - Jun 30, 2024
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4ade80] text-white rounded-xl text-xs font-black uppercase shadow-lg shadow-green-100 hover:bg-[#22c55e] transition-all">
            <Download size={14} /> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- LEFT NAVIGATION & AI INSIGHTS --- */}
        <aside className="lg:col-span-3 space-y-6">
          <nav className="bg-white p-2 rounded-[2rem] border border-slate-100 shadow-sm space-y-1">
            {[
              { label: "Sales Performance", icon: BarChart3, active: true },
              { label: "Inventory Health", icon: Activity, active: false },
              { label: "Tax & Compliance", icon: ShieldCheck, active: false },
              { label: "Production Efficiency", icon: Factory, active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-xs font-bold transition-all ${
                  item.active
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-slate-400 hover:bg-slate-50"
                }`}
              >
                <item.icon size={18} /> {item.label}
              </button>
            ))}
          </nav>

          <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl shadow-blue-100">
            <Sparkles className="absolute top-6 right-6 opacity-20" size={40} />
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                Insight AI
              </span>
            </div>
            <p className="text-xs font-medium leading-relaxed mb-6">
              Your sales are up{" "}
              <span className="text-emerald-300 font-bold">12.5%</span> this
              month. The{" "}
              <span className="underline decoration-blue-400">
                Handmade Pottery
              </span>{" "}
              category is driving most of this growth. Consider increasing
              production next month.
            </p>
            <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              View Strategy <ChevronRight size={14} />
            </button>
          </div>
        </aside>

        {/* --- MAIN ANALYTICS VIEW --- */}
        <main className="lg:col-span-9 space-y-8">
          {/* KPI Cards Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Total Sales",
                val: "$42,390.00",
                trend: "+12.5%",
                up: true,
                color: "bg-blue-500",
              },
              {
                label: "Inventory Turnover",
                val: "4.2x",
                trend: "+0.8%",
                up: true,
                color: "bg-emerald-400",
              },
              {
                label: "Est. Tax Liability",
                val: "$3,120.50",
                trend: "-2.1%",
                up: false,
                color: "bg-pink-400",
              },
              {
                label: "Net Profit Margin",
                val: "28.4%",
                trend: "+4.5%",
                up: true,
                color: "bg-slate-800",
              },
            ].map((kpi, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    {kpi.label}
                  </p>
                  <span
                    className={`text-[9px] font-black flex items-center gap-1 ${kpi.up ? "text-emerald-500" : "text-pink-500"}`}
                  >
                    {kpi.up ? (
                      <TrendingUp size={10} />
                    ) : (
                      <TrendingDown size={10} />
                    )}{" "}
                    {kpi.trend}
                  </span>
                </div>
                <p className="text-xl font-black text-slate-900 mb-4 tracking-tight">
                  {kpi.val}
                </p>
                <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${kpi.color}`}
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Chart Visualization */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                  Monthly Revenue Overview
                </h2>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  Actual revenue vs. growth targets for the last 6 months
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase">
                  <div className="w-2 h-2 rounded-full bg-blue-500" /> Revenue
                </div>
                <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" /> Target
                </div>
              </div>
            </div>

            {/* Custom Chart Rendering */}
            <div className="relative h-64 flex items-end justify-between px-4 pb-8">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-b border-slate-100">
                {[4, 3, 2, 1, 0].map((i) => (
                  <div
                    key={i}
                    className="w-full border-t border-slate-50 text-[8px] font-bold text-slate-300 pt-1"
                  >
                    ${i}k
                  </div>
                ))}
              </div>
              {[60, 45, 80, 75, 85, 95].map((h, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center flex-1"
                >
                  <div
                    className="w-10 bg-blue-500 rounded-t-lg z-10 transition-all hover:scale-105"
                    style={{ height: `${h}%` }}
                  />
                  <span className="absolute -bottom-6 text-[10px] font-black text-slate-300 uppercase">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
                  </span>
                </div>
              ))}
              {/* Simulated Curve Line */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 180 Q 150 200 300 120 T 600 80 T 900 40"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </div>

          {/* Detailed Transaction History */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FileText className="text-blue-500" size={20} />
                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                  Detailed Transaction History
                </h2>
              </div>
              <button className="text-[10px] font-black text-blue-500 uppercase hover:underline">
                View All Records
              </button>
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="text-[9px] font-black text-slate-300 uppercase tracking-widest border-b border-slate-50">
                  <th className="px-10 py-5">ID</th>
                  <th className="px-10 py-5">Date</th>
                  <th className="px-10 py-5">Product Category</th>
                  <th className="px-10 py-5 text-right">Amount</th>
                  <th className="px-10 py-5">Status</th>
                  <th className="px-10 py-5 text-right">Variance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {transactions.map((t, i) => (
                  <tr
                    key={i}
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-10 py-5 text-[10px] font-bold text-blue-500 cursor-pointer">
                      TRY-VIEW
                    </td>
                    <td className="px-10 py-5 text-xs text-slate-400 font-bold">
                      {t.date}
                    </td>
                    <td className="px-10 py-5 text-xs font-bold text-slate-800">
                      {t.category}
                    </td>
                    <td className="px-10 py-5 text-right text-sm font-black text-slate-900">
                      {t.amount}
                    </td>
                    <td className="px-10 py-5">
                      <span
                        className={`text-[8px] font-black uppercase px-2 py-1 rounded-md ${
                          t.status === "Completed"
                            ? "bg-slate-100 text-slate-400"
                            : t.status === "Pending"
                              ? "bg-blue-50 text-blue-500"
                              : "bg-pink-50 text-pink-500"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td
                      className={`px-10 py-5 text-right text-xs font-bold ${t.variance.startsWith("+") ? "text-emerald-500" : "text-pink-500"}`}
                    >
                      {t.variance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
