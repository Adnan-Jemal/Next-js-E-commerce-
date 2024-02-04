import ProductCard from "@/components/cards/productCard";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center   max-w-6xl  flex-col m-auto my-20 text-center ">
        <h1 className="text-3xl mb-10  ">Products</h1>
        <div className="flex justify-center flex-wrap gap-9">
          <ProductCard id={"1"} />
          <ProductCard id={"2"} />
          <ProductCard id={"3"} />
          <ProductCard id={"4"} />
          <ProductCard id={"5"} />
        </div>
      </div>
    </div>
  );
};

export default page;
