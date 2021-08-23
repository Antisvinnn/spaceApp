import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FirstScreen from '../../components/firstScreen/FirstScreen';
import { newsAction } from '../../redux/actions/newsAction';
import style from './style.module.scss';

const Main = () => {
	return (
		<>
			<div className={style.mainContainer}>
				<FirstScreen />
			</div>
		</>
	);
};

export default Main;
