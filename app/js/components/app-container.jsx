import React from 'react';
import MenuContainer from './menu-container';
import DoctorContent from './doctor-content';
import ChatThread from './chat-thread';

class AppContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			chatArray: [],
			doctor: {image: 'assets/doctor-headshot.png', name: 'Dr. Ahmad'},
		};
	}

	componentDidMount() {

	}

	onUserChoiceClick(step,event){
		
	}
	//
	render() {
		return (
				<div className="container app-container">
					<section className="one-half-m">
						<MenuContainer />
						<DoctorContent doctor={this.state.doctor} />
					</section>
					<section className="one-half-m chat-container">
						<ChatThread />
					</section>
				</div>
			);
	}
}

export default AppContainer;
