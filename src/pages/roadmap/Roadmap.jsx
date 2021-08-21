import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/header/Header';
import Contacts from '../contacts/Contacts';
import Main from '../main/Main';

const Roadmap = () => {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path='/contacts' component={Contacts} />
				<Route path='/news' component={Contacts} />
				<Route path='/' component={Main} />
			</Switch>
		</React.Fragment>
	);
};

export default Roadmap;
