import React from "react";
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

const CartBtn = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon">
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
              <Button type="submit" className="w-full text-white mt-5">
                Checkout
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
        <div className="flex flex-col justify-center items-center gap-5 py-10">
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartBtn;