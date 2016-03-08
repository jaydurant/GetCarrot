import React from 'react';
import MenuItem from './menu-item';

function MenuContainer() {
	const menuList = [
		{ text: 'My Profile', url: '/myprofile' },
		{ text: 'Share with Friends', url: '/share' },
		{ text: 'Make an Appointment', url: 'appointment' },
		{ text: 'Daily Carrot Tips', url: '/dailytips' },
		{ text: 'Chat with Expert', url: '/expertchat' },
	];
	const menuElements = menuList.map((val) =>
		<MenuItem text={val.text} url={val.url} key={val.text} />);
	return (
		<nav>
			<ul>
				{menuElements}
			</ul>
		</nav>
		);
}

export default MenuContainer;
