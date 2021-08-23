import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AsteroidItem from '../../components/asteroidItem/AsteroidItem';
import style from './style.module.scss';

const NewsPage = () => {
	let { newsPage } = useParams();
	let newsLoading = useSelector((store) => store.news.loading);
	let newsData = useSelector((store) => store.news.newsData);

	const renderNewsPage = (newsPage) => {
		if (newsPage === 'Astronomicpictureoftheday') {
			return (
				<div className={style.containerToAPOD}>
					<img className={style.image} src={newsData.data?.url} alt='img' />
					<div className={style.containerToRight}>
						<p className={style.title}>Astronomic picture of the day</p>
						<div className={style.description}>{newsData.data?.explanation}</div>
					</div>
				</div>
			);
		} else if (newsPage === 'Asteroids-NeoWs') {
			let asteroids = newsData.data.near_earth_objects.map((element, index) => (
				<AsteroidItem
					name={element.name}
					diameter={element.estimated_diameter.kilometers.estimated_diameter_min}
					magnitude={element.absolute_magnitude_h}
					key={index}
				/>
			));
			return <div className={style.asteroidsContainer}>{asteroids}</div>;
		}
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
