import React from 'react';
//stateless component which will show the text of the option the user has chosen

function ChatMessageUser(props) {
	return (
		<div className="chat-message-containerUser ">
			<div className="chat-message-user chat-message-slidein-right">{props.text}</div>
		</div>
		);
}

ChatMessageUser.propTypes = { text: React.PropTypes.string };

export default ChatMessageUser;
