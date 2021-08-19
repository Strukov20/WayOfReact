const ADD_MESSAGE = 'ADD-MESSAGE',
      UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const initialState = {
    dialogsData: [
        {key: 1, id: 1, name: 'Bohdan'},
        {key: 2, id: 2, name: 'Petro'},
        {key: 3, id: 3, name: 'Vasyl'},
        {key: 4, id: 4, name: 'Sofi'},
        {key: 5, id: 5, name: 'Ivan'},
        {key: 6, id: 6, name: '1'},
        {key: 7, id: 7, name: '2'},
        {key: 8, id: 8, name: '3'},
        {key: 9, id: 9, name: '4'},
        {key: 10, id: 10, name: '5'}
    ],
    messageData: [
        {id: 1, message: 'Hello', isMe: true, avatar: 'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'},
        {id: 2, message: 'I learn React', isMe: false, avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png'},
        {id: 3, message: 'How are you?', isMe: true, avatar: 'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'},
        {id: 4, message: 'Good Morning', isMe: false, avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png'},
        {id: 5, message: 'I am fine', isMe: true, avatar: 'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'}
    ],
    newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                isMe: true,
                avatar: state.messageData.avatar
            }
            const stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE: {
            const stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]
            state.newMessageText = action.newMessage;
            return stateCopy;
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