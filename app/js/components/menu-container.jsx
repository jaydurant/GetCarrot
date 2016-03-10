import React from 'react';
import MenuItem from './menu-item';

function MenuContainer() {
	const menuList = [
		{ text: 'My Profile', url: '/myprofile', icon:"fa-user" },
		{ text: 'Share', url: '/share',icon:"fa-bullhorn" },
		{ text: 'Appointment', url: 'appointment',icon:"fa-calendar" },
		{ text: 'Payment', url: '/payment',icon:"fa-credit-card" },
	];
	const menuElements = menuList.map((val) =>
		<MenuItem text={val.text} url={val.url} key={val.text} icon={val.icon} />);
	return (
		<nav >
			<div className="navigation-content">
				<img className="one-quarter-m" src="assets/Carrot_logo_rgb.png" width="234" height="50" alt="carrot logo" />
				<ul className="menu-list">
					{menuElements}
				</ul>
			</div>
		</nav>
		);
}

export default MenuContainer;
