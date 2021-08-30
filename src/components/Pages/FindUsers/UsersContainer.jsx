import Users from "./Users";
import {connect} from "react-redux";
import {
    following,
    setCurrentPage,
    setUsers,
    toggleIsFetching
} from "../../../Redux/Reducers/users-reducer";
import React, {Component} from "react";
import * as axios from "axios";

class UsersAPIContainer extends Component{
    getUsers = (nextPage) => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.getUsers()
        }

    }

    showMoreUsers = () => {
        let nextPage = this.props.currentPage + 1
        this.props.setCurrentPage(nextPage)
        this.getUsers(nextPage)
    }
    render() {
        return(
            <>
                <Users pageSize={this.props.pageSize}
                       following={this.props.following}
                       pageName={this.props.pageName}
                       showMoreUsers={this.showMoreUsers}
                       users={this.props.users}
                       isFetching={this.props.isFetching}/>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        pageName: state.usersPage.pageName,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps,
    {
    following,
    setUsers,
    setCurrentPage,
    toggleIsFetching
})(UsersAPIContainer)

export default UsersContainer;