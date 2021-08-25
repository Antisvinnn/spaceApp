import { Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import AsteroidItem from '../../components/asteroidItem/AsteroidItem';
import { APODAction, AsteroidAction } from '../../redux/actions/newsAction';

import style from './style.module.scss';

const NewsPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (newsPage === 'Astronomicpictureoftheday') {
			dispatch(APODAction());
		} else if (newsPage === 'Asteroids-NeoWs') {
			dispatch(AsteroidAction());
		}
	}, []);
	let { newsPage } = useParams();
	let newsLoading = useSelector((store) => store.news.loading);
	let newsData = useSelector((store) => store.news.newsData);

	const renderNewsPage = (newsPage) => {
		if (
			newsPage === 'Astronomicpictureoftheday' &&
			// проверить наличие подстроки в строке
			!newsData.data?.url?.includes('https://www.youtube.com')
		) {
			return (
				<div className={style.containerToAPOD}>
					<img className={style.image} src={newsData.data?.url} alt='img' />
					<div className={style.containerToRight}>
						<p className={style.title}>Astronomic picture of the day</p>
						<div className={style.description}>{newsData.data?.explanation}</div>
					</div>
				</div>
			);
		} else if (
			newsPage === 'Astronomicpictureoftheday' &&
			newsData.data?.url.includes('https://www.youtube.com')
		) {
			// Оставить в пути только последний элемент (всё что идёт после последнего / )
			const youtubeVideoID = newsData.data?.url.split('/').pop();
			return (
				<div className={style.containerToAPOD}>
					<YouTube className={style.youtube} videoId={youtubeVideoID} />
					<div className={style.containerToRight}>
						<p className={style.title}>Astronomic picture of the day</p>
						<div className={style.description}>{newsData.data?.explanation}</div>
					</div>
				</div>
			);
		} else if (newsPage === 'Asteroids-NeoWs') {
			let asteroids = newsData.data?.near_earth_objects?.map((element, index) => (
				<AsteroidItem
					name={element.name}
					diameter={element.estimated_diameter.kilometers.estimated_diameter_min}
					magnitude={element.absolute_magnitude_h}
					key={index}
				/>
			));
			return <div className={style.asteroidsContainer}>{asteroids}</div>;
		}
		// else if (newsPage === 'EarthImagery'){}
	};

	return (
		<div className={style.newsPageContainer}>
			{newsLoading ? (
				<div className={style.containerToSpin}>
					<Spin size='large' />
				</div>
			) : (
				renderNewsPage(newsPage)
			)}
		</div>
	);
};

export default NewsPage;
