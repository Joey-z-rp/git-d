import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ContextDemo from './contextDemo/ContextDemo';
import UIDemo from './UIDemo/UIDemo';

import './App.css';

const App = () => (
	<Switch>
		<Redirect exact from="/" to="/context" />
		<Route path="/context" component={ContextDemo} />
		<Route path="/ui" component={UIDemo} />

	</Switch>
);

export default App;
