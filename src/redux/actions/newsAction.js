import {
	NEWS_REQUEST,
	APOD_REQUEST,
	ASTEROID_REQUEST,
	// EARTH_IMAGERY_REQUEST,
	TECH_TRANSFER_REQUEST,
} from '@redux/actionsTypes/news';
import {
	APODRequest,
	AsteroidsRequest,
	/*EarthImagery, */ TechTransferRequest,
} from '@redux/services/newsService';
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

// export const EarthImageryAction = (lon, lat, date) => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch({ type: NEWS_REQUEST });
// 			const data = await EarthImagery(lon, lat, date);
// 			console.log(data);
// 			dispatch({ type: EARTH_IMAGERY_REQUEST, payload: data });
// 		} catch {
// 			message.error('error');
// 		}
// 	};
// };

export const TechTransferAction = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: NEWS_REQUEST });
			const data = await TechTransferRequest();
			dispatch({ type: TECH_TRANSFER_REQUEST, payload: data });
		} catch {
			message.error('error');
		}
	};
};
