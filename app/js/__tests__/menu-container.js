jest.unmock('../components/menu-container');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MenuContainer from '../components/menu-container';

const fields = {
	toggle: false,
	clickToggle: () => {}
};

describe(MenuContainer, () => {

	const renderer = TestUtils.createRenderer();
	renderer.render(<MenuContainer {...fields} />);

	it('displays menu-container content',() => {
		let renderedTree = renderer.getRenderOutput();
		let ToggleDiv = renderedTree.props.children;
		let MenuList = ToggleDiv.props.children[1];

		expect(ToggleDiv.props.className).toMatch(/close/);

		expect(MenuList.props.children.length).toBe(4);
	});

	it('displays open navigation image and click function',() => {
		fields.toggle = true;
		renderer.render(<MenuContainer {...fields} />);
		let renderedTree = renderer.getRenderOutput();
		let ToggleDiv = renderedTree.props.children;
		let DivImage = ToggleDiv.props.children[0];
		let LogoBackground = DivImage.props.children[0];

		expect(ToggleDiv.props.className).toMatch(/open/);

		expect(typeof LogoBackground.props.onClick).toBe('function');

	});
} );