import { NEWS_REQUEST, APOD_REQUEST, ASTEROID_REQUEST } from '../actionsTypes/news';

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
			return newState;
		case ASTEROID_REQUEST:
			newState.newsData = payload;
			newState.loading = false;
			return newState;
		default:
			return state;
	}
};

export default newsReducer;
