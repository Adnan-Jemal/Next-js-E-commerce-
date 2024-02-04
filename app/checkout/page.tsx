import BillingForm from "@/components/cards/BillingForm";
import OrderSum from "@/components/cards/OrderSum";
import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl   m-auto">
      <div className=" h-full flex flex-col justify-center items-center md:flex-row gap-2 my-10">
        <BillingForm />
        <OrderSum />
      </div>
    </div>
  );
};

export default page;
