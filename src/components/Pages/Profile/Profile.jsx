import React from "react";
import './Profile.scss'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className="profile">
            <div className='profile__top'>
                <img src="https://w-dog.ru/wallpapers/10/6/313995315018303.jpg" alt="top_photo"/>
            </div>
            <div className='profile__info'>
                <div className='profile__avatar'>
                    <img src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png" alt="avatar_img"/>
                </div>
                <div className='profile__desc'>
                    <div className='profile__status'>
                        <div className='profile__status_title'>Status :</div>
                        <input type="text" placeholder='Type your status...'/>
                    </div>
                    <div className="profile__desc_item">
                        <div className="profile__desc_item_title">Date of Birth</div> : <div className="profile__desc_item_subtitle">20 Jun</div>
                    </div>
                    <div className="profile__desc_item">
                        <div className="profile__desc_item_title">City</div> : <div className="profile__desc_item_subtitle">Lviv</div>
                    </div>
                    <div className="profile__desc_item">
                        <div className="profile__desc_item_title">Education</div> : <div className="profile__desc_item_subtitle">UzhNU</div>
                    </div>
                    <div className="profile__desc_item">
                        <div className="profile__desc_item_title">Web-Site</div> : <a href='https://github.com/Strukov20' className="profile__desc_item_subtitle">GitHub</a>
                    </div>
                </div>
            </div>
            <hr/>
            <MyPosts/>
        </div>
    );
}
export default Profile;