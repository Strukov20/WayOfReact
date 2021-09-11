import {usersAPI} from "../../API/api";

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

// Thunk Creators

export const getUsers = () => {
    return (dispatch) => {
        if (initialState.users.length === 0) {
            dispatch(toggleIsFetching(true));
            usersAPI.getUsers()
                .then(data => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setUsers(data.items));
                })
        }
    }
}

export const onPageChanged = (nextPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(nextPage))
        usersAPI.getUsers(nextPage)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsDisabled(true, userId))
        usersAPI.followAPI(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(following(userId))
                }
                dispatch(toggleIsDisabled(false, userId))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsDisabled(true, userId))
        usersAPI.unfollowAPI(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(following(userId))
                }
                dispatch(toggleIsDisabled(false, userId))
            })
    }
}


export default usersReducer