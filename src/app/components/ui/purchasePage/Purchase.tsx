"use client";

import {
  Box,
  Calendar,
  CreditCard,
  Download,
  List,
  Mail,
  Phone,
  Plus,
  Printer,
  Search,
  Send,
} from "lucide-react";

// --- Sub-Component: Sidebar List ---
const POSidebar = ({ activeId }: { activeId: string }) => {
  const orders = [
    {
      id: "PO-2024-003",
      company: "Global Textiles Ltd.",
      date: "Oct 24, 2024",
      amount: "1,240.00",
      status: "Draft",
    },
    {
      id: "PO-2024-082",
      company: "Heritage Loom Co.",
      date: "Oct 22, 2024",
      amount: "3,850.50",
      status: "Sent",
    },
    {
      id: "PO-2024-079",
      company: "Industrial Dye Works",
      date: "Oct 18, 2024",
      amount: "920.00",
      status: "Received",
    },
  ];

  return (
    <div className="w-80 border-r border-gray-100 flex flex-col bg-white">
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Purchase Orders</h2>
          <button className="bg-blue-500 text-white p-1 rounded-full">
            <Plus size={18} />
          </button>
        </div>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Filter POs..."
            className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-lg text-xs outline-none border border-gray-100"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {orders.map((order) => (
          <div
            key={order.id}
            className={`p-4 border-l-4 cursor-pointer hover:bg-gray-50 transition-colors ${activeId === order.id ? "border-blue-500 bg-blue-50/30" : "border-transparent"}`}
          >
            <div className="flex justify-between items-start mb-1">
              <span className="text-[10px] font-bold text-gray-400">
                {order.id}
              </span>
              <span
                className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${order.status === "Draft" ? "bg-gray-100 text-gray-500" : order.status === "Sent" ? "bg-blue-50 text-blue-500" : "bg-green-50 text-green-500"}`}
              >
                {order.status}
              </span>
            </div>
            <h3 className="text-sm font-bold text-gray-800">{order.company}</h3>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-1 text-[10px] text-gray-400">
                <Calendar size={10} />
                {order.date}
              </div>
              <span className="text-sm font-black text-gray-800">
                ${order.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Sub-Component: Info Cards ---
const InfoCard = ({ icon: Icon, title, content, subContent }: any) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 flex-1 shadow-sm">
    <div className="flex items-center gap-2 mb-3 text-gray-400 font-bold uppercase text-[9px] tracking-widest">
      <Icon size={14} /> <span>{title}</span>
    </div>
    <p className="text-sm font-bold text-gray-800">{content}</p>
    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{subContent}</p>
  </div>
);

// --- Sub-Component: Order Table ---
const OrderItemsTable = () => {
  const items = [
    {
      sku: "RAW-TEX-01",
      desc: "Organic Cotton Twill - White",
      qty: 500,
      price: 4.5,
      total: 2250.0,
    },
    {
      sku: "RAW-TEX-02",
      desc: "Recycled Polyester Blend",
      qty: 250,
      price: 3.2,
      total: 800.0,
    },
    {
      sku: "SUP-THR-12",
      desc: "High-Tensile Cotton Thread",
      qty: 20,
      price: 12.0,
      total: 240.0,
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 font-bold text-gray-800">
          <List size={18} className="text-blue-500" />
          <span>Order Items</span>
        </div>
        <button className="text-blue-500 font-bold text-xs">+ Add Row</button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-50">
            <th className="py-3">SKU</th>
            <th className="py-3">Item Description</th>
            <th className="py-3 text-right">Quantity</th>
            <th className="py-3 text-right">Unit Price</th>
            <th className="py-3 text-right">Total</th>
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-gray-700 divide-y divide-gray-50">
          {items.map((item) => (
            <tr key={item.sku}>
              <td className="py-4 text-gray-400">{item.sku}</td>
              <td className="py-4 font-bold">{item.desc}</td>
              <td className="py-4 text-right">{item.qty}</td>
              <td className="py-4 text-right">${item.price.toFixed(2)}</td>
              <td className="py-4 text-right font-bold">
                ${item.total.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- Main Page Component ---
export default function PurchaseOrderPage() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      <POSidebar activeId="PO-2024-082" />

      <main className="flex-1 overflow-y-auto p-8">
        {/* Header Actions */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-black text-gray-900 tracking-tighter">
                PO-2024-082
              </h1>
              <span className="bg-blue-50 text-blue-500 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-100">
                Sent
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium">
              Created on Oct 22, 2024 •{" "}
              <span className="text-gray-800">
                Expected delivery: Oct 30, 2024
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50 transition-all">
              <Printer size={14} /> Print
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50 transition-all">
              <Download size={14} /> Export
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-100 hover:bg-blue-600 transition-all">
              <Send size={14} /> Send to Supplier
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-white rounded-lg text-xs font-bold hover:bg-emerald-500 transition-all">
              Receive Items
            </button>
          </div>
        </div>

        {/* Info Cards Row */}
        <div className="flex gap-6 mb-8">
          <InfoCard
            icon={Box}
            title="Supplier"
            content="Heritage Loom Co."
            subContent="122 Industrial Way, Greenville, SC 29601"
          />
          <InfoCard
            icon={CreditCard}
            title="Billing Terms"
            content="Payment Method: Bank Transfer"
            subContent="Terms: Net 30 | Currency: USD ($)"
          />
          <div className="bg-white p-5 rounded-2xl border border-gray-100 flex-1 flex gap-4 items-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-2xl">
              🏭
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold">Global Textiles Ltd.</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                Premium Supplier since 2021
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 text-gray-400">
                <Mail size={16} />
              </button>
              <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 text-gray-400">
                <Phone size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Table & Footer Summary */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <OrderItemsTable />

          <div className="mt-12 flex justify-end">
            <div className="w-80 space-y-4">
              <div className="space-y-2 text-xs font-bold">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-gray-800">$3,340.00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping & Handling</span>
                  <span className="text-gray-800">$125.00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax (Est. 11.5%)</span>
                  <span className="text-gray-800">$385.50</span>
                </div>
              </div>
              <div className="flex justify-between items-baseline pt-4 border-t border-gray-50">
                <span className="text-xs font-black uppercase tracking-widest text-gray-800">
                  Total Amount
                </span>
                <span className="text-3xl font-black text-blue-500 tracking-tighter">
                  $3,850.50
                </span>
              </div>
              <button className="w-full py-4 bg-blue-500 text-white rounded-xl font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all">
                Finalize & Commit PO
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
