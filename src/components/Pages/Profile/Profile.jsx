import React from "react";
import './Profile.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className="profile">
            <div className='profile__top'>
                <img src="https://w-dog.ru/wallpapers/10/6/313995315018303.jpg" alt="top_photo"/>
            </div>
            <ProfileInfo/>
            <hr/>
            <MyPosts/>
        </div>
    );
}

export default Profile;