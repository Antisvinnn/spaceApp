import style from './style.module.scss';
import cosmonaut from '../../assets/images/cosmonaut.png';

const FirstScreen = () => {
	return (
		<div className={style.container}>
			<img className={style.introImage} src={cosmonaut} alt='img' />
			<p className={style.introText}>
				Веб-приложение "movieApp" создано для того, чтобы любой человек смог узнать что-нибудь
				новое о космосе. Для отображения информации приложение отсылает запросы на официальный
				сервер NASA (Rest api).
			</p>
		</div>
	);
};

export default FirstScreen;
