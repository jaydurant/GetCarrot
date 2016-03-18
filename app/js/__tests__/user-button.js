jest.unmock('../components/user-button');

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils  from 'react-addons-test-utils';
import UserButton from '../components/user-button';

const fields = {
	next: '3',
	onchoice: () => {},
	datakey: '1',
	text: 'hey'
};

describe ('UserButton', () => {
	it('displays user button content with next parameters', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<UserButton {...fields} />);
		const renderedTree = renderer.getRenderOutput();

		expect(renderedTree.type).toBe('button');

		expect(renderedTree.props.children).toBe(fields.text);

		expect(typeof renderedTree.props.onClick).toBe('function');

		expect(renderedTree.props['data-next']).toBe(fields.next);

	});
});