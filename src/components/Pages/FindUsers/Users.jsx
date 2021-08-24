import React, {Component} from "react";
import './Users.scss'
import * as axios from "axios";
const photos = 'https://image.flaticon.com/icons/png/512/194/194938.png'


class Users extends Component{
    getUsers = (nextPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.pageSize}`)
            .then(response => {
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
        return (
            <>
                <div className='pageName'>{this.props.pageName}</div>
                <div>
                    {
                        this.props.users.map((user) => <div>
                            <div className='userInfo'>
                                <div className='userInfo_avatar__button'>
                                    <img src={user.photos.small != null ? user.photos.small : photos} alt="usersAvatar"/>
                                    <div>
                                        <button className="userInfo_avatar__button_floating-button"
                                                onClick={() => { this.props.following(user.id)}}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                                    </div>
                                </div>
                                <div className='userInfo_item'>
                                    <div className='userInfo_item_desc'>
                                        <div className='userInfo_item_desc_username'>{user.name}</div>
                                        <div className='userInfo_item_desc_status'>{user.status}</div>
                                    </div>
                                    <div className='userInfo_item_city'>{'user.location.city'}, {'user.location.country'}</div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <button onClick={() => {this.showMoreUsers()}}>Show next {this.props.pageSize} users</button>
                </div>

            </>

        )
    }



}

export default Users;