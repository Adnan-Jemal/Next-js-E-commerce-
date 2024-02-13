import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-6xl   mx-auto ">
      <h1 className="py-16 text-4xl px-6 self-center ">Your Orders</h1>

      <div className="w-[85%] m-auto grid md:grid-cols-7 grid-cols-4 px-5 py-4 items-center justify-center text-center gap-4">
        <h2 className="col-span-1 font-semibold ">Date</h2>
        <h2 className="col-span-2 hidden md:block font-semibold">Orderer</h2>
        <h2 className="self-center font-semibold">Status</h2>
        <h2 className="hidden md:block font-semibold">Items</h2>
        <h2 className="font-semibold self-start text-start col-span-2 pl-3 md:pl-4">
          Total &#40;ብር&#41;
        </h2>
      </div>
      <div className="md:w-[85%] w-[95%] h-auto shadow-lg dark:border-primary-foreground border-gray-50 dark:border-4 border-2 rounded-lg md:px-5 px-2 py-10 mx-auto  mb-44 flex flex-col items-center justify-center gap-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    </div>
  );
};

export default Loading;
