import { ChevronRight, Clock, CreditCard, History } from "lucide-react";

const OrdersSidebar = () => {
  const openOrders = [
    { id: "TX-9019", time: "10:32 AM", items: 12, total: 89.95 },
  ];

  const recentSales = [
    { id: "TX-9021", time: "10:45 AM", total: 45.2 },
    { id: "TX-9020", time: "10:32 AM", total: 12.0 },
  ];

  return (
    <div className="flex flex-col h-screen w-full max-w-sm bg-[#F9FAFB] border-r border-gray-200 p-4">
      {/* Section: Open Orders */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-gray-800">
            <Clock size={20} className="text-blue-500" />
            <h2 className="font-bold text-lg">Open Orders</h2>
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase">
            3 Orders
          </span>
        </div>

        <div className="space-y-3">
          {openOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-800">{order.id}</h3>
                  <p className="text-[10px] text-gray-400 font-medium">
                    {order.time} / {order.items} items
                  </p>
                </div>
                <span className="font-bold text-gray-800">
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 mb-8" />

      {/* Section: Recent Sales */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-gray-800">
            <History size={20} className="text-blue-500" />
            <h2 className="font-bold text-lg">Recent Sales</h2>
          </div>
          <button className="text-xs font-bold text-blue-500 uppercase hover:underline">
            View All
          </button>
        </div>

        <div className="space-y-2">
          {recentSales.map((sale) => (
            <div
              key={sale.id}
              className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-lg border border-gray-100 text-gray-400 group-hover:text-blue-500">
                  <CreditCard size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">{sale.id}</h4>
                  <p className="text-[10px] text-gray-400 font-medium uppercase">
                    {sale.time}
                  </p>
                </div>
              </div>
              <span className="font-bold text-gray-800">
                ${sale.total.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action */}
      <button className="mt-auto w-full py-4 px-6 bg-white border border-gray-200 rounded-2xl flex items-center justify-between font-bold text-gray-700 hover:bg-gray-50 transition-all">
        <span>Back to Dashboard</span>
        <ChevronRight size={20} className="text-gray-400" />
      </button>
    </div>
  );
};

export default OrdersSidebar;
