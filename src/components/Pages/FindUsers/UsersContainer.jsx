import Users from "./Users";
import {connect} from "react-redux";
import {followingAC, setCurrentPage, setUsers} from "../../../Redux/Reducers/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        pageName: state.usersPage.pageName
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        following: (userId) => {
            dispatch(followingAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (nextPage) => {
            dispatch(setCurrentPage(nextPage))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;