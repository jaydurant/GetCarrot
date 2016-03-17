import {Dispatcher} from 'flux';
//Dispatcher will record actions and the data assocated with the actions

const appDispatcher = new Dispatcher();

appDispatcher.handleAction = function(action){
	this.dispatch({
		source:'VIEW_ACTION',
		action
	});
}

export default appDispatcher;