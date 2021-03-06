import style from './style.module.scss';
import logo from '@assets/images/moon.png';
import { Link } from 'react-router-dom';
import React from 'react';

class Header extends React.Component {
	render = () => {
		return (
			<header className={style.header}>
				<div className={style.headerContainer}>
					<Link to='/'>
						<img className={style.headerLogo} src={logo} alt='img' />
					</Link>
					<nav className={style.nav}>
						<Link className={style.navLink} to='/'>
							Главная
						</Link>
						<Link className={style.navLink} to='/contacts'>
							Контакты
						</Link>
						<Link className={style.navLink} to='/news'>
							Новости
						</Link>
					</nav>
				</div>
			</header>
		);
	};
}

export default Header;
