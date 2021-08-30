import React from "react";
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return (
        <>
            <div className='pageName'>Profile</div>
            <div className="profile">
                <div className='profile__top'>
                    <img src="https://persha.ua/wp-content/uploads/2021/02/twitter-reklama-1600x400-pyks-5.jpeg" alt="top_photo"/>
                </div>
                <ProfileInfo profile={props.profile} />
                <hr/>
                <MyPostsContainer/>
            </div>
        </>

    );
}

export default Profile;