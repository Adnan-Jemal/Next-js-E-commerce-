import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center   max-w-6xl  flex-col m-auto my-10 text-center ">
       
        <div className="flex justify-center flex-wrap gap-9">
          <Skeleton className="h-72 w-64 rounded-lg" />
          <Skeleton className="h-72 w-64 rounded-lg" />
          <Skeleton className="h-72 w-64 rounded-lg" />
          <Skeleton className="h-72 w-64 rounded-lg" />
          <Skeleton className="h-72 w-64 rounded-lg" />
          <Skeleton className="h-72 w-64 rounded-lg" />
          <Skeleton className="h-72 w-64 rounded-lg" />
          <Skeleton className="h-72 w-64 rounded-lg" />
          
        </div>
      </div>
    </div>
  );
};

export default Loading;
