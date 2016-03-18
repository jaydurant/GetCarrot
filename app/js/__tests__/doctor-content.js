jest.unmock('../components/doctor-content');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DoctorContent from '../components/doctor-content';

const fields = {
	doctor: {
		name: 'test-name',
		image: '/test-image.jpg'
	}
};

describe('DoctorContent', () => {
	it('displays doctor content', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<DoctorContent {...fields} />);
		const renderedTree = renderer.getRenderOutput();
		const imageElement = renderedTree.props.children[0].props.children;
		const doctorText = renderedTree.props.children[1].props.children[0].props.children;
		
		expect(imageElement.props.src).toBe(fields.doctor.image);

		expect(imageElement.props.alt).toMatch(fields.doctor.name);

		expect(doctorText).toEqual(`Hi! I'm ${fields.doctor.name}, your Fertility Coach.  I am a specialist in fertility. I'm here to answer your questions about egg freezing or general fertility health.  If you message me, I'll respond within a day, if not sooner. `);


	});
});