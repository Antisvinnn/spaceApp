import NewsItem from '../../components/newsItem/NewsItem';
import newsConfig from '../../helper/newsConfig';
import style from './style.module.scss';

const News = () => {
	return (
		<div className={style.newsWrapper}>
			<div className={style.containerToNews}>
				{newsConfig.map((element, index) => (
					<NewsItem
						photo={element.photo}
						title={element.title}
						description={element.description}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default News;
