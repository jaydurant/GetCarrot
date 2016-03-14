import React from 'react';
import DoctorContent from './doctor-content';
import MenuContainer from './menu-container';

/*
AdminContainer provides the top-level container for the menu and doctor content'
*/
function AdminContainer(props) {
	return (
			<section>
				<MenuContainer menuItems={props.Menu} />
				<DoctorContent docInfo={props.docInfo} />
			</section>
		);
}

AdminContainer.propTypes = { Menu: React.PropTypes.object, docInfo: React.PropTypes.object };

export default AdminContainer;
