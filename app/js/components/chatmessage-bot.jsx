import React from 'react';

function ChatMessageBot(props) {
	return(
		<div className="chat-message-containerBot">
			<div className="chat-message-bot">{props.text}</div>
		</div>
		);
}

export default ChatMessageBot;