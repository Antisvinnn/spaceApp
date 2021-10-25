import style from './style.module.scss';
import reactDom from 'react-dom';

const AsteroidItem = ({ name, magnitude, diameter }) => {
	let portalItem = <span>Hello</span>;
	return (
		<div
			onClick={() => {
				reactDom.createPortal(portalItem, document.getElementById('portal'));
			}}
			className={style.asteroidContainer}
		>
			<p className={style.asteroidName}>Name of asteroid - {name}</p>
			<p className={style.asteroidMagnitude}>Absolute magnitude - {magnitude}</p>
			<p className={style.asteroidDistance}>Diameter of asteroid - {diameter}</p>
		</div>
	);
};

export default AsteroidItem;
