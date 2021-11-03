import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@components/header/Header';
import Contacts from '@pages/contacts/Contacts';
import Main from '@pages/main/Main';
import News from '@pages/news/News';
import NewsPage from '@pages/newsPage/NewsPage';

const Roadmap = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route path='/news/:newsPage' component={NewsPage} />
				<Route path='/contacts' component={Contacts} />
				<Route path='/news' component={News} />
				<Route path='/' component={Main} />
			</Switch>
		</>
	);
};

export default Roadmap;
