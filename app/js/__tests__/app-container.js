jest.unmock('../components/app-container');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AppContainer from '../components/app-container';

describe('AppContainer',() => {
	const renderer = TestUtils.createRenderer();
	renderer.render(<AppContainer />);
	let RenderedTree = renderer.getRenderOutput();

	let MenuContainer = RenderedTree.props.children[0];
	const AppContent = RenderedTree.props.children[1];
	const DoctorContent	 = AppContent.props.children[0].props.children;
	const ChatThread = AppContent.props.children[1].props.children;

	it('displays app content', () => {
		expect(DoctorContent.props.doctor).toBe(undefined);

		expect(ChatThread.props.chat).toEqual([]);
		expect(typeof ChatThread.props.onchoice).toEqual('function');


	});

	it('registers menu closed', () => {
		expect(MenuContainer.props.toggle).toBe(false);
	});

	//you will need to comment out componentDidUpdate as shallow render does not support refs
	it('registers menu open --see comments', () => {
		MenuContainer.props.clickToggle();
		RenderedTree = renderer.getRenderOutput();
		MenuContainer = RenderedTree.props.children[0];

		expect(MenuContainer.props.toggle).toBe(true);
	});

});