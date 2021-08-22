import React from "react";
import './Users.scss'

const Users = (props) => {
    debugger;
    return (
        <>
            <div className='pageName'>{props.usersPage.pageName}</div>
            <div>
                {
                    props.usersPage.users.map((user) => <div>
                        <div className='userInfo'>
                            <div className='userInfo_avatar__button'>
                                <img src={user.avatar} alt="usersAvatar"/>
                                <div>
                                    <button className="userInfo_avatar__button_floating-button"
                                            onClick={() => { props.following(user.id)}}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                                </div>
                            </div>
                            <div className='userInfo_item'>
                                <div className='userInfo_item_desc'>
                                    <div className='userInfo_item_desc_username'>{user.username}</div>
                                    <div className='userInfo_item_desc_status'>{user.status}</div>
                                </div>
                                <div className='userInfo_item_city'>{user.location.city}, {user.location.country}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>

    )

}

export default Users;