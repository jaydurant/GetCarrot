import appConstants from '../constants/appconstants';
import appDispatcher from '../dispatcher/appdispatcher';
import xhr from '../utils/xhr';
/*
App Actions describe provides a interface for actions which will intereact with
store which can be accessed by the view

getSection - will invoke a xhr and retrieve the requested information for the automated chat
getDoctor - will invoke a xhr and retrieve information regarding a doctor proide by the database
addUserSection - will add a users chosen option to the chat interface
*/
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