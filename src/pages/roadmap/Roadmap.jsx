import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/header/Header';
import Contacts from '../contacts/Contacts';
import Main from '../main/Main';
import News from '../news/News';
import NewsPage from '../newsPage/NewsPage';

const Roadmap = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route
					path='/news/:newsPage'
					render={() => {
						return <NewsPage />;
					}}
				/>
				<Route path='/contacts' component={Contacts} />
				<Route
					path='/news'
					render={() => {
						return <News />;
					}}
				/>
				<Route path='/' component={Main} />
			</Switch>
		</>
	);
};

export default Roadmap;
