"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

const AddToCartBtn = () => {
  const [added, setAdded] = useState(false);
  return (
    <Button
      size={"lg"}
      variant={"default"}
      onClick={() => {
        !added
          ? toast("Product Added To Your Cart.", {
              description:
                "Check your cart to view added products and checkout.",
            })
          : toast("Product Removed From Your Cart.", {
              description: "Click on add to cart to add it back to your cart.",
            });
        setAdded(!added);
      }}
      className={`text-white flex gap-3 mt-5 shadow-md ${
        added && "bg-gray-600 hover:bg-gray-600/80 transition-colors"
      }`}
    >
      <ShoppingCart />
      {added ? "Remove From Cart" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartBtn;
