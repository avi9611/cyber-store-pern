import { useState, useEffect } from "react";
import { productStore } from "../store/productStore";
import {
  Inventory as PackageIcon,
  AddCircle as PlusCircleIcon,
  Refresh as RefreshCwIcon,
} from "@mui/icons-material";
import ProductCard from "../components/ProductCard";
import AddProductModal from "../components/AddProductModal";

export default function HomePage({ searchQuery }) {
  const { products, loading, error, fetchProducts } = productStore();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="cyberpunk-bg min-h-screen flex flex-col items-center justify-start py-8 px-4">
      {/* Cyberpunk Header */}
      <h1 className="text-white text-4xl font-bold neon-border p-4 mb-6">
        Cyberpunk Inventory
      </h1>

      <main className="max-w-6xl w-full">
        <div className="flex justify-between items-center mb-8">
          <button
            className="relative px-6 py-3 font-bold text-white uppercase tracking-widest bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-2 border-yellow-400 rounded-lg shadow-lg transition-all duration-300 hover:shadow-yellow-500/80 hover:scale-110 active:scale-95 before:absolute before:inset-0 before:bg-yellow-400 before:blur-lg before:opacity-20 animate-pulse"
            onClick={() => setModalOpen(true)}
          >
            <PlusCircleIcon className="size-6 mr-2 text-white drop-shadow-[0_0_12px_rgba(255,255,0,1)]" />
            Add Product
          </button>

          <button
            className="relative w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 border-2 border-blue-400 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/80 hover:scale-110 active:scale-95 before:absolute before:inset-0 before:bg-blue-400 before:blur-lg before:opacity-20 animate-pulse"
            onClick={fetchProducts}
          >
            <RefreshCwIcon className="size-6 text-white drop-shadow-[0_0_12px_rgba(0,255,255,1)]" />
          </button>
        </div>

        <AddProductModal open={modalOpen} handleClose={() => setModalOpen(false)} />

        {error && <div className="alert alert-error mb-8">{error}</div>}

        {filteredProducts.length === 0 && !loading ? (
          <div className="flex flex-col justify-center items-center h-96 space-y-4">
            <div className="bg-base-100 rounded-full p-6">
              <PackageIcon className="size-12" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold text-white neon-border">No products found</h3>
              <p className="text-gray-300 max-w-sm">
                {searchQuery
                  ? "Try searching for something else."
                  : "Get started by adding your first product to the inventory."}
              </p>
            </div>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loading loading-spinner loading-lg" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">

            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
