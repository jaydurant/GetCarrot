import appDispatcher from '../dispatcher/appdispatcher';
import appConstants from '../constants/appconstants';
import objectAssign from 'react/lib/Object.assign';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const _store = {
	chat : [],
	doctor : {}
};

function addSection(section){
	_store.chat.push(section);
}

function addDoctor(data){
	_store.doctor = data; 
}

const appStore = objectAssign({},EventEmitter.prototype,{
	addChangeListener(callback){
		this.on(CHANGE_EVENT,callback);
	},

	getSection(){
		return _store.chat;
	},

	getDoctorInfo(){
		return _store.doctor;
	}
});

appDispatcher.register((payload) => {
	const action = payload.action;

	switch(action.actionType){
		case appConstants.GET_SECTION:
			addSection(action.data);
			appStore.emit(CHANGE_EVENT);
			break;
		case appConstants.GET_DOCTOR:
			addDoctor(action.data);
			appStore.emit(CHANGE_EVENT);
			break;
		case appConstants.ADD_USERSECTION:
			addSection(action.data);
			appStore.emit(CHANGE_EVENT);
			break;
	};
});

export default appStore; 