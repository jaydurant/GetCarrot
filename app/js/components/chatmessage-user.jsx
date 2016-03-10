import React from 'react';

function ChatMessageUser(props) {
	return(
		<div className="chat-message-containerUser ">
			<div className="chat-message-user chat-message-slidein-right">{props.text}</div>
		</div>
		);
}

export default ChatMessageUser;