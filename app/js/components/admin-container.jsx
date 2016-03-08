import React from 'react';
import DoctorContent from './doctor-content';
import MenuContainer from './menu-container';

function AdminContainer(props) {
	return (
			<section>
				<MenuContainer menuItems={props.Menu} />
				<DoctorContent docInfo={props.docInfo} />
			</section>
		);
}

export default AdminContainer;
