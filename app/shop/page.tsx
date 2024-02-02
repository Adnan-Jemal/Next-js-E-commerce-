import NavBar from "@/components/NavBar";
import ProductCard from "@/components/productCard";

const page = () => {
  return (
    <div>
      <NavBar />

      <div className="flex justify-center items-center   max-w-6xl  flex-col m-auto my-20 text-center ">
        <h1 className="text-3xl mb-10  ">Products</h1>
        <div className="flex justify-center flex-wrap gap-9">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default page;
