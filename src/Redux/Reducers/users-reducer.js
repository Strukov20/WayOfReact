
const SET_USERS = 'SET_USERS',
    TOGGLE_FOLLOW = 'TOGGLE_FOLLOW',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_DISABLED = 'TOGGLE_IS_DISABLED'


const initialState = {
    pageName: 'Users',
    users: [],
    pageSize: 3,
    currentPage: 1,
    isFetching: false,
    isDisabled: []
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_DISABLED: {
            return {
                ...state,
                isDisabled: action.isDisabled
                    ? [...state.isDisabled, action.userId]
                    : state.isDisabled.filter(id => id !== action.userId)

            }
        }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
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

export const following = (userId) => {
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
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleIsDisabled = (isDisabled, userId) => {
    return {
        type: TOGGLE_IS_DISABLED,
        isDisabled,
        userId
    }
}

export default usersReducer