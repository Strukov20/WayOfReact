import React from "react";
import './UserInfo.scss'

const UserInfo = (props) => {
    return (
        <div className='userInfo' >
            <div className='userInfo_avatar__button'>
                <img src={props.avatar} alt="usersAvatar"/>
                <div>
                    <button className="userInfo_avatar__button_floating-button">{props.follow ? 'Follow' : "Unfollow"}</button>
                </div>
            </div>
            <div className='userInfo_item'>
                <div className='userInfo_item_desc'>
                    <div className='userInfo_item_desc_username'>{props.username}</div>
                    <div className='userInfo_item_desc_status'>{props.status}</div>
                </div>
                <div className='userInfo_item_city'>{props.city}</div>
            </div>

        </div>
    )
}

export default UserInfo;