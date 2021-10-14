import { Link } from 'react-router-dom';
import style from './style.module.scss';

const NewsItem = ({ photo, title, description }) => {
	// Удалить все пробелы из строки
	let titleToLink = title.split(' ').join('');

	return (
		<div className={style.containerToNewsItem}>
			<Link className={style.link} to={`/news/${titleToLink}`}>
				<img className={style.photo} src={photo} alt='img' />
				<p className={style.title}>{title}</p>
			</Link>
		</div>
	);
};

export default NewsItem;
