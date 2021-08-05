import React from "react";
import './Sidebar.scss'

function Sidebar (props) {



    return (
        <div className="sidebar__item">
            <img src={props.img} alt={props.key}/>
            <div className='sidebar__item_name'>{props.name}</div>
        </div>
    )
}

export default Sidebar;