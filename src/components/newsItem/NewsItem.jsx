import { Link } from 'react-router-dom';
import style from './style.module.scss';

const NewsItem = ({ photo, title, description }) => {
	// Удалить все пробелы из строки
	let titleToLink = title.split(' ').join('');

	return (
		<Link to={`/news/${titleToLink}`}>
			<div className={style.containerToNewsItem}>
				<img className={style.photo} src={photo} alt='img' />
				<p className={style.title}>{title}</p>
				<div className={style.description}>{description}</div>
			</div>
		</Link>
	);
};

export default NewsItem;
