import React from 'react';

//states component which will display gifs as messages
function ChatMessageBotGif(props) {
	return (
		<div className="chat-message-containerBot">
			<div className="chat-message-bot chat-message-slidein-left chat-message-image"><img src={props.src} width="200" height="150" /></div>
		</div>
		);
}

ChatMessageBotGif.propTypes = { src: React.PropTypes.string, text: React.PropTypes.string };

export default ChatMessageBotGif;

