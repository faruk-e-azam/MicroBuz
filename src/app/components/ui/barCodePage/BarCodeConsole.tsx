"use client";

import {
  AlertCircle,
  Camera,
  ChevronRight,
  Cpu,
  HelpCircle,
  History,
  Info,
  Keyboard,
  RefreshCcw,
  Upload,
  Wifi,
} from "lucide-react";

export default function BarcodeConsole() {
  const scanHistory = [
    {
      barcode: "880371562917",
      product: "Organic Honey 500g",
      time: "2 mins ago",
      status: "Accepted",
    },
    {
      barcode: "880756312111",
      product: "Silk Thread Blue",
      time: "5 mins ago",
      status: "Accepted",
    },
    {
      barcode: "10933758221",
      product: "U-Max Pack(x2)",
      time: "12 mins ago",
      status: "Manual",
    },
    {
      barcode: "880756312111",
      product: "Beeswax Sheet",
      time: "15 mins ago",
      status: "Accepted",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-10 font-sans text-slate-800">
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">
            <span>Utility Tools</span> <ChevronRight size={10} />{" "}
            <span>API Console</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Barcode Scanner Console
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Control dashboard for managing hardware peripherals and processing
            rapid product identification.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
            <ChevronRight className="rotate-180" size={14} /> Return to
            Dashboard
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
            <RefreshCcw size={14} /> Inventory Sync
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- LEFT COLUMN: HARDWARE & ENTRY --- */}
        <div className="lg:col-span-4 space-y-6">
          {/* Connected Hardware Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                  <Wifi size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">
                    Connected Hardware
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                    Model: SYMBOL - USB HID Interface
                  </p>
                </div>
              </div>
              <span className="text-[9px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100 uppercase">
                Connected
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">
                  Response Time
                </p>
                <p className="text-sm font-black text-slate-700">12ms</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">
                  Signal Type
                </p>
                <p className="text-sm font-black text-slate-700">Laser 1D</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-2xl border border-blue-50">
              <Info className="text-blue-400 shrink-0 mt-0.5" size={14} />
              <p className="text-[10px] text-blue-600 leading-relaxed font-medium">
                Device is configured for automatic code submission.
              </p>
            </div>
          </div>

          {/* Manual Entry Override */}
          <div className="bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Keyboard className="text-emerald-500" size={18} />
              <h3 className="text-xs font-black uppercase tracking-widest text-emerald-600">
                Manual Entry Override
              </h3>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <AlertCircle
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-300"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Type barcode digits..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-emerald-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
                />
              </div>
              <button className="px-6 py-3 bg-emerald-400 text-white rounded-xl text-xs font-black uppercase hover:bg-emerald-500 transition-all shadow-md shadow-emerald-100">
                Input
              </button>
            </div>
          </div>

          {/* Setup Guide Accordion */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
              Scanner Setup Guide
            </h3>
            <div className="space-y-4">
              <details open className="group">
                <summary className="list-none flex justify-between items-center font-bold text-sm text-slate-700 cursor-pointer">
                  HID/Keyboard Operation{" "}
                  <ChevronRight
                    size={14}
                    className="group-open:rotate-90 transition-transform"
                  />
                </summary>
                <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
                  Ensure your scanner is set to{" "}
                  <span className="font-bold text-blue-500">
                    HID Keyboard Mode
                  </span>
                  . Use your hardware manual to scan the &rdquo;Primary
                  Default&rdquo; and &rdquo;Enter Key&rdquo; setup codes.
                </p>
              </details>
              <hr className="border-slate-50" />
              <div className="flex justify-between items-center text-sm font-bold text-slate-400 opacity-60">
                <span>Troubleshooting Connectivity</span>{" "}
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: MONITOR & HISTORY --- */}
        <div className="lg:col-span-8 space-y-8">
          {/* Signal Monitor (Visual Centerpiece) */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 border-[6px] border-slate-800 shadow-2xl relative">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-slate-800 rounded-full flex items-center gap-2 border border-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                Live Monitor Active
              </span>
            </div>

            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-3xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Cpu size={40} strokeWidth={1} />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight mb-2">
                Awaiting Barcode Signal
              </h2>
              <p className="text-slate-500 text-sm max-w-sm font-medium">
                Please position your laser over the GS1/QR code. Sync will
                automatically trigger with active movements.
              </p>

              <div className="flex gap-4 mt-10">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-bold border border-slate-700 hover:bg-slate-700 transition-all">
                  <Camera size={14} /> LOCAL
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-bold border border-slate-700 hover:bg-slate-700 transition-all">
                  <Upload size={14} /> UPLOAD/DRIVE
                </button>
              </div>
            </div>
          </div>

          {/* Recent Scan History */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <History className="text-blue-500" size={20} />
                <h2 className="text-lg font-bold text-slate-800">
                  Recent Scan History
                </h2>
              </div>
              <div className="flex gap-4">
                <button className="text-[10px] font-black text-slate-400 uppercase hover:text-slate-600 transition-colors">
                  Clear All
                </button>
                <button className="text-[10px] font-black text-blue-500 uppercase hover:underline">
                  Full Report
                </button>
              </div>
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-slate-300 uppercase tracking-widest border-b border-slate-50">
                  <th className="px-8 py-4">Barcode</th>
                  <th className="px-8 py-4">Identified Product</th>
                  <th className="px-8 py-4">Time</th>
                  <th className="px-8 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {scanHistory.map((scan, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                  >
                    <td className="px-8 py-5 text-xs font-bold text-slate-400 group-hover:text-blue-500 transition-colors">
                      {scan.barcode}
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-slate-700">
                      {scan.product}
                    </td>
                    <td className="px-8 py-5 text-xs text-slate-400 font-medium">
                      {scan.time}
                    </td>
                    <td className="px-8 py-5">
                      <span
                        className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${
                          scan.status === "Accepted"
                            ? "bg-emerald-50 text-emerald-500"
                            : "bg-orange-50 text-orange-500"
                        }`}
                      >
                        {scan.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Integration Bottom Bar */}
      <div className="mt-10 bg-blue-50/50 border border-blue-100 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-blue-50">
          <HelpCircle size={24} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-sm font-bold text-blue-800">Integration Mode</h4>
          <p className="text-xs text-blue-600/70 font-medium leading-relaxed">
            Scanner data is piped to POS and Invoice modules automatically when
            these tabs are active.
          </p>
        </div>
        <button className="px-8 py-3 bg-white text-blue-500 rounded-2xl text-xs font-black uppercase border border-blue-100 hover:bg-blue-50 transition-all shadow-sm">
          Documentation
        </button>
      </div>
    </div>
  );
}
