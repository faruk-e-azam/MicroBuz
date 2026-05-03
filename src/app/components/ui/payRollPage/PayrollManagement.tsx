"use client";

import {
  AlertCircle,
  Calendar,
  Clock,
  Download,
  FileText,
  Landmark,
  MoreHorizontal,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";

export default function PayrollManagement() {
  const employees = [
    {
      name: "Marcus Thorne",
      role: "Workshop Lead",
      gross: "4,200",
      net: "3,430",
      status: "cleared",
      image: "👨‍💼",
    },
    {
      name: "Elena Rossi",
      role: "Designer",
      gross: "3,800",
      net: "3,120",
      status: "cleared",
      image: "👩‍🎨",
    },
    {
      name: "Samuel Chen",
      role: "Apprentice",
      gross: "2,500",
      net: "2,080",
      status: "pending",
      image: "👨‍🔧",
    },
    {
      name: "Ingrid Nilsen",
      role: "QA Specialist",
      gross: "3,600",
      net: "2,980",
      status: "cleared",
      image: "👩‍🔬",
    },
    {
      name: "David Millar",
      role: "Logistics",
      gross: "3,100",
      net: "2,550",
      status: "cleared",
      image: "👨‍✈️",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-10 font-sans text-slate-800">
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Payroll Management
          </h1>
          <div className="flex items-center gap-2 mt-1 text-xs text-slate-400 font-medium">
            <Calendar size={14} />{" "}
            <span>
              Next pay date:{" "}
              <span className="text-slate-900 font-bold">October 15, 2024</span>{" "}
              (4 days remaining)
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all">
            <Download size={14} /> Export Ledger
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
            <Zap size={14} /> Quick Adjustment
          </button>
        </div>
      </div>

      {/* --- TOP METRICS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 shadow-sm flex justify-between items-start">
          <div>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">
              Current Run Net
            </p>
            <p className="text-3xl font-black text-slate-900">$34,430.00</p>
            <p className="text-[10px] font-bold text-emerald-500 mt-1">
              12 Employees processing
            </p>
          </div>
          <div className="p-2 bg-white rounded-xl text-emerald-400">
            <Wallet size={20} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex justify-between items-start">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
              YTD Total Paid
            </p>
            <p className="text-3xl font-black text-slate-900">$412,800.00</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">
              8.2% vs previous year
            </p>
          </div>
          <div className="p-2 bg-slate-50 rounded-xl text-slate-300">
            <TrendingUp size={20} />
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 shadow-sm flex justify-between items-start">
          <div>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
              Employee Liability
            </p>
            <p className="text-3xl font-black text-slate-900">$12,400.00</p>
            <p className="text-[10px] font-bold text-blue-500 mt-1">
              Pending tax and benefits
            </p>
          </div>
          <div className="p-2 bg-white rounded-xl text-blue-400">
            <Landmark size={20} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- LEFT: ACTIVE PAY RUN TABLE --- */}
        <div className="lg:col-span-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <div className="flex gap-6">
              <button className="text-xs font-bold uppercase tracking-tight text-blue-600 border-b-2 border-blue-600 pb-1">
                Active Pay Run
              </button>
              <button className="text-xs font-bold uppercase tracking-tight text-slate-400">
                Payroll History
              </button>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full uppercase">
              <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />{" "}
              Live Cycle
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black text-slate-300 uppercase tracking-widest border-b border-slate-50">
                <th className="px-8 py-4">Employee</th>
                <th className="px-8 py-4 text-right">Gross Pay</th>
                <th className="px-8 py-4 text-right">Net Pay</th>
                <th className="px-8 py-4">Secure Status</th>
                <th className="px-8 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {employees.map((emp, i) => (
                <tr
                  key={i}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-lg">
                        {emp.image}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          {emp.name}
                        </p>
                        <p className="text-[10px] text-slate-400 font-bold">
                          {emp.role}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-right text-xs font-bold text-slate-500">
                    ${emp.gross}
                  </td>
                  <td className="px-8 py-4 text-right text-sm font-black text-blue-500">
                    ${emp.net}
                  </td>
                  <td className="px-8 py-4">
                    <span
                      className={`text-[8px] font-black uppercase px-2 py-1 rounded-lg ${
                        emp.status === "cleared"
                          ? "bg-slate-100 text-slate-400"
                          : "bg-pink-50 text-pink-500"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-center text-slate-300 group-hover:text-slate-600 transition-colors">
                    <button>
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="w-full py-4 bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600">
            View All 12 Employees
          </button>
        </div>

        {/* --- RIGHT: SUMMARY & AUDIT --- */}
        <div className="lg:col-span-4 space-y-8">
          {/* Current Run Summary */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative">
            <div className="flex items-center gap-2 mb-6 text-blue-500">
              <Clock size={18} />{" "}
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Run Cycle
              </span>
            </div>
            <h2 className="text-xl font-black text-slate-900 mb-1">
              Current Run Summary
            </h2>
            <p className="text-xs text-slate-400 font-medium mb-8">
              Period: Oct 01 - Oct 15, 2024
            </p>

            <div className="space-y-4 border-b border-slate-50 pb-6 mb-6">
              <div className="flex justify-between text-sm font-medium text-slate-400">
                <span>Total Employees</span>
                <span className="text-slate-900 font-bold">12</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-slate-400">
                <span>Gross Payroll</span>
                <span className="text-slate-900 font-bold">$42,850.00</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-slate-400">
                <span>Deductions/Tax</span>
                <span className="text-pink-500 font-bold">-$8,420.00</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-slate-800">
                Total Net Pay
              </span>
              <span className="text-3xl font-black text-blue-500 tracking-tighter">
                $34,430.00
              </span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
              <div className="flex items-center gap-2 text-emerald-500 mb-1">
                <ShieldCheck size={14} />{" "}
                <span className="text-[9px] font-black uppercase tracking-widest">
                  Secure Audit Trail Enabled
                </span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                All pay runs are verified against internal accounting records
                and tax compliance rules before generation.
              </p>
            </div>

            <button className="w-full py-4 bg-[#4ade80] text-white rounded-2xl font-black text-sm uppercase shadow-xl shadow-green-100 hover:bg-[#22c55e] transition-all flex items-center justify-center gap-2 mb-3">
              <FileText size={18} /> Generate Pay Run
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button className="py-2.5 bg-white border border-slate-100 rounded-xl text-[10px] font-bold text-slate-500 uppercase flex items-center justify-center gap-1">
                <FileText size={12} /> Drafts
              </button>
              <button className="py-2.5 bg-white border border-slate-100 rounded-xl text-[10px] font-bold text-slate-500 uppercase flex items-center justify-center gap-1">
                <ShieldCheck size={12} /> Pre-Check
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col gap-3 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="p-2 bg-blue-50 text-blue-500 rounded-lg w-fit">
                <FileText size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold">Tax Forms</h4>
                <p className="text-[9px] text-slate-400 font-medium">
                  W-2 / 1099 Records
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col gap-3 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="p-2 bg-emerald-50 text-emerald-500 rounded-lg w-fit">
                <Landmark size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold">Direct Deposit</h4>
                <p className="text-[9px] text-slate-400 font-medium">
                  Manage accounts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Bottom Bar */}
      <div className="mt-8 bg-blue-50/50 p-6 rounded-3xl border border-blue-100 flex items-center gap-4">
        <AlertCircle className="text-blue-400 shrink-0" size={20} />
        <p className="text-xs text-blue-600/70 font-medium leading-relaxed">
          MicroBiz Bank automatically calculates payroll taxes based on current
          regional regulations. All transactions are logged with an immutable
          audit trail and dual-encryption for your financial security.
        </p>
      </div>
    </div>
  );
}
