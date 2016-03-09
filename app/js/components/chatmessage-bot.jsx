import React from 'react';

function ChatMessageBot(props) {
	return(
		<div className="chat-message-bot">
			{props.text}
		</div>
		);
}

export default ChatMessageBot;