import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<ul>
			<li>
				<NavLink to={'/'}>
					<a>Home</a>
					{/* Replace with icon */}
				</NavLink>
			</li>
			<li>
				<NavLink to={'/shopping-list'}>
					<a>Shopping List</a>
					{/* Replace with icon */}
				</NavLink>
			</li>
			<li>
				<NavLink to={'/learn'}>
					<a>Learn</a>
					{/* Replace with icon */}
				</NavLink>
			</li>
			<li>
				<NavLink to={'/account'}>
					<a>Account</a>
					{/* Replace with icon */}
				</NavLink>
			</li>
		</ul>
	);
};

export default NavBar;
