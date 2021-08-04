import React from "react";
import './../Dialogs.scss'
import styles from '../../../ActiveLinks.module.scss'
import {NavLink} from "react-router-dom";

function DialogItem (props){
    const path = '/dialogs/' + props.id;
    return (
        <div className="dialogs__item">
            <NavLink activeClassName={styles.activeLinkDialog} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;