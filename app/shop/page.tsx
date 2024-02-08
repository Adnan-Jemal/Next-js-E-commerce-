'use client'
import ProductCard from "@/components/cards/productCard";
import ProductList from "@/components/sections/ProductList";

const Shop = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-full   max-w-6xl  flex-col m-auto my-20 text-center ">
        <h1 className="text-3xl mb-10  ">Products</h1>
        <div className="flex justify-center flex-wrap gap-9">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Shop;
