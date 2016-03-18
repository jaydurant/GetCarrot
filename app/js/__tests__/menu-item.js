jest.unmock('../components/menu-item');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MenuItem from '../components/menu-item';

const fields = {
	icon: 'test-icon',
	text: 'test-menu-text',
	url: 'test-url'
};

describe ('MenuItem', () => {
	it('displays a menu item content',() => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<MenuItem {...fields} />);
		const renderedTree = renderer.getRenderOutput();

		const li = renderedTree;
		const anchor = renderedTree.props.children;
		const anchorChildren  = anchor.props.children; 

		expect([anchor.props.href,anchor.props.title]).toEqual([fields.url,fields.text]);

		expect(anchorChildren[0].props.className).toMatch(fields.icon);
		expect(anchorChildren[1].trim()).toBe(fields.text);
	});
});