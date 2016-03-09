import React from 'react';

function AcceptButton(props){
	return <button type="button" className="chat-optionButton" data-next={props.next} onClick={props.onchoice}>{props.text}</button>;
}

export default AcceptButton;
