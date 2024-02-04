import React from "react";

import CheckoutProduct from "./CheckoutProduct";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const OrderSum = () => {
  return (
    <div className=" shadow-lg dark:border-primary-foreground border-gray-50 dark:border-4 border-2 rounded-lg min-h-[60px] flex flex-col items-center justify-center lg:mx-8 mx-3 lg:p-8 p-3 gap-3 ">
      <CheckoutProduct />
      <CheckoutProduct />
      <Separator className="my-3 " />
      <div className="w-full px-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-lg">Subtotal</p>
          <p className="font-bold text-xl">2000 ብር</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-lg">VAT</p>
          <p className="font-bold text-xl">300 ብር</p>
        </div>
        <Separator className="my-3 " />
        <div className="flex justify-between items-center my-4 px-4">
          <p className="text-2xl ">Total</p>
          <p className="font-bold  text-3xl">2300 ብር</p>
        </div>
        <Button className="my-4 text-lg pb-1" size={"lg"}>
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default OrderSum;
