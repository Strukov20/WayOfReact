import React from "react";
import './ProfileInfo.scss'
import Preloader from "../../../common/preloader/preloader";
import photos from '../../../Assets/photos.png'

function ProfileInfo(props) {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className='profile__info'>
            <div className='profile__avatar'>
                <img src={props.profile.photos.large || photos} alt="avatar_img"/>
            </div>
            <div className='profile__desc'>
                <div className='profile__status'>
                    <div className='profile__status_title'>Status : {props.profile.aboutMe ? props.profile.aboutMe : <input type="text" placeholder='Type your status...'/>}</div>
                </div>
                <div className="profile__desc_item">
                    <div className="profile__desc_item_title">Full Name</div> : <div className="profile__desc_item_subtitle">{props.profile.fullName}</div>
                </div>
                <div className="profile__desc_item">
                    <div className="profile__desc_item_title">Date of Birth</div> : <div className="profile__desc_item_subtitle">{props.profile.userId}</div>
                </div>
                <div className="profile__desc_item">
                    <div className="profile__desc_item_title">Looking for a JOB</div> : <div className="profile__desc_item_subtitle">{props.profile.lookingForAJob ? 'Yes!' : 'No!'}</div>
                </div>
                <div className="profile__desc_item">
                    <div className="profile__desc_item_title">Web-Site</div> : <a href={props.profile.contacts.github} className="profile__desc_item_subtitle">{props.profile.contacts.github || "No information"} </a>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;