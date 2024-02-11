"use client";
import { createContext, useEffect, useState } from "react";

type cartItemsType = {
  id: string;
  name: string;
  price: number;
  img: string;
};

type cartContexType = {
  cartItems: cartItemsType[];
  AddCartItem: (item: cartItemsType) => void;
  RemoveCartItem: (itemId: string) => void;
  ClearCartItems: () => void;
};

export const CartContext = createContext<cartContexType>({
  cartItems: [],
  AddCartItem: () => {},
  RemoveCartItem: () => {},
  ClearCartItems: () => {},
});

import React from "react";

const CartWrapper = ({ children }: { children: React.ReactNode }) => {
  const CART_STORAGE_KEY = "CartItems";

  const [cartItems, setCartItems] = useState<cartItemsType[]>([]);

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem(CART_STORAGE_KEY);
      setCartItems(storedCartItems ? JSON.parse(storedCartItems) : []);
    }
  }, []);

  const AddCartItem = (item: cartItemsType) => {
    setCartItems([...cartItems, item]);
    // Update localStorage when adding an item
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify([...cartItems, item])
    );
  };

  const ClearCartItems = () => {
    setCartItems([]);
    // Remove localStorage when clearing cart
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  const RemoveCartItem = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    // Update localStorage when removing an item
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems.filter((item) => item.id !== itemId))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        RemoveCartItem,
        AddCartItem,
        ClearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartWrapper;
