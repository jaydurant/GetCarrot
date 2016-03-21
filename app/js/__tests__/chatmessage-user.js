jest.unmock('../components/chatmessage-user');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ChatMessageUser from '../components/chatmessage-user';

const fields = {
	text: 'text-string'
};

describe('Chatmessage-User', () => {
	it('displays chatmessage user content',() => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<ChatMessageUser {...fields} />);
		const renderedTree = renderer.getRenderOutput();
		const chatElement = renderedTree.props.children;
		
		expect(chatElement.props.children).toBe(fields.text);

	});
});

