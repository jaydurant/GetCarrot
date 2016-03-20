jest.unmock('../components/admin-container');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AdminContainer from '../components/admin-container';

const fields = {
	Menu: {
		test: 'test-content'
	},
	docInfo: {
		test: 'test-content'
	}
};

describe ('AdminContainer', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<AdminContainer {...fields} />);
	const renderedTree = renderer.getRenderOutput();
	const MenuContainer = renderedTree.props.children[0];
	const DoctorContent = renderedTree.props.children[1];

	it('displays AdminContainer content', () => {
		console.log(MenuContainer);
		expect(MenuContainer.props.menuItems).toEqual(fields.Menu);

		expect(DoctorContent.props.docInfo).toEqual(fields.docInfo);
	});
});


