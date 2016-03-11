import React from 'react';

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
	url: React.propType.string,
	icon: React.propType.string,
	text: React.propType.string,
};

export default MenuItem;
