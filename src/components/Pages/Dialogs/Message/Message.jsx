import React from "react";


function Message(props) {

    return (
        <div>
            <div className={props.isMe ? 'messages__isMe' : 'messages__item'}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" alt="message-avatar"/>
                <div className="messages__item_message">{props.message}</div>
            </div>
        </div>

    );
}
export default Message;