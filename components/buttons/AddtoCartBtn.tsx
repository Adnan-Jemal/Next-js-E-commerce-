"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "@/context/cartContext";

type propTypes = {
  id: string;
  name: string;
  img: string;
  price: number;
};

const AddToCartBtn = ({ id, name, img, price }: propTypes) => {
  const { RemoveCartItem, AddCartItem, cartItems } = useContext(CartContext);

  const itemAlreadyExists = cartItems.some((item) => item.id === id);

  return (
    <Button
      size={"lg"}
      variant={"default"}
      onClick={() => {
        !itemAlreadyExists
          ? !itemAlreadyExists &&
            AddCartItem({ id: id, img: img, name: name, price: price })
          : RemoveCartItem(id);
        !itemAlreadyExists
          ? toast("Product Added To Your Cart.", {
              description:
                "Check your cart to view added products and checkout.",
            })
          : toast("Product Removed From Your Cart.", {
              description: "Click on add to cart to add it back to your cart.",
            });
      }}
      className={`text-white flex gap-3 mt-5 shadow-md ${
        itemAlreadyExists &&
        "bg-gray-600 hover:bg-gray-600/80 transition-colors"
      }`}
    >
      <ShoppingCart />
      {itemAlreadyExists ? "Remove From Cart" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartBtn;
