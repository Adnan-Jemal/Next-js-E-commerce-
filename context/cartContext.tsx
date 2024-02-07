"use client";

import { createContext, useEffect, useState } from "react";

type cartItemsType = {
  id: string;
  name: string;
  price: number;
  img: string;
};
type cartContexType = {
  cartItems: cartItemsType[],
  AddCartItem: (item: cartItemsType) => void,
  RemoveCartItem: (itemId: string) => void,
}

export const CartContext = createContext<cartContexType>({
  cartItems: [],
  AddCartItem: () => {},
  RemoveCartItem: () => {},
});

import React from "react";

const CartWrapper = ({ children }: { children: React.ReactNode }) => {
  const CART_STORAGE_KEY = "CartItems";

  const [cartItems, setCartItems] = useState<cartItemsType[]>(() => {
    const storedCartItems = localStorage.getItem(CART_STORAGE_KEY);
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    const storedCartItems = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const AddCartItem = (item: cartItemsType) => {
    setCartItems([...cartItems, item]);
  };

  const RemoveCartItem = (itmeId: string) => {
    setCartItems(cartItems.filter((item) => item.id != itmeId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems: cartItems, RemoveCartItem, AddCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartWrapper;
