import style from './style.module.scss';

const PatentItem = ({ nameOfPatent, description, photo }) => {
	return (
		<div className={style.container}>
			<img src={photo} alt='error' className={style.photo} />
			<p className={style.title}>{nameOfPatent}</p>
			<p className={style.description}>{description}</p>
			<hr />
		</div>
	);
};

export default PatentItem;
