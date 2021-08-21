import axios from 'axios';
import { apiKey } from '../../helper/apiKey';

export const newsRequest = () => {
	return axios.get(`https://api.nasa.gov/planetary/apod?${apiKey}`);
};
