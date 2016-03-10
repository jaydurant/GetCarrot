import React from 'react';

function ChatMessageBotGif(props) {
	return(
		<div className="chat-message-containerBot">
			<div className="chat-message-bot chat-message-slidein-left"><img src={props.src} width="220" height="150" /></div>
		</div>
		);
}

export default ChatMessageBotGif;
