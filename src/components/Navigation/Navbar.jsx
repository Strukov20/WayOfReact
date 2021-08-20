import React from "react";
import './Navbar.scss'
import './Sidebar/Sidebar.scss'
import styles from '../ActiveLinks.module.scss'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

function Navbar(props) {
    const sidebar = props.sideBar.sidebarItems.map((sidebar) => <Sidebar img={sidebar.img} name={sidebar.name} id={sidebar.id} key={sidebar.key}/>)

    return (
        <nav className='nav'>
            <hr/>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/profile">Profile</NavLink>
            </div>
            <hr/>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/dialogs">Dialogs</NavLink>
            </div>
            <hr/>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/news">News</NavLink>
            </div>
            <hr/>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/music">Music</NavLink>
            </div>
            <hr/>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/friends">Find Friends</NavLink>
            </div>
            <hr/>
            <div className='nav__items'>
                <img src="" alt=""/>
                <NavLink activeClassName={styles.activeLinkNav} className='nav__item' to="/settings">Settings</NavLink>
            </div>
            <hr/>
            <div className='sidebar'>
                <div className='sidebar__title'>FRIENDS</div>
                {sidebar}
            </div>
        </nav>
    );
}

export default Navbar;