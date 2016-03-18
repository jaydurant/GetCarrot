jest.unmock('../components/chatmessage-bot');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ChatMessageBot from '../components/chatmessage-bot';

const fields = {
	text: 'test-text'
};

describe('ChatMessageBot', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ChatMessageBot {...fields} />);
	const renderedTree = renderer.getRenderOutput();

	it('displays chatmessage bot', () => {
		const chatMesssageElement = renderedTree.props.children;

		expect(chatMesssageElement.props.children).toBe(fields.text);
	});
});