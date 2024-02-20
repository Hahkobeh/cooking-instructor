import { Outlet } from 'react-router-dom';
import './recipe.module.scss';

const Recipe = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Recipe;
