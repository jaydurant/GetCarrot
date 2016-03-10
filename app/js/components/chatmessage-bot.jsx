import React from 'react';

function ChatMessageBot(props) {
	return(
		<div className="chat-message-containerBot">
			<div className="chat-message-bot chat-message-slidein-left">{props.text}</div>
		</div>
		);
}

export default ChatMessageBot;