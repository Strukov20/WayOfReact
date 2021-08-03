import React from "react";
import logo from '../../logo.svg'
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <img className='header__logo' src={logo} alt="logo"/>
        </header>
    );
}

export default Header;