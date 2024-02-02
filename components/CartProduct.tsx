import Image from "next/image";
import React from "react";
import computer from "../public/computer.jpeg";
import { Coins, XIcon } from "lucide-react";
import { Button } from "./ui/button";

const CartProduct = () => {
  return (
    <div className="relative bg-secondary h-32 w-full rounded-2xl flex items-center shadow-md hover:bg-primary/10 transition-colors cursor-pointer group overflow: visible">
      <Button
        variant="destructive"
        size="icon"
        className="absolute top-[0]   right-0 h-6 w-6 rounded-full shadow-md lg:hidden lg:group-hover:flex transition-all "
      >
        <XIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Image
        alt="productImage"
        src={computer}
        className="w-52 py-2 px-2 h-full rounded-3xl overflow-hidden"
      />
      <div className=" h-full w-full flex justify-evenly flex-col text-start">
        <div className="h-16 w-full flex justify-start items-center py-1 px-3">
          <h1 >Appel Mack book Computer laptop</h1>
        </div>

        <span className="h-[1px] w-full bg-primary"></span>
        <div className="flex px-3 items-center">
          <Coins className="text-primary" />
          <h1 className="text-md pl-2  py-1 ">
            Price:<span className="font-bold text-lg"> 300ብር</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
