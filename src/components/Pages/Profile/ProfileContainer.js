import React, {Component} from "react";
import './Profile.scss'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUsersProfile, toggleIsFetching} from "../../../Redux/Reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../../API/api";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.toggleIsFetching(true)
        profileAPI.getUserProfile(userId)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsersProfile(data)
            })
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