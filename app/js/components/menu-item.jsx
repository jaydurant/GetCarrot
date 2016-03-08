import React from 'react';

function MenuItem(props) {
	return <li className="menu-links"><a href={props.url} title={props.text}>{props.text}</a></li>;
}

export default MenuItem;
