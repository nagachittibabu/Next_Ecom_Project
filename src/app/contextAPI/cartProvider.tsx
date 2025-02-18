// components/Cart.js
"use client"
import React, { createContext, useContext, useState } from 'react';

const CartContext=createContext();

const CartProvider = ({children}) => {
  const[quantity,setQuantity]=useState("0");
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };  
  return (
    <CartContext.Provider value={{items,addItemToCart,removeItemFromCart,setQuantity,quantity}}>
         {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


export const useCartContext = () => useContext(CartContext);   
