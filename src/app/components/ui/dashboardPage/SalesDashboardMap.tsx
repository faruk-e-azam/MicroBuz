import SalesDashboard from "@/app/components/ui/dashboardPage/SalesDashboard";
import { dashboardStats } from "@/app/Data/StatsCard";

export default function Dashboard() {
  return (
    <div className="flex gap-4 flex-wrap">
      {dashboardStats.map((stat, index) => (
        <SalesDashboard
          key={index}
          title={stat.title}
          value={stat.value}
          trend={stat.trend}
          trendType={stat.trendType}
          icon={stat.icon}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
}
