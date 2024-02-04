import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-6xl m-auto my-20 flex gap-20 flex-col">
      <div className="flex flex-col lg:flex-row justify-center items-center mx-6 gap-10">
        <Skeleton className="rounded-2xl shadow-md h-96 w-full" />
        <div className="w-full  flex flex-col lg:justify-between text-center lg:text-start lg:gap-8 gap-5">
          <Skeleton className="h-12 rounded-full" />

          <Skeleton className="h-12 w-52 self-center lg:self-start rounded-full" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />

          <Skeleton className="h-10 px-4 py-2 my-4" />
        </div>
      </div>
      <div>
        <h1 className="text-4xl mb-9 ml-3">Similar Products</h1>
        <div className="flex">
          <div className="flex lg:justify-start justify-center flex-wrap gap-10 ">
            <Skeleton className="h-72 w-64 rounded-lg" />
            <Skeleton className="h-72 w-64 rounded-lg" />
            <Skeleton className="h-72 w-64 rounded-lg" />
            <Skeleton className="h-72 w-64 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
