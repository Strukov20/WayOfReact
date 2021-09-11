import {randomValue} from "../redux-store";
import {profileAPI} from "../../API/api";

const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      SET_USERS_PROFILE = 'SET_USERS_PROFILE',
      TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    profile: null,
    postsData: [
        { id: 1, message:'Hi, it is my first post', likes: 15},
        { id: 2, message:'It is my second post', likes: 45},
        { id: 3, message:'It is my third post', likes: 73}
    ],
    newPostText: '',
    pageName: 'Profile',
    isFetching: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: randomValue(1000),
                message: state.newPostText,
                likes: randomValue(300)
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                postsData: [...state.postsData],
                newPostText: action.newText
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
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

export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text}
}

export const setUsersProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

// Thunk Creators

export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        profileAPI.getProfile(userId)
            .then(data => {
                    dispatch(toggleIsFetching(false))
                    dispatch(setUsersProfile(data))
                }
            )
    }
}

export default profileReducer;