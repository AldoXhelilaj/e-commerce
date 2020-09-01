import React from "react";
import { Link } from "react-router-dom";
import './header.style.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="option-menus">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/sign-in">Sign in</Link>
      </div>
    </div>
  );
};

export default Header;
