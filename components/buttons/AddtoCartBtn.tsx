"use client";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

const AddToCartBtn = () => {
  return (
    <Button
      size={"lg"}
      variant={"default"}
      onClick={() =>
        toast("Product Added To Your Cart.", {
          description: "Check your cart to view added products and checkout",
        })
      }
      className="text-white flex gap-3 mt-5 shadow-md"
    >
      <ShoppingCart />
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
