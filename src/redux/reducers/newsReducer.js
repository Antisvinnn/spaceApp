import { NEWS_REQUEST } from '../actionsTypes/news';

const initialState = {
	loading: false,
	newsData: {},
};

const newsReducer = (state = initialState, { type, payload }) => {
	const newState = { ...state };
	switch (type) {
		case NEWS_REQUEST:
			newState.newsData = payload;
			return newState;
		default:
			return state;
	}
};

export default newsReducer;
