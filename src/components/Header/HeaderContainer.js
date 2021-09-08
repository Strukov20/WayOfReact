import React, {Component} from "react";
import './Header.scss'
import Header from "./Header";
import {setUserData, toggleIsFetching} from "../../Redux/Reducers/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../API/api";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        authAPI.getAuthData()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.toggleIsFetching(false)
                    let {id, email, login} = data.data;
                    this.props.setUserData(id, email, login)
                }}
        )
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