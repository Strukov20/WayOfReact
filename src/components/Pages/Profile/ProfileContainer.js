import React, {Component} from "react";
import './Profile.scss'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../Redux/Reducers/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId)
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

export default connect(mapStateToProps, {getUserProfile })(ProfileContainerWithRouter);