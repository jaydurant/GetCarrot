import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from './components/app-container';

renderPage();


function renderPage(){
	const appRootElement = document.querySelector('#app-root');
	render(<AppContainer />,appRootElement);
}