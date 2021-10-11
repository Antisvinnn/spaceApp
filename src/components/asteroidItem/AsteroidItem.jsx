import style from './style.module.scss';

const AsteroidItem = ({ name, magnitude, diameter }) => {
	return (
		<div className={style.asteroidContainer}>
			<p className={style.asteroidName}>Name of asteroid - {name}</p>
			<p className={style.asteroidMagnitude}>Absolute magnitude - {magnitude}</p>
			<p className={style.asteroidDistance}>Diameter of asteroid - {diameter}</p>
		</div>
	);
};

export default AsteroidItem;
