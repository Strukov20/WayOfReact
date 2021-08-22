
const avatarIsMeT = 'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg',
    avatarIsMeF = 'https://image.flaticon.com/icons/png/512/194/194938.png',
    UNFOLLOW = 'UNFOLLOW',
    FOLLOW = 'FOLLOW',
    SET_USERS = 'SET_USERS',
    TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'


const initialState = {
    pageName: 'Users',
    users: [
        {id: 1, username: 'Bohdan', followed: true, avatar: avatarIsMeT, location: {city: 'Lviv', country: 'Ukraine', }, status: 'Hello, i`m learn React'},
        {id: 2, username: 'Oksanka', followed: false, avatar: avatarIsMeF, location: {city: 'Lviv', country: 'Ukraine', }, status: 'Hello, i`m learn React'},
        {id: 3, username: 'Ivan', followed: true, avatar: avatarIsMeT, location: {city: 'Lviv', country: 'Ukraine', }, status: 'Hello, i`m learn React'},
        {id: 4, username: 'Natalie', followed: false, avatar: avatarIsMeF, location: {city: 'Lviv', country: 'Ukraine', }, status: 'Hello, i`m learn React'},
        {id: 5, username: 'Andri' , followed: true, avatar: avatarIsMeT, location: {city: 'Lviv', country: 'Ukraine', }, status: 'Hello, i`m learn React'}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map((users) => {
                    if(users.id === action.userId) {
                        return {...users, followed: !users.followed}
                    }
                    return users
                })
            }
        }
        // case UNFOLLOW: {
        //     return {
        //         ...state,
        //         users: state.users.map((users) => {
        //             if(users.id === action.userId) {
        //                 return {...users, followed: false}
        //             }
        //             return users
        //         })
        //     }
        // }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followingAC = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId
    }
}

// export const followAC = (userId) => {
//     return {
//         type: FOLLOW,
//         userId
//     }
// }
// export const unFollowAC = (userId) => {
//     return {
//         type: UNFOLLOW,
//         userId
//     }
// }
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer