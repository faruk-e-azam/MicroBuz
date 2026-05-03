// types/navigation.ts
import {
  BarChart,
  Calculator,
  CreditCard,
  Factory,
  LayoutDashboard,
  Package,
  ScanLine,
  Settings,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react";

export const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "POS/Sales", icon: ShoppingCart, href: "/pages/pos" },
  { name: "Inventory", icon: Package, href: "/pages/inventory" },
  { name: "Purchase", icon: CreditCard, href: "/pages/purchase" },
  { name: "Accounting", icon: Calculator, href: "/pages/accounting" },
  { name: "Scanner", icon: ScanLine, href: "/pages/scanner" },
  { name: "Manufacturing", icon: Factory, href: "/pages/manufacturing" },
  { name: "Employees", icon: Users, href: "/pages/employees" },
  { name: "Payroll", icon: Wallet, href: "/pages/payroll" },
  { name: "Reports", icon: BarChart, href: "/pages/reports" },
  { name: "Settings", icon: Settings, href: "/pages/settings" },
];
