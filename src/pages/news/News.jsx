import NewsItem from '../../components/newsItem/NewsItem';
import moon from '../../assets/images/moon.png';
import astronaut from '../../assets/images/cosmonaut.png';
import style from './style.module.scss';

const News = () => {
	return (
		<div className={style.containerToNews}>
			<NewsItem
				photo={astronaut}
				title='Astronomic picture of the day'
				description='One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.'
			/>
			<NewsItem
				photo={moon}
				title='Asteroids - NeoWs'
				description='NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.'
			/>
			<NewsItem
				photo={moon}
				title='Earth Imagery'
				description='This endpoint retrieves the Landsat 8 image for the supplied location and date. The response will include the date and URL to the image that is closest to the supplied date. The requested resource may not be available for the exact date in the request. You can retrieve a json that contains the inputs you provided and an url to the resulting image through the assets endpoint The assets endpoint no longer returns a list of potential images within your date range due to a change on the google earth engine api side.'
			/>
			<NewsItem
				photo={moon}
				title='Astronomic picture of the day'
				description='One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.'
			/>
			<NewsItem
				photo={moon}
				title='Astronomic picture of the day'
				description='One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.'
			/>
			<NewsItem
				photo={moon}
				title='Astronomic picture of the day'
				description='One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.'
			/>
			<NewsItem
				photo={moon}
				title='Astronomic picture of the day'
				description='One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.'
			/>
			<NewsItem
				photo={moon}
				title='Astronomic picture of the day'
				description='One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.'
			/>
			<NewsItem
				photo={moon}
				title='Astronomic picture of the day'
				description='One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.'
			/>
		</div>
	);
};

export default News;
