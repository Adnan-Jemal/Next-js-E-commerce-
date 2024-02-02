import Image from "next/image";
import React from "react";
import computer from "../public/computer.jpeg";
import { Coins } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="bg-secondary h-72 w-64 rounded-lg flex items-center flex-col shadow-md hover:bg-primary/10 transition-colors cursor-pointer overflow-hidden">
      <Image alt="Product Image" src={computer} className="h-40" />
      <div className=" h-full w-full flex justify-evenly flex-col text-start">
        <div className="h-16 w-full flex justify-start items-center py-1 px-3"><h1 className="text-lg  ">Appel Mack book Computer laptop</h1></div>
        
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

export default ProductCard;
