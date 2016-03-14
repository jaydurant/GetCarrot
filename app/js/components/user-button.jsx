import React from 'react';
//stateless componenet which will display the options that the user can respond with

function AcceptButton(props) {
	return <button type="button" className="chat-optionButton" data-next={props.next} onClick={props.onchoice} data-key={props.datakey}>{props.text}</button>;
}

AcceptButton.propTypes = {
	next: React.PropTypes.string,
	onchoice: React.PropTypes.func,
	datakey: React.PropTypes.string,
	text: React.PropTypes.string,
};

export default AcceptButton;
