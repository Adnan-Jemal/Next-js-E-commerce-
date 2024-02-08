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
    <div className=" h-20 w-full m-auto  grid grid-cols-3 gap-2 items-center text-center">
      <Image
        width={50}
        height={50}
        alt="productImage"
        src={img}
        className="w-24 p-2 h-full aspect-square my-2 rounded-3xl overflow-hidden"
      />
      <h1 className="line-clamp-2 text-lg text-start">{name}</h1>
      <h1 className=" text-lg font-bold">{price}ብር</h1>
    </div>
  );
};

export default CheckoutProduct;
