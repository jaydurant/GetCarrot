import React from 'react';
import MenuContainer from './menu-container';
import DoctorContent from './doctor-content';
import ChatThread from './chat-thread';
import appStore from '../stores/appstore';
import appActions from '../actions/appactions';

class AppContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			chatArray: [],
			doctor: appStore.getDoctorInfo(),
		};
	}

	componentDidMount() {
		appStore.addChangeListener(this._storeUpdate.bind(this));
		appActions.getDoctor();
		appActions.getSection("1");
	}

	componentDidUpdate(){
		document.querySelector('.chat-callresponse').scrollTop = document.querySelector('.chat-thread').scrollHeight;
	}

	_storeUpdate(){
		this.setState({
			chatArray: appStore.getSection(),
			doctor: appStore.getDoctorInfo()
		});
	}

	onUserChoiceClick(event){
		let parentNode = event.target.parentNode.previousSibling;
		let userChoiceText = event.target.textContent;
		let userChoiceNumber = event.target.getAttribute('data-next');
		let userChoiceObj = {message : [userChoiceText], type: 'user'};
		appActions.addUserSection(userChoiceObj);
		appActions.getSection(userChoiceNumber);

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
						<ChatThread chat={this.state.chatArray} onchoice={this.onUserChoiceClick.bind(this)} />
					</section>
				</div>
			);
	}
}

export default AppContainer;
