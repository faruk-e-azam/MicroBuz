"use client";

import {
  AlertCircle,
  ArrowUpDown,
  Box,
  Calendar,
  ChevronRight,
  Download,
  Edit3,
  Filter,
  MapPin,
  MoreVertical,
  Plus,
  Search,
  Tag,
  TrendingUp,
  Truck,
} from "lucide-react";
import { useState } from "react";

// --- Types ---
interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  image: string;
  description?: string;
  supplier?: string;
  lastReorder?: string;
  location?: string;
}

export default function InventoryDashboard() {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const inventory: InventoryItem[] = [
    {
      id: "1",
      name: "Organic Lavender Sachet",
      sku: "LAV-001",
      category: "Home",
      stock: 142,
      price: 12.5,
      status: "In Stock",
      image: "🌿",
      description: "Organic dried lavender in a linen pouch.",
      supplier: "Green Earth",
      lastReorder: "Sep 20, 2023",
      location: "Aisle 1, Shelf B",
    },
    {
      id: "2",
      name: "Hand-Poured Soy Candle",
      sku: "CAN-042",
      category: "Home",
      stock: 12,
      price: 24.0,
      status: "Low Stock",
      image: "🕯️",
      description:
        "Eco-friendly soy wax blended with essential oils for a 40-hour burn.",
      supplier: "Wax & Wick",
      lastReorder: "Oct 12, 2023",
      location: "Aisle 4, Shelf 8",
    },
    {
      id: "3",
      name: "Artisanal Honey Jar",
      sku: "HON-011",
      category: "Food",
      stock: 0,
      price: 18.0,
      status: "Out of Stock",
      image: "🍯",
    },
    {
      id: "4",
      name: "Recycled Paper Journal",
      sku: "JRN-203",
      category: "Stationery",
      stock: 85,
      price: 15.0,
      status: "In Stock",
      image: "📓",
    },
    {
      id: "5",
      name: "Ceramic Mug - Teal",
      sku: "CER-112",
      category: "Kitchen",
      stock: 5,
      price: 32.0,
      status: "Low Stock",
      image: "☕",
    },
  ];

  // Default to the Soy Candle for the preview
  const displayItem = selectedItem || inventory[1];

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 text-gray-800 overflow-hidden font-sans">
      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col p-4 lg:p-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Inventory Management
            </h1>
            <p className="text-sm text-gray-500">
              Track, manage and optimize your cottage industry stock.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
              <Download size={16} /> Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-sm">
              <Plus size={16} /> New Item
            </button>
          </div>
        </div>

        {/* --- SEARCH & FILTERS --- */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-wrap gap-4 items-center mb-6">
          <div className="relative flex-1 min-w-[240px]">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by SKU, Name or Category..."
              className="w-full pl-10 pr-4 py-2 border border-gray-100 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100">
              <ArrowUpDown size={16} /> Sort
            </button>
          </div>
        </div>

        {/* --- INVENTORY TABLE --- */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Product Details</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Current Stock</th>
                <th className="px-6 py-4">Unit Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {inventory.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="hover:bg-blue-50/30 transition-colors cursor-pointer group"
                >
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                      {item.image}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400 font-medium tracking-tight">
                      {item.sku}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item.category}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-800">
                      {item.stock}
                    </span>
                    <span className="text-[10px] text-gray-400 ml-1 font-bold uppercase">
                      Units
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-800">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight ${
                        item.status === "In Stock"
                          ? "bg-gray-100 text-gray-600"
                          : item.status === "Low Stock"
                            ? "bg-orange-50 text-orange-600"
                            : "bg-pink-50 text-pink-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1 text-gray-300 hover:text-gray-600">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- STATS SUMMARY --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-blue-500">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Total Valuation
              </span>
            </div>
            <p className="text-2xl font-black text-gray-900">$12,450.00</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-green-500">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                In-Stock Health
              </span>
            </div>
            <p className="text-2xl font-black text-gray-900">92.4%</p>
          </div>
          <div className="bg-pink-50/50 p-6 rounded-2xl border border-pink-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-pink-500">
              <AlertCircle size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-pink-400">
                Alerts Pending
              </span>
            </div>
            <p className="text-2xl font-black text-pink-600">2 Low Stock</p>
          </div>
        </div>
      </main>

      {/* --- SIDEBAR: ITEM DETAILS --- */}
      <aside className="w-full lg:w-96 bg-white border-l border-gray-200 overflow-y-auto">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Item Details</h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              SKU: {displayItem.sku}
            </p>
          </div>
          <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="aspect-square bg-gray-50 rounded-2xl mb-6 flex items-center justify-center text-8xl shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-transparent" />
            {displayItem.image}
          </div>

          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900">
              {displayItem.name}
            </h3>
            <Edit3
              size={18}
              className="text-gray-300 hover:text-blue-500 cursor-pointer transition-colors"
            />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            {displayItem.description || "No description provided."}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-center">
              <Box className="mx-auto text-blue-500 mb-2" size={20} />
              <p className="text-xl font-black text-blue-700">
                {displayItem.stock}
              </p>
              <p className="text-[9px] font-bold text-blue-400 uppercase tracking-wider">
                Current Stock
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <TrendingUp className="mx-auto text-gray-400 mb-2" size={20} />
              <p className="text-xl font-black text-gray-900">
                ${displayItem.price}
              </p>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                Unit Value
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
              Product Attributes
            </h4>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <Tag size={14} />
                <span>Category</span>
              </div>
              <span className="font-semibold">{displayItem.category}</span>
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <Truck size={14} />
                <span>Supplier</span>
              </div>
              <span className="font-semibold">
                {displayItem.supplier || "N/A"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar size={14} />
                <span>Last Reorder</span>
              </div>
              <span className="font-semibold">
                {displayItem.lastReorder || "N/A"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={14} />
                <span>Warehouse Location</span>
              </div>
              <span className="font-semibold text-right">
                {displayItem.location || "N/A"}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-100 transition-all">
              Place Reorder
            </button>
            <button className="w-full py-3 bg-white border border-pink-100 text-pink-500 hover:bg-pink-50 rounded-xl font-bold text-sm transition-all">
              Mark as Discontinued
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
