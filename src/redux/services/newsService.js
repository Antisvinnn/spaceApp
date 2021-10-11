import axios from 'axios';
import { apiKey } from '../../helper/apiKey';

export const APODRequest = () => {
	return axios.get(`planetary/apod?${apiKey}`);
};

export const AsteroidsRequest = () => {
	return axios.get(`neo/rest/v1/neo/browse/?${apiKey}`);
};

export const EarthImagery = (lon, lat, date) => {
	return axios.get(
		`https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&${apiKey}`
	);
};
