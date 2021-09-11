import Users from "./Users";
import {connect} from "react-redux";
import {
    following,
    setCurrentPage,
    setUsers,
    toggleIsDisabled,
    toggleIsFetching,
    getUsers,
    onPageChanged, follow, unfollow
} from "../../../Redux/Reducers/users-reducer";
import React, {Component} from "react";

class UsersAPIContainer extends Component{

    componentDidMount() {
        this.props.getUsers();
    }

    showMoreUsers = () => {
        let nextPage = this.props.currentPage + 1
        this.props.onPageChanged(nextPage);
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
                       isDisabled={this.props.isDisabled}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}/>
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
        isDisabled: state.usersPage.isDisabled
    }
}

const UsersContainer = connect(mapStateToProps,
    {
        following,
        setUsers,
        setCurrentPage,
        toggleIsFetching,
        toggleIsDisabled,
        getUsers,
        onPageChanged,
        follow,
        unfollow
})(UsersAPIContainer)

export default UsersContainer;