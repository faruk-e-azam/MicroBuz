"use client";

import {
  AlertTriangle,
  BarChart3,
  Beaker,
  ClipboardList,
  Clock,
  FileText,
  Info,
  Plus,
  TrendingUp,
} from "lucide-react";

export default function ManufacturingControl() {
  const activeBatches = [
    {
      id: "PO-482",
      name: "Lavender Dream Soap (50pk)",
      qty: 250,
      due: "Today, 5:00 PM",
      status: "In Progress",
      progress: [1, 1, 0.5, 0, 0],
    },
    {
      id: "PO-483",
      name: "Activated Charcoal Bar",
      qty: 100,
      due: "Tomorrow, 10:00 AM",
      status: "In Progress",
      progress: [1, 1, 1, 1, 0],
    },
    {
      id: "PO-484",
      name: "Lemon Zest Shampoo",
      qty: 40,
      due: "May 24, 2:00 PM",
      status: "Testing",
      progress: [1, 1, 1, 0, 0],
    },
    {
      id: "PO-485",
      name: "Rosewater Mist (Large)",
      qty: 150,
      due: "May 25, 11:00 AM",
      status: "Queued",
      progress: [1, 0, 0, 0, 0],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-10 font-sans text-slate-800">
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Manufacturing Control
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Monitor production floor throughput and batch lifecycle tracking.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all">
            <FileText size={14} /> Production Logs
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
            <Plus size={16} /> New Production Order
          </button>
        </div>
      </div>

      {/* --- TOP METRICS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            label: "Active Orders",
            val: "12",
            icon: ClipboardList,
            color: "text-blue-500",
            bg: "bg-blue-50",
          },
          {
            label: "Completion Rate",
            val: "94.2%",
            icon: TrendingUp,
            color: "text-emerald-500",
            bg: "bg-emerald-50",
          },
          {
            label: "Material Alerts",
            val: "3 Low",
            icon: AlertTriangle,
            color: "text-pink-500",
            bg: "bg-pink-50",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="text-2xl font-black text-slate-900">{stat.val}</p>
            </div>
            <div className={`p-3 ${stat.bg} ${stat.color} rounded-2xl`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- LEFT: ACTIVE BATCHES --- */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-6">
              {["Active Batches", "Scheduled", "History"].map((tab, i) => (
                <button
                  key={tab}
                  className={`text-xs font-bold uppercase tracking-tight ${i === 0 ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-400"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-[10px] font-bold text-slate-400">
              Showing 4 batches
            </span>
          </div>

          {activeBatches.map((batch) => (
            <div
              key={batch.id}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-blue-500">
                      {batch.id}
                    </span>
                    <span className="text-[10px] font-bold text-slate-300">
                      Batch #4800
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {batch.name}
                  </h3>
                  <div className="flex gap-4 mt-1 text-[10px] font-bold text-slate-400 uppercase">
                    <span className="flex items-center gap-1">
                      <Beaker size={12} /> Qty: {batch.qty} Units
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> Due: {batch.due}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-[9px] font-black uppercase px-2 py-1 rounded-lg ${batch.status === "In Progress" ? "bg-emerald-50 text-emerald-500" : "bg-slate-50 text-slate-400"}`}
                >
                  {batch.status}
                </span>
              </div>

              {/* Progress Stepper */}
              <div className="grid grid-cols-5 gap-2">
                {["Prep", "Processing", "QC", "Packaging", "Finished"].map(
                  (step, i) => (
                    <div key={step} className="space-y-2">
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-400"
                          style={{ width: `${batch.progress[i] * 100}%` }}
                        />
                      </div>
                      <span className="text-[8px] font-bold text-slate-400 uppercase block text-center">
                        {step}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}

          {/* Bottom Shortcuts */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 cursor-pointer hover:bg-slate-50">
              <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                <Beaker size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold">Formulations Lab</h4>
                <p className="text-[10px] text-slate-400">
                  Manage recipes & QC standards
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 cursor-pointer hover:bg-slate-50">
              <div className="p-2 bg-emerald-50 text-emerald-500 rounded-xl">
                <BarChart3 size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold">Export Reports</h4>
                <p className="text-[10px] text-slate-400">
                  Generate yield & cost analysis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT: TIMELINE & ALERTS --- */}
        <div className="lg:col-span-5 space-y-8">
          {/* Weekly Timeline */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Clock className="text-blue-500" size={18} />
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800">
                  Weekly Timeline
                </h2>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                May 20 - May 26
              </span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-7 text-[9px] font-bold text-slate-300 uppercase text-center border-b pb-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              {/* Simplified Timeline Visual */}
              <div className="space-y-2 py-4">
                <div className="h-6 w-3/4 bg-blue-500/80 rounded-md ml-2 flex items-center px-2 text-[8px] font-bold text-white uppercase">
                  Batch #482
                </div>
                <div className="h-6 w-1/2 bg-emerald-400/80 rounded-md ml-12 flex items-center px-2 text-[8px] font-bold text-white uppercase">
                  Batch #483
                </div>
                <div className="h-6 w-1/4 bg-blue-500/80 rounded-md ml-4 flex items-center px-2 text-[8px] font-bold text-white uppercase">
                  Batch #484
                </div>
              </div>
              <button className="w-full py-2 text-[10px] font-bold text-slate-400 uppercase hover:text-slate-600 transition-colors">
                View Full Schedule &gt;
              </button>
            </div>
          </div>

          {/* Material Shortage Alerts */}
          <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="text-blue-500" size={18} />
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-800">
                Material Shortage Alerts
              </h2>
            </div>
            <div className="space-y-3">
              {[
                { name: "Lye Solution", status: "CRITICAL" },
                { name: "Essential Oils", status: "WARNING" },
                { name: "Wrapping Film", status: "CRITICAL" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded-xl border border-blue-50 flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      {item.name}
                    </h4>
                    <p className="text-[9px] text-slate-400 font-bold">
                      Current Stock: 12%
                    </p>
                  </div>
                  <span
                    className={`text-[8px] font-black px-2 py-1 rounded-lg ${item.status === "CRITICAL" ? "bg-pink-50 text-pink-500" : "bg-amber-50 text-amber-500"}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 mt-4 text-[10px] font-bold text-blue-500 uppercase hover:underline">
              Check Inventory &gt;
            </button>
          </div>

          {/* Efficiency Tip */}
          <div className="bg-slate-900 p-6 rounded-3xl text-white">
            <div className="flex items-center gap-2 mb-2">
              <Info className="text-emerald-400" size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Efficiency Tip
              </span>
            </div>
            <p className="text-xs font-medium text-slate-300 leading-relaxed">
              Batch <span className="text-emerald-400 font-bold">#482</span> is
              nearing completion. Prepare the packaging station by 4:30 PM to
              avoid downtime between production stages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
