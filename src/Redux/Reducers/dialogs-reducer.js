const ADD_MESSAGE = 'ADD-MESSAGE',
      UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                isMe: true
            }
            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;
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