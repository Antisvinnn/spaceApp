import FirstScreen from '@components/firstScreen/FirstScreen';
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
