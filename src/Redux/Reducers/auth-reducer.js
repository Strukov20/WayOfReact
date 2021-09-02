
const SET_USER_DATA = 'SET_USER_DATA',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.authData,
                isAuth: true
            }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        authData: {
            userId,
            email,
            login
        }
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export default authReducer;