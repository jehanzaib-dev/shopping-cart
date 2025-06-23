import React, {createContext, useState, useEffect} from 'react';
import { toast } from "react-toastify";



export const GlobalContext=createContext();


export const GlobalState = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
});

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
      toast.info("Increased quantity.");  
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success("Added to cart!");
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
    {
      toast.warn("Item removed.");
    return prevItems.filter((item) => item.id !== productId);

    });
  };

  const clearCart = () => {
    toast.error("Cart cleared.");
  setCartItems([]);
  localStorage.removeItem("cart");
  };

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);

  return (
    <GlobalContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
