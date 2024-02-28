import NavBar from '@/components/nav-bar/NavBar';
import { Outlet } from 'react-router-dom';

const RouteWrapper = () => {
	return (
		<>
			<main>
				<Outlet />
			</main>
			<NavBar />
		</>
	);
};

export default RouteWrapper;
