import NavBar from '@/components/nav-bar/NavBar';
import { Outlet } from 'react-router-dom';

const RouteWrapper = () => {
	return (
		<>
			<header>
				<div>
					<p>6:31</p>
					<span className="material-symbols-outlined">mark_email_unread</span>
					<span className="material-symbols-outlined">sms</span>
				</div>
				<div>
					<span className="material-symbols-outlined">do_not_disturb_on</span>
					<span className="material-symbols-outlined">wifi</span>
					<span className="material-symbols-outlined">battery_4_bar</span>
					<p>57%</p>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
			<NavBar />
		</>
	);
};

export default RouteWrapper;
