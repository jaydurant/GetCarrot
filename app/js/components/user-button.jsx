import React from 'react';

function AcceptButton(props) {
	return <button type="button" className="chat-optionButton" data-next={props.next} onClick={props.onchoice} data-key={props.datakey}>{props.text}</button>;
}

AcceptButton.propTypes = {
	next: React.propType.string,
	onchoice: React.propType.string,
	datakey: React.propType.string,
	text: React.propType.string,
};

export default AcceptButton;
