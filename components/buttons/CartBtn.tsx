'use client'
import React, { useContext } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";
import CartProduct from "../cards/CartProduct";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CartContext } from "@/context/cartContext";

const CartBtn = () => {
  
  const {cartItems,RemoveCartItem}= useContext(CartContext)
  
  
  return (
    <Sheet>
      <SheetTrigger>
        
        <Button variant="outline" size="icon" className="relative">
        {cartItems.length!=0&&<div className="absolute top-[-4px] right-[-4px] rounded-full bg-primary px-1"><p className="text-xs text-white">{cartItems.length}</p></div>}
          <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto pb-12">
        <SheetHeader>
          <SheetTitle className="text-4xl">Cart</SheetTitle>
          <SheetDescription className="my-3">
            Here you can remove items from your cart or continue to Checkout.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Link href={"/checkout"} className="w-full">
              <Button  type="submit" className={`w-full text-white mt-5 ${cartItems.length==0&&'hidden'}`}>
                Checkout
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
        <div className="flex flex-col justify-center items-center gap-5 py-10">
          {cartItems.map((item)=><CartProduct key={item.id} id={item.id} img={item.img} name={item.name}price={item.price} RemoveCartItem={RemoveCartItem} />)}
          {cartItems.length==0&&<h1 className="font-bold mt-40">Your Cart Is Empty</h1>}
          
          
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartBtn;
