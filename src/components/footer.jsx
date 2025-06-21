import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyShop. Built with ❤️ by Jehanzaib</p>
    </footer>
  );
};

export default Footer;
