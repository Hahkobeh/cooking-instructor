import { routerData } from '@/pages/routeData';
import { NavLink } from 'react-router-dom';
import styles from './nav-bar.module.scss';

const NavBar = () => {
	return (
		<ul className={styles.navBar}>
			{routerData
				.filter((route) => route.icon)
				.map((route) => (
					<li key={route.path}>
						<NavLink
							to={route.path}
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							<span className="material-symbols-outlined">{route.icon}</span>
						</NavLink>
					</li>
				))}
		</ul>
	);
};

export default NavBar;
