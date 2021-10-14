import { Spin } from 'antd';
// import Form from 'antd/lib/form/Form';
// import FormItem from 'antd/lib/form/FormItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import AsteroidItem from '../../components/asteroidItem/AsteroidItem';
import PatentItem from '../../components/patentItem/PatentItem';
import {
	APODAction,
	AsteroidAction,
	// EarthImageryAction,
	TechTransferAction,
} from '../../redux/actions/newsAction';
// import FileSaver from 'file-saver';

import style from './style.module.scss';

const NewsPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (newsPage === 'Astronomicpictureoftheday') {
			dispatch(APODAction());
		} else if (newsPage === 'Asteroids-NeoWs') {
			dispatch(AsteroidAction());
		} else if (newsPage === 'NasaPatents') {
			dispatch(TechTransferAction());
		}
	}, []);
	const { newsPage } = useParams();
	const newsLoading = useSelector((store) => store.news.loading);
	const newsData = useSelector((store) => store.news.newsData);

	// const decodeImage = () => {
	// 	const file = new Blob([JSON.stringify(newsData?.data)], { type: 'application/*' });
	// 	FileSaver.saveAs(file, 'picture.png');
	// 	return <img scr={file} alt='img' />;
	// };

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
		} else if (newsPage === 'NasaPatents') {
			let patents = newsData.data?.results;
			return (
				<div className={style.patentsContainer}>
					{patents?.map((elem) => {
						return <PatentItem nameOfPatent={elem[2]} description={elem[3]} photo={elem[10]} />;
					})}
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
		// else if (newsPage === 'Earth-Imagery') {
		// 	return (
		// 		<div className={style.EarthImageryContainer}>
		// 			<p className={style.EarthImageryTitle}>
		// 				{newsPage} - заполните поля для ввода информации
		// 			</p>
		// 			<Form
		// 				onFinish={(values) => {
		// 					dispatch(EarthImageryAction(values.longitude, values.latitude, values.date));
		// 				}}
		// 			>
		// 				<FormItem name='longitude'>
		// 					<Input placeholder='Долгота' />
		// 				</FormItem>
		// 				<FormItem name='latitude'>
		// 					<Input placeholder='Широта' />
		// 				</FormItem>
		// 				<FormItem name='date'>
		// 					<Input placeholder='Дата (YYYY-MM-DD)' />
		// 				</FormItem>
		// 				<FormItem name='button'>
		// 					<Button htmlType='submit' type='primary' className={style.EarthImageryButton}>
		// 						Enter the info
		// 					</Button>
		// 				</FormItem>
		// 			</Form>
		// 			{/* {newsData.data && decodeImage()} */}
		// 		</div>
		// 	);
		// }
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
