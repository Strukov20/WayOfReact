import React from "react";
import './Profile.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

    return (
        <div className="profile">
            <div className='profile__top'>
                <img src="https://persha.ua/wp-content/uploads/2021/02/twitter-reklama-1600x400-pyks-5.jpeg" alt="top_photo"/>
            </div>
            <ProfileInfo/>
            <hr/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;