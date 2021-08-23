import { NEWS_REQUEST, APOD_REQUEST, ASTEROID_REQUEST } from '../actionsTypes/news';
import { APODRequest, AsteroidsRequest } from '../services/newsService';
import { message } from 'antd';

export const APODAction = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: NEWS_REQUEST });
			const data = await APODRequest();
			dispatch({ type: APOD_REQUEST, payload: data });
		} catch (error) {
			message.error(error);
		}
	};
};

export const AsteroidAction = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: NEWS_REQUEST });
			const data = await AsteroidsRequest();
			dispatch({ type: ASTEROID_REQUEST, payload: data });
		} catch (error) {
			message.error(error);
		}
	};
};
