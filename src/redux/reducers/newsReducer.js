import { message } from 'antd';
import {
	NEWS_REQUEST,
	APOD_REQUEST,
	ASTEROID_REQUEST,
	// EARTH_IMAGERY_REQUEST,
	TECH_TRANSFER_REQUEST,
} from '@redux/actionsTypes/news';

const initialState = {
	loading: false,
	newsData: {},
};

const newsReducer = (state = initialState, { type, payload }) => {
	const newState = { ...state };
	switch (type) {
		case NEWS_REQUEST:
			newState.loading = true;
			return newState;
		case APOD_REQUEST:
			newState.newsData = payload;
			newState.loading = false;
			message.success('server responsed');
			return newState;
		case ASTEROID_REQUEST:
			newState.newsData = payload;
			newState.loading = false;
			message.success('server responsed');
			return newState;
		// case EARTH_IMAGERY_REQUEST:
		// 	newState.newsData = payload;
		// 	newState.loading = false;
		// 	message.success('server responsed');
		// 	return newState;
		case TECH_TRANSFER_REQUEST:
			newState.newsData = payload;
			newState.loading = false;
			message.success('server responsed');
			return newState;
		default:
			return newState;
	}
};

export default newsReducer;
