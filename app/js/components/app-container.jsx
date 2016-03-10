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
			menuToggle:false
		};
	}

	componentDidMount() {
		appStore.addChangeListener(this._storeUpdate.bind(this));
		appActions.getDoctor();
		appActions.getSection("1");
	}

	componentDidUpdate(){
			console.log(document.querySelector('.chat-callresponse').scrollHeight);
			document.querySelector('.chat-callresponse').scrollTop = document.querySelector('.chat-callresponse').scrollHeight;	
	}

	_storeUpdate(){
		this.setState({
			chatArray: appStore.getSection(),
			doctor: appStore.getDoctorInfo()
		});
	}

	onUserChoiceClick(event){
		let userChoiceText = event.target.textContent;
		let userChoiceNumber = event.target.getAttribute('data-next');
		let userChoiceObj = {message : [userChoiceText], type: 'user'};
		appActions.addUserSection(userChoiceObj);
		appActions.getSection(userChoiceNumber);

	}

	menuToggle(event){
		console.log('hey');

		console.log(this.state.menuToggle);
		if(this.state.menuToggle){
			this.setState({menuToggle:false});
		}
		else{
			this.setState({menuToggle:true});
		}
	}

	//
	render() {
		return (
				<div className="container app-container">
					<MenuContainer toggle={this.state.menuToggle} clickToggle={this.menuToggle.bind(this)} />
					<section className="one-half-m doctor-container">
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
