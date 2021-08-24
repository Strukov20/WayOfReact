import {randomValue} from "../redux-store";

const ADD_MESSAGE = 'ADD-MESSAGE',
      UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE',
      avatarIsMeT = 'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg',
      avatarIsMeF = 'https://image.flaticon.com/icons/png/512/194/194938.png'


//

const initialState = {
    dialogsData: [
        {id: 1, name: 'Bohdan'},
        {id: 2, name: 'Petro'},
        {id: 3, name: 'Vasyl'},
        {id: 4, name: 'Sofi'},
        {id: 5, name: 'Ivan'}
    ],
    messageData: [
        {id: 1, message: 'Hello', isMe: true, avatar: avatarIsMeT},
        {id: 2, message: 'Good Morning', isMe: false, avatar: avatarIsMeF},
        {id: 3, message: 'How are you?', isMe: true, avatar: avatarIsMeT},
        {id: 4, message: 'I learn React', isMe: false, avatar: avatarIsMeF},
        {id: 5, message: 'I am fine', isMe: true, avatar: avatarIsMeT}
    ],
    newMessageText: '',
    pageName: 'Dialogs'
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: randomValue(1000),
                message: state.newMessageText,
                isMe: true
            }
            newMessage['avatar'] = newMessage.isMe ? avatarIsMeT : avatarIsMeF
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, newMessage]
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state;
    }
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessage = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: message
    }
}

export default dialogReducer;