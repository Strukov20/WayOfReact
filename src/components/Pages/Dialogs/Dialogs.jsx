import React from "react";
import './Dialogs.scss'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


function Dialogs(props) {

    const dialogsElements = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.key}/>);
    const messagesElements = props.messageData.map((message) => <Message message={message.message} key={message.id} isMe={message.isMe}/>);

    const newMessage = React.createRef();

    const sendMessage = () => {
        const message = newMessage.current.value;
        alert(message)
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
                    <input ref={newMessage} type="text" placeholder='Type your message...'/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;