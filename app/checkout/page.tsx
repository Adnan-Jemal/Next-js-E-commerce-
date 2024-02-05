import BillingForm from "@/components/cards/BillingForm";
import OrderSum from "@/components/cards/OrderSum";
import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl   m-auto">
      <h1 className="pt-16 text-4xl px-6 self-center">Checkout</h1>
      <div className=" h-full flex flex-col justify-center items-center md:flex-row gap-4 py-10 px-5">
        <BillingForm />
        <OrderSum />
      </div>
    </div>
  );
};

export default page;
