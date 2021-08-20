import React from "react";

function Message(props) {

    return (
        <div>
            <div className={props.isMe ? 'messages__isMe' : 'messages__item'}>
                <img src={props.avatar} alt="message-avatar"/>
                <div className="messages__item_message">{props.message}</div>
            </div>
        </div>

    );
}
export default Message;