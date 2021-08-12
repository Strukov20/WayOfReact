import React from "react";
import './Dialogs.scss'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageAC, updateNewMessage} from "../../../Redux/state";

function Dialogs(props) {

    const dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.key}/>);
    const messagesElements = props.dialogsPage.messageData.map((message) => <Message message={message.message} key={message.id} isMe={message.isMe}/>);

    const newMessage = React.createRef();
    const sendMessage = () => {
        props.dispatch(addMessageAC());
    }
    const onMessageChange = () => {
        const message = newMessage.current.value;
        props.dispatch(updateNewMessage(message))
    }

    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                {dialogsElements}
            </div>
            <hr/>
            <div className="messages">
                {messagesElements}
                <div className="message-send">
                    <input ref={newMessage}
                           onChange={onMessageChange}
                           type="text"
                           placeholder='Type your message...'
                           value={props.dialogsPage.newMessageText}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;