// src/data/mockStats.ts
import { AlertTriangle, TrendingUp } from "lucide-react";

export const dashboardStats = [
  {
    title: "Today's Sales",
    value: "$1,284.50",
    trend: "+12.5%",
    trendType: "positive" as const,
    icon: TrendingUp,
    iconColor: "text-blue-500",
  },
  {
    title: "Low Stock Items",
    value: "14",
    trend: "4 Critical",
    trendType: "negative" as const,
    icon: AlertTriangle,
    iconColor: "text-blue-400",
  },
  // ... add the others here
];
