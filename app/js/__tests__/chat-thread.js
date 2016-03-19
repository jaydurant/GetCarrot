jest.unmock('../components/chat-thread');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ChatThread from '../components/chat-thread';

const fields = {
	chat: [
	{
		"message" : ["test1"],
		"button" : [
			{"text" : "Yep", "next" : "3","key":"1a"},
			{"text" : "Meh", "next" : "4","key":"2a"}
		],
		"type" : "bot"
	},
	{
		"message" : ["test2"],
		"type" : "user"
	}

	],
	onchoice: () => {}

};

describe('ChatThread', ()=> {
	const renderer = TestUtils.createRenderer();
	renderer.render(<ChatThread {...fields} />);
	const renderedTree = renderer.getRenderOutput();

	const threadListElement =  renderedTree.props.children[0];
	const buttonListElement = renderedTree.props.children[1];

	it('displays chat thread',() => {
		expect(threadListElement.props.children.length).toBe(2);

		expect(threadListElement.props.children[0].props.text).toBe(fields.chat[0].message[0]);

		expect(buttonListElement.props.children.length).toBe(2);

		const firstFieldsButton = fields.chat[0].button[0];
		const firstButton = buttonListElement.props.children[0];

		console.log(firstFieldsButton);
		expect([firstButton.props.text,firstButton.props.next,firstButton.props.datakey]).toEqual([firstFieldsButton.text,firstFieldsButton.next,firstFieldsButton.key]);
	});
});