import { Monitor, Package, Plus, Search } from "lucide-react";

const ProductGrid = () => {
  const categories = ["All Items", "Fresh Produce", "Dairy & Eggs"];

  const products = [
    {
      id: 1,
      name: "Organic Honey",
      price: 12.5,
      stock: 42,
      image: "/honey.jpg",
    },
    { id: 2, name: "Whole Grain", price: 4.2, stock: 15, image: "/bread.jpg" },
    { id: 3, name: "Greek Yogurt", price: 8.9, stock: 0, image: "/yogurt.jpg" }, // Out of stock example
    { id: 4, name: "Almond Milk", price: 3.1, stock: 24, image: "/milk.jpg" },
    {
      id: 5,
      name: "Fresh Strawberries",
      price: 5.0,
      stock: 12,
      image: "/berries.jpg",
    },
    {
      id: 6,
      name: "Artisanal Cheese",
      price: 15.75,
      stock: 5,
      image: "/cheese.jpg",
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full bg-white p-4 gap-6">
      {/* Search & Icons Header */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name, barcode (F3), or..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50">
          <Monitor size={20} />
        </button>
        <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50">
          <Package size={20} />
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              i === 0
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-y-auto pr-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-gray-100 rounded-2xl p-2 shadow-sm hover:shadow-md transition-all"
          >
            {/* Price Badge */}
            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
              <span className="text-xs font-bold text-gray-800">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
              {/* Replace with <Image /> in Next.js */}
              <div className="w-full h-full flex items-center justify-center text-gray-300">
                Img
              </div>
            </div>

            {/* Product Info */}
            <div className="px-1">
              <h3 className="text-sm font-bold text-gray-800 truncate mb-1">
                {product.name}
              </h3>
              <div className="flex justify-between items-center">
                <div className="text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Stock: </span>
                  <span
                    className={
                      product.stock === 0 ? "text-pink-500" : "text-gray-600"
                    }
                  >
                    {product.stock === 0 ? "Out of Stock" : product.stock}
                  </span>
                </div>
                <button className="p-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
