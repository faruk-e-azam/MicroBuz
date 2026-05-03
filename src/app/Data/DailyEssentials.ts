import { Box, Calculator, Scan, ShoppingCart, TrendingUp } from "lucide-react";

export const DailyEssentials = [
  {
    title: "Point of Sale",
    description: "Process retail transactions, handle returns, and",
    icon: TrendingUp,
    color: "bg-blue-500",
  },
  {
    title: "Inventory",
    description: "Track stock levels, set reorder points, and",
    icon: Box,
    color: "bg-emerald-400",
  },
  {
    title: "Accounting",
    description: "Manage invoices, track expenses, and view",
    icon: Calculator,
    color: "bg-blue-400",
  },
  {
    title: "Purchase",
    description: "Create POs for suppliers and track incoming raw",
    icon: ShoppingCart,
    color: "bg-slate-500",
  },
  {
    title: "Barcode Scanner",
    description: "High-speed stock entry and lookup using",
    icon: Scan,
    color: "bg-orange-400",
  },
];
