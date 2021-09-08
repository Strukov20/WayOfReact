import React from "react";
import './Users.scss';
import Preloader from "../../common/preloader/preloader";
import photos from '../../../Assets/photos.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../API/api";

const Users = (props) => {
    return (
        <>
            <div className='pageName'>{props.pageName}</div>
            <div>
                {
                    props.users.map((user) => <div>
                        <div className='userInfo'>
                            <div className='userInfo_avatar__button'>
                                <NavLink to={`profile/${user.id}`}>
                                    <img src={user.photos.small != null ? user.photos.small : photos} alt="usersAvatar"/>
                                </NavLink>
                                <div>
                                    <button disabled={props.isDisabled.some(id => id === user.id)} className="userInfo_avatar__button_floating-button"
                                            onClick={() => {
                                                if (user.followed === false) {
                                                    props.toggleIsDisabled(true, user.id)
                                                    usersAPI.followAPI(user.id)
                                                        .then(data => {
                                                            if (data.resultCode === 0) {
                                                                props.following(user.id)
                                                            }
                                                            props.toggleIsDisabled(false, user.id)
                                                        })
                                                }
                                                if(user.followed === true){
                                                    props.toggleIsDisabled(true, user.id)
                                                    usersAPI.unfollowAPI(user.id)
                                                        .then(data => {
                                                            if (data.resultCode === 0) {
                                                                props.following(user.id)
                                                            }
                                                            props.toggleIsDisabled(false, user.id)
                                                        })
                                                }
                                            }
                                            }>{user.followed ? 'Unfollow' : 'Follow'}</button>

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
            <div className='buttons'>
                {
                    props.isFetching
                    ? <Preloader/>
                    : <button className='buttons_button_SM' onClick={() => {props.showMoreUsers()}}>Show next {props.pageSize} users</button>
                }
            </div>
        </>
    )
}
export default Users;

