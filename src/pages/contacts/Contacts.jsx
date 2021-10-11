import style from './style.module.scss';
import photo from '../../assets/images/personalImage.jpg';
import Clipboard from 'react-clipboard.js';
import { message } from 'antd';

const Contacts = () => {
	return (
		<div className={style.container}>
			<div className={style.personalCard}>
				<img className={style.personalPhoto} src={photo} alt='not found' />
				<div className={style.cardInfo}>
					<p className={style.title + ' ' + style.mainTitle}>Contacts:</p>
					<a href='https://t.me/antisvin' className={style.title}>
						Telegram
					</a>
					<a href='https://t.me/antisvin' className={style.title}>
						VK
					</a>
					<a href='https://t.me/antisvin' className={style.title}>
						LinkedIN
					</a>
					<Clipboard
						onClick={() => message.success('Почта скопирована в буфер обмена!')}
						className={style.mail + ' ' + style.title}
						data-clipboard-text='Antisvinn@yandex.by'
					>
						Yandex Mail
					</Clipboard>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
