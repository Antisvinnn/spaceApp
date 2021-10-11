import { useEffect } from 'react';
import { useState } from 'react';
import style from './style.module.scss';

const Timer = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	useEffect(() => {
		setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
	}, []);

	return <span className={style.timeTitile}>Now time is: {time}</span>;
};

export default Timer;
