import style from './style.module.scss';

const PatentItem = ({ nameOfPatent, description }) => {
	return (
		<div className={style.container}>
			<p>{nameOfPatent}</p>
			<p>{description}</p>
			<hr />
		</div>
	);
};

export default PatentItem;
