import React from "react";
import logo from '../images/logo.svg';
import './HeaderLogo.css';

function HeaderLogo() {
    return (
        <div className="header-logo">
            <img src={logo} className="" alt="Company Logo" />
        </div>
        
    );
}

export default HeaderLogo;