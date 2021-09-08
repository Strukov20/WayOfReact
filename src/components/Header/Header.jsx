import React from "react";
import logo from '../../logo.svg'
import './Header.scss'
import {NavLink} from "react-router-dom";
import avatar from "../../Assets/photos.png";
import login from "../../Assets/login.png";

function Header(props) {
    return (
        <header className="header">
            <img className='header__logo' src={logo} alt="logo"/>

            <div className='login_block'><NavLink className='login_block_a' to={'/login'}>{props.isAuth
                    ? <div className='login_block_authorize'><img src={avatar} alt=""/>{props.login}</div>
                    : <div className='login_block_authorize'><img src={login} alt=""/>{props.login}</div>}</NavLink></div>
        </header>
    );
}

export default Header;