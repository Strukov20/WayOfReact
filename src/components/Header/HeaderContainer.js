import React, {Component} from "react";
import './Header.scss'
import Header from "./Header";
import * as axios from "axios";
import {setUserData, toggleIsFetching} from "../../Redux/Reducers/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {
    getAuthData = () => {
        const baseURL = 'https://social-network.samuraijs.com/api/1.0'
        this.props.toggleIsFetching(true)
        axios.get(`${baseURL}/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.toggleIsFetching(false)
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login)
                }}
            )
    }

    componentDidMount() {
        this.getAuthData();
    }


    render() {
        return (<Header {...this.props}/>);
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
})



export default connect(mapStateToProps, {setUserData, toggleIsFetching})(HeaderContainer);