import {randomValue} from "../redux-store";

const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        { id: 1, message:'Hi, it is my first post', likes: 15},
        { id: 2, message:'It is my second post', likes: 45},
        { id: 3, message:'It is my third post', likes: 73}
    ],
    newPostText: '',
    pageName: 'Profile'
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

export default profileReducer;