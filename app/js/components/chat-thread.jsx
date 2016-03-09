import React from 'react';
import UserButton from './user-button';
import ChatMessageBot from './chatmessage-bot';
import ChatMessageUser from './chatmessage-user';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function ChatThread(props) {

	const threadList =[];
	let buttonOptions;
	props.chat.forEach((val) => {
		if(val.type === "bot"){
			buttonOptions = [];
			val.message.forEach((val) => threadList.push(<ChatMessageBot key={val} text={val} />));
			val.button.forEach((val) => buttonOptions.push(<UserButton key={val.next} text={val.text} next={val.next} onchoice={props.onchoice} />));

		}	
		else{
			let number = Math.random();
			val.message.forEach((val) => threadList.push(<ChatMessageUser key={val + number} text={val} />));
		}
	});

	return (
		<div className="chat-thread">
			<div className="chat-callresponse">
					{threadList}
			</div>
			<div className="chat-userOptions">
				{buttonOptions}
			</div>
		</div>
		);
}

export default ChatThread;