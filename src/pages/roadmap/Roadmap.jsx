import { Route, Switch } from 'react-router-dom';
import Contacts from '../contacts/Contacts';
import Main from '../main/Main';

const Roadmap = () => {
	return (
		<Switch>
			<Route path='/contacts' component={Contacts} />
			<Route path='/' component={Main} />
		</Switch>
	);
};

export default Roadmap;
