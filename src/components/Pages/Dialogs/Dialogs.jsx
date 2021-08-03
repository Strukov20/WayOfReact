import React from "react";
import './Dialogs.scss'
import styles from '../../ActiveLinks.module.scss'
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";

function Dialogs(props) {
    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                <div  className="dialogs__item">
                    <NavLink activeClassName={styles.activeLinkDialog} to='/dialogs/1'>Bohdan</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink activeClassName={styles.activeLinkDialog} to='/dialogs/2'>Ivan</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink activeClassName={styles.activeLinkDialog} to='/dialogs/3'>Oksanka</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink activeClassName={styles.activeLinkDialog} to='/dialogs/4'>Petro</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink activeClassName={styles.activeLinkDialog} to='/dialogs/5'>Mykola</NavLink>
                </div>
            </div>
            <hr/>
            <div className="messages">
                <Message />
                <Message />
                <Message />
            </div>

        </div>
    );
}
export default Dialogs;