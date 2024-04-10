import { routerData } from '@/pages/routeData';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './nav-bar.module.scss';

const NavBar = () => {
	const location = useLocation();
	const isActiveRoute = (routePath) => {
		// check if the current location should activate the "Home" icon
		if (routePath === '/' && location.pathname.startsWith('/recipe')) {
			return true;
		}
		// fall back to the default behavior for other links
		return location.pathname === routePath;
	};
	return (
		<ul className={styles.navBar}>
			{routerData
				.filter((route) => route.icon)
				.map((route) => (
					<li key={route.path}>
						<NavLink
							to={route.path}
							className={() => (isActiveRoute(route.path) ? styles.active : '')}
						>
							<span className="material-symbols-outlined">{route.icon}</span>
						</NavLink>
					</li>
				))}
		</ul>
	);
};

export default NavBar;
