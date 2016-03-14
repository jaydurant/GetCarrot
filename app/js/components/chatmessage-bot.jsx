import React from 'react';
// stateless componenet which displays the text of the bot

function ChatMessageBot(props) {
	return (
		<div className="chat-message-containerBot">
			<div className="chat-message-bot chat-message-slidein-left">{props.text}</div>
		</div>
		);
}

ChatMessageBot.propTypes = { text: React.PropTypes.string };

export default ChatMessageBot;
