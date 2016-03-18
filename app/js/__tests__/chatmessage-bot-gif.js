jest.unmock('../components/chatmessage-bot-gif');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ChatMessageBotGif from '../components/chatmessage-bot-gif';

const fields = {
	src: './test-src.jpg'
};

describe('ChatMessageBotGif', () => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ChatMessageBotGif {...fields} />);
	const renderedTree = renderer.getRenderOutput();

	const imageElement = renderedTree.props.children.props.children;

	it('displays chatmessage-bot-gif content',() => {
		expect(imageElement.props.src).toBe(fields.src);
	});
});
