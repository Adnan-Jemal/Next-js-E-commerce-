import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-6xl m-auto text-center ">
      <CheckCircle
        size={62}
        strokeWidth={3}
        className="mt-16 text-primary self-center mx-auto"
      />
      <h1 className="pt-16 text-4xl px-6 self-center font-bold text-primary">
        Order Received
      </h1>
      <h1 className="pt-8 text-xl px-6 self-center ">
        we have received your order and we will contact you soon.
      </h1>
      <div className="flex flex-col items-center justify-center  h-fit mb-20 mt-10 mx-4 gap-8 bg-primary-foreground  lg:p-10 p-3 rounded-xl shadow-md ">
        <h1 className="text-xl font-semibold mt-3">Order Information</h1>
        <div className="flex items-start mx-auto   flex-col lg:flex-row justify-between  gap-5 w-full h-full ">
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
