import React from "react";
import {addMessageAC, updateNewMessage} from "../../../Redux/Reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

function DialogsContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    debugger;
                    const state = store.getState();

                    const onSendMessage = () => {
                        store.dispatch(addMessageAC());
                    }
                    const onMessageChange = (message) => {
                        store.dispatch(updateNewMessage(message))
                    }
                    return(
                        <Dialogs onSendMessage={onSendMessage}
                                 onMessageChange={onMessageChange}
                                 newMessageText={state.dialogsPage.newMessageText}
                                 dialogsData={state.dialogsPage.dialogsData}
                                 messageData={state.dialogsPage.messageData}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}
export default DialogsContainer;