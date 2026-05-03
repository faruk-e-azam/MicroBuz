"use client";

import {
  CheckCircle2,
  Clock,
  FileText,
  Filter,
  MoreVertical,
  Plus,
  RefreshCw,
  Search,
  Wallet,
} from "lucide-react";

export default function AccountingDashboard() {
  const transactions = [
    {
      date: "Oct 24, 2024",
      desc: "Raw Material Supply - Bulk Wood",
      cat: "Supply",
      amt: "-$1,250.00",
      status: "cleared",
    },
    {
      date: "Oct 22, 2024",
      desc: "Workshop Rent - June",
      cat: "Rent",
      amt: "-$2,500.00",
      status: "cleared",
    },
    {
      date: "Oct 18, 2024",
      desc: "Sash-Queens Billing Inc",
      cat: "Sales",
      amt: "+$3,850.50",
      status: "pending",
    },
    {
      date: "Oct 15, 2024",
      desc: "Utilities Payment",
      cat: "Utilities",
      amt: "-$245.50",
      status: "cleared",
    },
    {
      date: "Oct 12, 2024",
      desc: "Small Tool Purchase",
      cat: "Equipment",
      amt: "-$85.00",
      status: "void",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8 font-sans text-gray-800">
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900">
            Accounting
          </h1>
          <p className="text-sm text-gray-400 font-medium">
            Manage your ledgers, invoices, and reconciliation.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition-all">
            <RefreshCw size={14} /> Sync Bank
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
            <Plus size={16} /> Add Transaction
          </button>
        </div>
      </div>

      {/* --- TOP CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            label: "Cash on Hand",
            val: "$42,350.00",
            change: "+2.5%",
            up: true,
            icon: Wallet,
          },
          {
            label: "Accounts Receivable",
            val: "$12,400.50",
            change: "+4.2%",
            up: true,
            icon: FileText,
          },
          {
            label: "Accounts Payable",
            val: "$8,120.00",
            change: "-1.5%",
            up: false,
            icon: Clock,
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-gray-50 rounded-xl text-gray-400">
                <card.icon size={20} />
              </div>
              <span
                className={`text-[10px] font-black px-2 py-1 rounded-lg ${card.up ? "bg-green-50 text-green-500" : "bg-pink-50 text-pink-500"}`}
              >
                {card.change}
              </span>
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              {card.label}
            </p>
            <p className="text-2xl font-black text-gray-900 tracking-tight">
              {card.val}
            </p>
          </div>
        ))}
      </div>

      {/* --- MIDDLE ROW: CHART & SMART MATCH --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Cash Flow Analysis Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="mb-8">
            <h2 className="text-lg font-bold">Cash Flow Analysis</h2>
            <p className="text-xs text-gray-400 font-medium">
              Revenue vs Expenses for the last 6 months
            </p>
          </div>
          <div className="flex items-end justify-between h-48 gap-2 px-4">
            {[60, 80, 70, 90, 85, 100].map((h, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 flex-1 max-w-[60px]"
              >
                <div className="w-full flex gap-1 items-end h-full">
                  <div
                    className="flex-1 bg-blue-500 rounded-t-sm"
                    style={{ height: `${h}%` }}
                  />
                  <div
                    className="flex-1 bg-emerald-400 rounded-t-sm"
                    style={{ height: `${h * 0.7}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-400">OCT</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-4 justify-center">
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-blue-500" /> Revenue
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-emerald-400" /> Expenses
            </div>
          </div>
        </div>

        {/* Smart Match Sidebar */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="text-emerald-400" size={18} />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Smart Match
            </h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-emerald-100 transition-all cursor-pointer"
              >
                <p className="text-[10px] font-bold text-gray-400 mb-1">
                  JAN 18
                </p>
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold text-gray-800">
                    SQUARE DEP. TXN82
                  </h4>
                  <button className="text-[9px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    MATCH
                  </button>
                </div>
                <p className="text-sm font-black text-gray-900 mt-1">
                  +$4,250.00
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BOTTOM: LEDGER TABLE --- */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-wrap justify-between items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button className="px-6 py-1.5 bg-white text-xs font-bold rounded-lg shadow-sm">
              Ledger
            </button>
            <button className="px-6 py-1.5 text-xs font-bold text-gray-400">
              Invoices
            </button>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs outline-none focus:ring-1 focus:ring-blue-100"
              />
            </div>
            <button className="p-2 border border-gray-100 rounded-xl text-gray-400 hover:bg-gray-50">
              <Filter size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] border-b border-gray-50">
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Description</th>
                <th className="px-8 py-4">Category</th>
                <th className="px-8 py-4 text-right">Amount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactions.map((t, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5 text-xs text-gray-400 font-medium">
                    {t.date}
                  </td>
                  <td className="px-8 py-5 text-xs font-bold text-gray-800">
                    {t.desc}
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter bg-gray-100 px-2 py-0.5 rounded-md">
                      {t.cat}
                    </span>
                  </td>
                  <td
                    className={`px-8 py-5 text-xs font-black text-right ${t.amt.startsWith("+") ? "text-blue-500" : "text-gray-800"}`}
                  >
                    {t.amt}
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`text-[9px] font-black uppercase px-2 py-1 rounded-lg ${
                        t.status === "cleared"
                          ? "bg-emerald-50 text-emerald-500"
                          : t.status === "pending"
                            ? "bg-blue-50 text-blue-500"
                            : "bg-pink-50 text-pink-500"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <button className="text-gray-300 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
