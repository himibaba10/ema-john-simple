import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../resources/images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><img src={logo} width="250" alt="logo" /></Link>
            <nav className="main-menu">
                <ul>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/order">Order Review</Link></li>
                    <li><Link to="/inventory">Manage Inventory Here</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;