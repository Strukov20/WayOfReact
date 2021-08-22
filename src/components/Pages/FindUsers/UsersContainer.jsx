import Users from "./Users";
import {connect} from "react-redux";
import {followAC, followingAC, setUsers, unFollowAC} from "../../../Redux/Reducers/users-reducer";

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        following: (userId) => {
            dispatch(followingAC(userId))
        },
        // follow: (userId) => {
        //     dispatch(followAC(userId))
        // },
        // unfollow: (userId) =>{
        //     dispatch(unFollowAC(userId))
        // },
        setUsers: (users) => {
            dispatch(setUsers(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;