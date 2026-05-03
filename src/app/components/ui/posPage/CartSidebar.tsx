import { CreditCard, Save, ShoppingCart, Ticket, User } from "lucide-react";

const CartSidebar = () => {
  return (
    <div className="flex flex-col h-screen w-full max-w-md bg-white border-l border-gray-200 shadow-lg">
      {/* Header: Customer Info */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <User className="text-gray-500" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-800 uppercase tracking-tight">
              Guest Customer
            </h3>
            <p className="text-xs text-gray-400 font-medium">
              STANDARD LOYALTY
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
          <User size={16} />
          Select
        </button>
      </div>

      {/* Main Cart Content: Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 text-gray-300">
          <ShoppingCart size={64} strokeWidth={1} />
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-1">
          Shopping cart is empty
        </h2>
        <p className="text-sm text-gray-400">Add items from the product grid</p>
      </div>

      {/* Footer: Totals & Actions */}
      <div className="p-6 border-t border-gray-100 space-y-6">
        {/* Pricing Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Tax (8%)</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold text-gray-800">
              Total Amount
            </span>
            <span className="text-3xl font-extrabold text-blue-500">$0.00</span>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center gap-1 py-3 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 uppercase hover:bg-gray-50 transition-all">
            <Save size={18} />
            Save Order
          </button>
          <button className="flex flex-col items-center justify-center gap-1 py-3 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 uppercase hover:bg-gray-50 transition-all">
            <Ticket size={18} />
            Discounts
          </button>
        </div>

        {/* Primary CTA: Payment */}
        <button className="w-full py-4 bg-[#A7F3D0] hover:bg-[#86efac] text-[#065F46] rounded-xl flex items-center justify-center gap-2 font-black text-lg uppercase transition-all">
          <CreditCard size={24} />
          Payment [F10]
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
