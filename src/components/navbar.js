import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {toggleTheme} from '../redux/features/themeSlice.js';
import "./navbarStyles.css";

const Navbar = () => {
  const theme=useSelector((state)=>state.theme.theme);
  const dispatch=useDispatch();
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.cartItems);
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
        <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        <div className="theme-toggle-switch">
          <input
            type="checkbox"
            id="theme-toggle"
            onChange={()=>dispatch(toggleTheme())}
            checked={theme === "dark"}
          />
          <label htmlFor="theme-toggle" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
