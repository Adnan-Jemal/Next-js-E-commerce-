'use client'
import BillingForm from "@/components/cards/BillingForm";
import OrderSum from "@/components/cards/OrderSum";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/cartContext";
import Link from "next/link";

import React, { useContext } from "react";

const Page = () => {
  const {cartItems} = useContext(CartContext)
  
  const cartEmpty =cartItems.length === 0
  return (
    <div className="max-w-6xl   mx-auto">
      <h1 className="pt-16 text-4xl px-6 self-center">Checkout</h1>
      <div className={` ${!cartEmpty&&'hidden'} flex flex-col items-center justify-center  h-full my-36 mx-6  text-center gap-8 bg-primary-foreground md:p-20 p-10 rounded-xl shadow-sm `}>
        <h1 className="lg:text-3xl text-xl">Your cart is empty. Please add some products to your cart before you checkout.</h1>
        <Link href={'/shop'}><Button className="text-white lg:text-lg text-base" size={"lg"} >Continue Shopping</Button></Link>
      </div>

      <div className={`h-full flex flex-col justify-center items-start md:flex-row gap-4 py-10 px-5 ${cartEmpty && 'hidden'}`}>

        <BillingForm />
        <OrderSum />
      </div>
    </div>
  );
};

export default Page;
