import { Bell } from "lucide-react";

const alerts = [
  {
    title: "Supplier Overdue",
    message: "Raw material order #PO-203 has not arrived.",
    type: "critical",
  },
  {
    title: "Inventory Alert",
    message: "Eco-Packaging rolls are below safety stock (3 left).",
    type: "warning",
  },
];

export default function PriorityAlerts() {
  return (
    <div className="bg-[#EBF5FF] p-5 rounded-2xl w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Bell size={14} className="text-blue-600" />
        <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
          Priority Alerts
        </h2>
      </div>

      {/* Alert List */}
      <div className="space-y-2">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm p-4 rounded-xl flex gap-3 shadow-sm border border-white/50"
          >
            {/* Status Dot */}
            <div className="mt-1.5">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  alert.type === "critical"
                    ? "bg-rose-500 animate-pulse"
                    : "bg-amber-400"
                }`}
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-xs text-slate-800 leading-tight">
                <span className="font-bold">{alert.title}:</span>{" "}
                {alert.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
