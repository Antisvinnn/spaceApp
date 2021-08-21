import { NEWS_REQUEST } from '../actionsTypes/news';
import { newsRequest } from '../services/newsService';
import { message } from 'antd';

export const newsAction = () => {
	return async (dispatch) => {
		try {
			const data = await newsRequest();
			dispatch({ type: NEWS_REQUEST, payload: data });
		} catch (error) {
			message.error(error);
		}
	};
};
