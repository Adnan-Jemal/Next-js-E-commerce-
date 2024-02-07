import Image from "next/image";
import React from "react";


type propTypes = {
  id: string;
  name: string;
  img: string;
  price: number;
};

const CheckoutProduct = ({ id, name, img, price }: propTypes) => {
  return (
    <div className=" h-20  flex justify-between items-center gap-3">
      <Image
        width={50}
        height={50}
        alt="productImage"
        src={img}
        className="w-28 p-2 max-h-full aspect-square my-2 rounded-3xl overflow-hidden"
      />
      <h1 className="line-clamp-2 text-lg">{name}</h1>
      <h1 className=" text-xl font-bold">{price}ብር</h1>
    </div>
  );
};

export default CheckoutProduct;
