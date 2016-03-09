import appConstants from '../constants/appconstants';
import appDispatcher from '../dispatcher/appdispatcher';
import xhr from '../utils/xhr';

const AppActions = {
	getSection(sectionNumber){
		xhr(JSON.parse,{url:'./database/chat.json'}).then((data) => {
			const dataSection = data[sectionNumber];
			appDispatcher.handleAction({
				actionType: appConstants.GET_SECTION,
				data: dataSection,
			});
		},console.log.bind(console)).catch(console.log.bind(console));
	},

	getDoctor(){
		xhr(JSON.parse,{url:'./database/doctor.json'}).then((data) => {
			appDispatcher.handleAction({
				actionType: appConstants.GET_DOCTOR,
				data
			});
		},console.log.bind(console)).catch(console.log.bind(console));
	},

	addUserSection(data){
		appDispatcher.handleAction({
			actionType: appConstants.ADD_USERSECTION,
			data
		});
	}

}

export default AppActions;