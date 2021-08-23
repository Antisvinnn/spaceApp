import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './style.module.scss';

const NewsPage = ({ action }) => {
	let { newsPage } = useParams();
	let dispatch = useDispatch();
	useEffect(() => {
		dispatch;
	});
	const renderNewsPage = (newsPage) => {
		if (newsPage === 'Astronomicpictureoftheday') {
			return <div>Astronomicpictureoftheday</div>;
		}
	};

	return <div>{renderNewsPage(newsPage)}</div>;
};

export default NewsPage;
