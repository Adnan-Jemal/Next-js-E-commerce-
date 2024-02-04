import Image from "next/image";
import React from "react";
import computer from "@/public/computer.jpeg";

const CheckoutProduct = () => {
  return (
    <div className=" h-20  flex justify-between items-center gap-3">
      <Image
        alt="productImage"
        src={computer}
        className="w-28 p-2 max-h-full aspect-square my-2 rounded-3xl overflow-hidden"
      />
      <h1 className="line-clamp-2 text-lg">Appel Mack book Computer laptop</h1>
      <h1 className=" text-xl font-bold">300ብር</h1>
    </div>
  );
};

export default CheckoutProduct;
