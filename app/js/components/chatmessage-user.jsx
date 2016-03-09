mport React from 'react';

function ChatMessageUser(props) {
	return(
		<div className="chat-message-user">
			{props.text}
		</div>
		);
}

export default ChatMessageUser;