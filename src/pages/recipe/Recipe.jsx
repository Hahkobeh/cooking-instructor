import { Outlet } from 'react-router-dom';
import './recipe.module.scss';
import NavBar from '@/components/nav-bar/NavBar';

const Recipe = () => {
	return (
		<body>
			<Outlet />
			<NavBar />
		</body>
	);
};

export default Recipe;
