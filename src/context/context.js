import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  // Load cart from localStorage on first load
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart or increment quantity
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
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

  // Remove an item by its ID
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    toast.warn("Item removed.");
  };

  // Clear the cart and localStorage
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    toast.error("Cart cleared.");
  };

  return (
    <GlobalContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
