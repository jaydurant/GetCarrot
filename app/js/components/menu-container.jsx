import React from 'react';
import MenuItem from './menu-item';

function MenuContainer() {
	const menuList = [
		{ text: 'My Profile', url: '/myprofile', icon:"fa-user" },
		{ text: 'Share with Friends', url: '/share',icon:"fa-bullhorn" },
		{ text: 'Make an Appointment', url: 'appointment',icon:"fa-calendar" },
		{ text: 'Daily Carrot Tips', url: '/dailytips',icon:"fa-sun-o" },
		{ text: 'Chat with Expert', url: '/expertchat',icon:"fa-comment" },
	];
	const menuElements = menuList.map((val) =>
		<MenuItem text={val.text} url={val.url} key={val.text} icon={val.icon} />);
	return (
		<nav >
			<ul>
				{menuElements}
			</ul>
		</nav>
		);
}

export default MenuContainer;
