import React from 'react';

function ChatMessageBotGif(props) {
	return (
		<div className="chat-message-containerBot">
			<div className="chat-message-bot chat-message-slidein-left chat-message-image"><img src={props.src} width="200" height="150" /></div>
		</div>
		);
}

ChatMessageBotGif.propTypes = { src: React.propTypes.string, text: React.propTypes.string };

export default ChatMessageBotGif;

