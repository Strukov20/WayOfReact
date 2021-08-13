import React from "react";
import {addMessageAC, updateNewMessage} from "../../../Redux/Reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
    const state = props.store.getState();

    const onSendMessage = () => {
        props.store.dispatch(addMessageAC());
    }
    const onMessageChange = (message) => {
        props.store.dispatch(updateNewMessage(message))
    }
    return ( <Dialogs onSendMessage={onSendMessage}
                      onMessageChange={onMessageChange}
                      newMessageText={state.dialogsPage.newMessageText}
                      dialogsData={state.dialogsPage.dialogsData}
                      messageData={state.dialogsPage.messageData}
    />);
}
export default DialogsContainer;