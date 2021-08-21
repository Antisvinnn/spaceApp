import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FirstScreen from '../../components/firstScreen/FirstScreen';
import { newsAction } from '../../redux/actions/newsAction';
import style from './style.module.scss';

const Main = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(newsAction());
	}, []);
	const news = useSelector((store) => {
		return store.news?.newsData;
	});
	news ? console.log(news) : console.log('waiting for data');

	return (
		<>
			<div className={style.mainContainer}>
				<FirstScreen />
				<img src={news.data?.url} alt='img' />
				<p>{news.data?.explanation}</p>
			</div>
		</>
	);
};

export default Main;
