import axios from 'axios';
import { apiKey } from '../../helper/apiKey';

export const APODRequest = () => {
	return axios.get(`planetary/apod?${apiKey}`);
};

export const AsteroidsRequest = () => {
	return axios.get(`neo/rest/v1/neo/browse/?${apiKey}`);
};
