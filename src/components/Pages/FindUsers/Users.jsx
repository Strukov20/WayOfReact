import React from "react";
import './Users.scss';
const photos = 'https://image.flaticon.com/icons/png/512/194/194938.png'

const Users = (props) => {
    return (
        <>
            <div className='pageName'>{props.pageName}</div>
            <div>
                {
                    props.users.map((user) => <div>
                        <div className='userInfo'>
                            <div className='userInfo_avatar__button'>
                                <img src={user.photos.small != null ? user.photos.small : photos} alt="usersAvatar"/>
                                <div>
                                    <button className="userInfo_avatar__button_floating-button"
                                            onClick={() => { props.following(user.id)}}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                                </div>
                            </div>
                            <div className='userInfo_item'>
                                <div className='userInfo_item_desc'>
                                    <div className='userInfo_item_desc_username'>{user.name}</div>
                                    <div className='userInfo_item_desc_status'>{user.status}</div>
                                </div>
                                <div className='userInfo_item_city'>{'user.location.city'}, {'user.location.country'}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <button onClick={() => {props.showMoreUsers()}}>Show next {props.pageSize} users</button>
            </div>

        </>

    )
}

export default Users;

