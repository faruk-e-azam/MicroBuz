import CartSidebar from "@/app/components/ui/posPage/CartSidebar";
import OrdersSidebar from "@/app/components/ui/posPage/OrdersSidebar";
import ProductGrid from "@/app/components/ui/posPage/ProductGrid";

function page() {
  return (
    <div className="flex">
      <CartSidebar />
      <ProductGrid />
      <OrdersSidebar />
    </div>
  );
}

export default page;
