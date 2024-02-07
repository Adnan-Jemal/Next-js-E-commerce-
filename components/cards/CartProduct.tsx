import Image from "next/image";
import React from "react";
import { Coins, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";


type propTypes = {
  id: string;
  name: string;
  img: string;
  price: number;
  RemoveCartItem: (itemId: string) => void;
};
const CartProduct = ({ id, name, img, price, RemoveCartItem }: propTypes) => {
  return (
    
      <div className="relative bg-secondary h-32 w-full rounded-2xl flex items-center shadow-md hover:bg-primary/10 transition-colors group overflow: visible">
        <Button
          variant="destructive"
          size="icon"
          className="absolute top-[-6px]   right-[-5px] h-6 w-6 rounded-full shadow-md lg:hidden lg:group-hover:flex transition-all "
          onClick={() => {
            RemoveCartItem(id);
            toast("Product Removed From Your Cart.", {
              description: "Click on add to cart to add it back to your cart.",
            });
          }}
        >
          <XIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Image
          width={100}
          height={100}
          alt="productImage"
          src={img}
          className="w-52 py-2 px-2 h-full rounded-3xl overflow-hidden"
        />
        <div className=" h-full w-full flex justify-evenly flex-col text-start">
          <div className="h-16 w-full flex justify-start items-center py-1 px-3">
            <h1 className="line-clamp-2">{name}</h1>
          </div>

          <span className="h-[1px] w-full bg-primary"></span>
          <div className="flex px-3 items-center">
            <Coins className="text-primary" />
            <h1 className="text-md pl-2  py-1 ">
              <span className="font-bold text-lg"> {price}ብር</span>
            </h1>
          </div>
        </div>
      </div>
  
  );
};

export default CartProduct;
