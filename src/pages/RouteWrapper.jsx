import NavBar from '@/components/nav-bar/NavBar';
import PhoneStatus from '@/components/phone-status/PhoneStatus';
import { Outlet } from 'react-router-dom';

const RouteWrapper = () => {
	return (
		<>
			<PhoneStatus/>
			<main>
				<Outlet />
			</main>
			<NavBar />
		</>
	);
};

export default RouteWrapper;
