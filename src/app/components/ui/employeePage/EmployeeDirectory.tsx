"use client";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Filter,
  Mail,
  MessageSquare,
  Moon,
  Phone,
  Plus,
  Search,
  User,
  Users,
} from "lucide-react";

export default function EmployeeDirectory() {
  const employees = [
    {
      name: "Sarah Jenkins",
      role: "Production Manager",
      type: "Full-time",
      email: "s.jenkins@microbiz.com",
      phone: "+1 (555) 123-4567",
      status: "online",
      image: "👩‍💼",
    },
    {
      name: "David Chen",
      role: "Lead Artisan",
      type: "Full-time",
      email: "d.chen@microbiz.com",
      phone: "+1 (555) 234-5678",
      status: "online",
      image: "👨‍🎨",
    },
    {
      name: "Elena Rodriguez",
      role: "Inventory Specialist",
      type: "Contract",
      email: "e.rodriguez@microbiz.com",
      phone: "+1 (555) 345-6789",
      status: "away",
      image: "👩‍🔬",
    },
    {
      name: "Marcus Thorne",
      role: "Sales Associate",
      type: "Part-time",
      email: "m.thorne@microbiz.com",
      phone: "+1 (555) 456-7890",
      status: "online",
      image: "👨‍💼",
    },
    {
      name: "Amara Okafor",
      role: "Quality Control",
      type: "Full-time",
      email: "a.okafor@microbiz.com",
      phone: "+1 (555) 567-8901",
      status: "offline",
      image: "👩‍🏭",
    },
    {
      name: "James Wilson",
      role: "Logistics Coordinator",
      type: "Full-time",
      email: "j.wilson@microbiz.com",
      phone: "+1 (555) 678-9012",
      status: "online",
      image: "👨‍✈️",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-10 font-sans text-slate-800">
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Employee Directory
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Manage your staff profiles, roles, and communication.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#4ade80] text-white rounded-xl text-xs font-black uppercase shadow-lg shadow-green-100 hover:bg-[#22c55e] transition-all">
          <Plus size={18} /> Add Employee
        </button>
      </div>

      {/* --- QUICK STATS --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: "Total Staff",
            val: "24",
            icon: Users,
            color: "text-blue-500",
          },
          {
            label: "On Shift",
            val: "18",
            icon: User,
            color: "text-emerald-500",
          },
          { label: "On Leave", val: "3", icon: Moon, color: "text-amber-500" },
          { label: "Pending", val: "2", icon: Clock, color: "text-slate-400" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4"
          >
            <div className={`p-2 bg-slate-50 rounded-lg ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
              <p className="text-xl font-black text-slate-900">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- SEARCH & FILTERS --- */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-wrap items-center gap-4 mb-8">
        <div className="relative flex-1 min-w-[280px]">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name, role, or department..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-500">
            <Filter size={16} /> Filters
          </button>
          {["Artisans", "Sales", "Admin"].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 bg-slate-50 text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-100"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* --- DIRECTORY GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {employees.map((emp, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative"
          >
            {/* Header: Avatar & Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                  {emp.image}
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 w-4 h-4 border-4 border-white rounded-full ${
                    emp.status === "online"
                      ? "bg-emerald-400"
                      : emp.status === "away"
                        ? "bg-amber-400"
                        : "bg-pink-400"
                  }`}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                  {emp.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">
                    {emp.role}
                  </span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full" />
                  <span className="text-[10px] font-bold text-slate-300 uppercase">
                    {emp.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={14} />
                <span className="text-xs font-medium">{emp.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={14} />
                <span className="text-xs font-medium">{emp.phone}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-[11px] font-bold transition-colors">
                <MessageSquare size={14} /> Message
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-[11px] font-bold transition-colors">
                <Calendar size={14} /> Schedule
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- PAGINATION --- */}
      <div className="flex justify-between items-center px-4">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Showing 6 of 24 employees
        </p>
        <div className="flex gap-1">
          <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-xs font-bold bg-blue-50 text-blue-600 rounded-lg">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-400 hover:bg-slate-50 rounded-lg">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-400 hover:bg-slate-50 rounded-lg">
            3
          </button>
          <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
