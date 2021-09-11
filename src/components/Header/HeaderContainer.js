import React, {Component} from "react";
import './Header.scss'
import Header from "./Header";
import {getAuthData, setUserData, toggleIsFetching} from "../../Redux/Reducers/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuthData()
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



export default connect(mapStateToProps, {setUserData, toggleIsFetching, getAuthData})(HeaderContainer);