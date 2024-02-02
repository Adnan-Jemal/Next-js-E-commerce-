'use client'
import { createContext, useState } from "react";

const CartContext = createContext([]);

import React from "react";

const CartWrapper = ({ children }: { children: React.ReactNode }) => {
    const [cartItems,setCartItems]=useState([{}])
  return <div>cartWrapper</div>;
};

export default CartWrapper;
