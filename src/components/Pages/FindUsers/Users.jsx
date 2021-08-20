import React from "react";
import './Users.scss'
import UserInfo from "./UserInfo/UserInfo";

const Users = (props) => {
    const usersElements = props.usersPage.users.map((user) => <UserInfo id={user.id} username={user.username} follow={user.follow} avatar={user.avatar} city={user.city} status={user.status} /> )

    return (
        <>
            <div className='pageName'>{props.usersPage.pageName}</div>
            <div>
                {usersElements}
            </div>
        </>

    )

}

export default Users;