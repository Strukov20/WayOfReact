import Users from "./Users";
import {connect} from "react-redux";
import {
    following,
    setCurrentPage,
    setUsers, toggleIsDisabled,
    toggleIsFetching
} from "../../../Redux/Reducers/users-reducer";
import React, {Component} from "react";
import {usersAPI} from "../../../API/api";

class UsersAPIContainer extends Component{

    componentDidMount() {
        if (this.props.users.length === 0) {
            usersAPI.getUsers()
                .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                })
        }
    }

    showMoreUsers = () => {
        let nextPage = this.props.currentPage + 1
        this.props.setCurrentPage(nextPage)
        usersAPI.getUsers(nextPage)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
        })
    }
    render() {
        return(
            <>
                <Users pageSize={this.props.pageSize}
                       following={this.props.following}
                       pageName={this.props.pageName}
                       showMoreUsers={this.showMoreUsers}
                       users={this.props.users}
                       isFetching={this.props.isFetching}
                       toggleIsDisabled={this.props.toggleIsDisabled}
                       isDisabled={this.props.isDisabled}/>
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
        isFetching: state.usersPage.isFetching,
        toggleIsDisabled: state.usersPage.toggleIsDisabled,
        isDisabled: state.usersPage.isDisabled
    }
}

const UsersContainer = connect(mapStateToProps,
    {
    following,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    toggleIsDisabled
})(UsersAPIContainer)

export default UsersContainer;