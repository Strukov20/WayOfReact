import React from "react";
import './Navbar.scss'
import styles from '../ActiveLinks.module.scss'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/profile">Profile</NavLink>
            </div>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/dialogs">Dialogs</NavLink>
            </div>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/news">News</NavLink>
            </div>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/music">Music</NavLink>
            </div>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;