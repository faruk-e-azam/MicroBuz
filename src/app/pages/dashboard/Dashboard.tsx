import TopHeader from "@/app/components/layout/TopHeader";
import BusinessGrowth from "@/app/components/ui/dashboardPage/BusinessGrowth";
import DailyEssentials from "@/app/components/ui/dashboardPage/DailyEssentials";
import DashboardHeader from "@/app/components/ui/dashboardPage/DashboardHeader";
import PriorityAlerts from "@/app/components/ui/dashboardPage/PriorityAlerts";
import SalesDashboard from "@/app/components/ui/dashboardPage/SalesDashboardMap";
import WeeklyCashflow from "@/app/components/ui/dashboardPage/WeeklyCashflow";

function DashBoard() {
  return (
    <main className="">
      <TopHeader />
      <div className="flex">
        <div className="p-5 grid gap-5">
          <DashboardHeader />
          <SalesDashboard />
          <DailyEssentials />
        </div>
        <div className="py-5 px-2 grid gap-5">
          <BusinessGrowth />
          <WeeklyCashflow />
          <PriorityAlerts />
        </div>
      </div>
    </main>
  );
}

export default DashBoard;
