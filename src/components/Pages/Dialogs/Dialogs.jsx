import React from "react";
import './Dialogs.scss'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


function Dialogs() {
    const dialogsData = [
        {id: 1, name: 'Bohdan'},
        {id: 2, name: 'Petro'},
        {id: 3, name: 'Vasyl'},
        {id: 4, name: 'Sofi'},
        {id: 5, name: 'Ivan'}
    ]
    const messageData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I learn React'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Good Morning'},
        {id: 5, message: 'I am fine'}
    ]
    const dialogsElements = dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = messageData.map((message) => <Message message={message.message} id={message.id}/>);

    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                {dialogsElements}
            </div>
            <hr/>
            <div className="messages">
                {messagesElements}
            </div>

        </div>
    );
}
export default Dialogs;