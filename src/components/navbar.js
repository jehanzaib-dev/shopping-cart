import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/context";
import "./navbarStyles.css";

const Navbar = () => {
  const { cartItems } = useContext(GlobalContext);
  const location = useLocation();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">MyShop</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Products
        </Link>
        <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
