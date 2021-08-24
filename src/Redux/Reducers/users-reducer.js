
const SET_USERS = 'SET_USERS',
    TOGGLE_FOLLOW = 'TOGGLE_FOLLOW',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


const initialState = {
    pageName: 'Users',
    users: [],
    pageSize: 3,
    currentPage: 1
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
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
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
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export default usersReducer