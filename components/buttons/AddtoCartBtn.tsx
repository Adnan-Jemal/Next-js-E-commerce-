"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "@/context/cartContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

type propTypes = {
  id: string;
  name: string;
  img: string;
  price: number;
};

const AddToCartBtn = ({ id, name, img, price }: propTypes) => {
  const { RemoveCartItem, AddCartItem, cartItems } = useContext(CartContext);
  const [user, loading] = useAuthState(auth);
  const itemAlreadyExists = cartItems.some((item) => item.id === id);

  return (
    <Button
      size={"lg"}
      variant={"default"}
      onClick={() => {
        if (!itemAlreadyExists) {
          if (!loading && user) {
            AddCartItem({ id: id, img: img, name: name, price: price });
            toast("Product Added To Your Cart.", {
              description:
                "Check your cart to view added products and checkout.",
            });
          } else {
            toast("Please Sign In To Add Items To Cart", {
              description:
                "Sign in using Google to add items to cart and checkout",
            });
          }
        } else {
          RemoveCartItem(id);
          toast("Product Removed From Your Cart.", {
            description: "Click on add to cart to add it back to your cart.",
          });
        }
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
