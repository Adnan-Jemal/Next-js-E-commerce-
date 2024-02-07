"use client";
import React, { useContext } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { CartContext } from "@/context/cartContext";
import { useRouter } from "next/navigation";

const OrderSum = () => {
  const router = useRouter()
  const { cartItems } = useContext(CartContext);

  cartItems.length===0 && router.push('/shop')
  const subTotal = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.price,
    0
  );
  const Vat = subTotal * 0.15;
  const Total = subTotal + Vat;

  return (
    <div className=" shadow-lg dark:border-primary-foreground border-gray-50 dark:border-4 border-2 rounded-lg min-h-[60px] flex flex-col items-center justify-center lg:mx-8  lg:p-8 p-3 gap-3 ">
      {cartItems.map((item) => (
        <CheckoutProduct
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          key={item.id}
        />
      ))}

      <Separator className="my-3 " />
      <div className="w-full px-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-lg">Subtotal</p>
          <p className="font-bold text-xl">{subTotal} ብር</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-lg">
            VAT<span className="text-sm"> (15%)</span>
          </p>
          <p className="font-bold text-xl">{Vat} ብር</p>
        </div>
        <Separator className="my-3 " />
        <div className="flex justify-between items-center my-4 px-4">
          <p className="text-2xl ">Total</p>
          <p className="font-bold  text-3xl">{Total} ብር</p>
        </div>
        <Button
          type="submit"
          form="CheckoutForm"
          className="my-4 text-lg pb-1"
          size={"lg"}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default OrderSum;
