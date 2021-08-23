import axios from 'axios';

const axiosInit = () => {
	axios.defaults.baseURL = 'https://api.nasa.gov/';
};

export default axiosInit;
