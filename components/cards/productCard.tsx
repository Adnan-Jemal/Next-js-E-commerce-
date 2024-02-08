import Image from "next/image";
import React from "react";
import computer from "@/public/computer.jpeg";
import { Coins } from "lucide-react";
import Link from "next/link";

type propType = {
  id: string;
  name: string;
  price: Number;
  img: string;
};

const ProductCard = ({ id, name, price, img }: propType) => {
  return (
    <Link href={`/shop/${id}`}>
      <div className="bg-secondary/10 dark:bg-secondary/50 h-72 w-64 rounded-lg grid items-center grid-rows-2 shadow-md hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-pointer overflow-hidden group">
        <Image
          alt="Product Image"
          src={img}
          width={500}
          height={500}
          className="h-40 group-hover:scale-105  transition-all"
        />
        <div className=" h-full w-full flex justify-evenly flex-col text-start">
          <div className="h-16 w-full flex justify-start items-center py-1 px-3">
            <h1 className="text-lg line-clamp-2 ">{name}</h1>
          </div>

          <span className="h-[1px] w-full bg-primary"></span>
          <div className="flex px-3 items-center">
            <Coins className="text-primary" />
            <h1 className="text-md pl-2  py-1 ">
              Price:
              <span className="font-bold text-lg"> {price?.toString()}ብር</span>
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
