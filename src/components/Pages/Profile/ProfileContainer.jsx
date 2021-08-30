import React, {Component} from "react";
import './Profile.scss'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile, toggleIsFetching} from "../../../Redux/Reducers/profile-reducer";

class ProfileContainer extends Component {

    getUserProfile = () => {
        const baseURL = 'https://social-network.samuraijs.com/api/1.0/'
        this.props.toggleIsFetching(true)
        axios.get(`${baseURL}profile/2`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsersProfile(response.data)
            })
    }

    componentDidMount() {
        this.getUserProfile()
    }

    render() {
        return <Profile {...this.props} profile = {this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUsersProfile,
    toggleIsFetching
})(ProfileContainer);