import React from 'react';
import UserButton from './user-button';
import ChatMessageBot from './chatmessage-bot';
import ChatMessageUser from './chatmessage-user';
import ChatMessageBotGif from './chatmessage-bot-gif';

//Defines logic for chat thread thread which will pass data for the interactions of the bot and choices made by the user
function ChatThread(props) {
	const threadList = [];
	let buttonOptions;
	props.chat.forEach((val) => {
		if (val.type === 'bot') {
			buttonOptions = [];
			val.message.forEach((val) => {
				if (/assets/i.test(val)) {
					threadList.push(<ChatMessageBotGif key={val} src={val} />);
				} else {
					threadList.push(<ChatMessageBot key={val} text={val} />);
				}
			});
			val.button.forEach((val) => buttonOptions.push(<UserButton key={val.next} text={val.text} next={val.next} onchoice={props.onchoice} datakey={val.key} />));
		} else {
			val.message.forEach((val) => threadList.push(<ChatMessageUser key={`${val} user`}text={val} />));
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

ChatThread.propTypes = { chat: React.PropTypes.array, onchoice: React.PropTypes.func };

export default ChatThread;
