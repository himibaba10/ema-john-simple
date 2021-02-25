/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from "../../images/logo.png";
import header from "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={logo}/>
            <nav>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>    
            </nav>
        </div>
    );
};

export default Header;