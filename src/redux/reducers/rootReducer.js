import { combineReducers } from 'redux';
import newsReducer from '@redux/reducers/newsReducer';

const rootReducer = combineReducers({ news: newsReducer });

export default rootReducer;
