import {
	NEWS_REQUEST,
	APOD_REQUEST,
	ASTEROID_REQUEST,
	EARTH_IMAGERY_REQUEST,
} from '../actionsTypes/news';
import { APODRequest, AsteroidsRequest, EarthImagery } from '../services/newsService';
import { message } from 'antd';

export const APODAction = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: NEWS_REQUEST });
			const data = await APODRequest();
			dispatch({ type: APOD_REQUEST, payload: data });
		} catch {
			message.error('error');
		}
	};
};

export const AsteroidAction = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: NEWS_REQUEST });
			const data = await AsteroidsRequest();
			dispatch({ type: ASTEROID_REQUEST, payload: data });
		} catch {
			message.error('error');
		}
	};
};

export const EarthImageryAction = (lon, lat, date) => {
	return async (dispatch) => {
		try {
			dispatch({ type: NEWS_REQUEST });
			const data = await EarthImagery(lon, lat, date);
			console.log(data);
			dispatch({ type: EARTH_IMAGERY_REQUEST, payload: data });
		} catch {
			message.error('error');
		}
	};
};
