import React from 'react';
import AcceptButton from './accept-button';
import RejectButton from './reject-button';

function ChatThread() {
	return (
		<div className="chat-thread">
			<div className="chat-callresponse">
				chat
			</div>
			<div className="chat-userOptions">
				<AcceptButton />
				<RejectButton />
			</div>
		</div>
		);
}

export default ChatThread;