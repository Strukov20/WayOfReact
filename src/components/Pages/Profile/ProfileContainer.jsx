import React, {Component} from "react";
import './Profile.scss'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile, toggleIsFetching} from "../../../Redux/Reducers/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    getUserProfile = () => {
        let userId = this.props.match.params.userId

        const baseURL = 'https://social-network.samuraijs.com/api/1.0/'
        this.props.toggleIsFetching(true)
        axios.get(`${baseURL}profile/${userId || 19241}`)
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

let ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUsersProfile,
    toggleIsFetching
})(ProfileContainerWithRouter);