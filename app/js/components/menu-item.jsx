import React from 'react';
//stateless component which will display the list items of the navigations ul

function MenuItem(props) {
	return (
		<li className="menu-links">
			<a href={props.url} title={props.text}>
				<i className={`fa ${props.icon}`}></i>
				{`   ${props.text}`}
			</a>
		</li>
	);
}

MenuItem.propTypes = {
	icon: React.PropTypes.string,
	text: React.PropTypes.string,
};

export default MenuItem;
