import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [user, _setUser] = useState(
		JSON.parse(localStorage.getItem('user')) ?? null
	);

	const setUser = (data) => {
		_setUser(data), () => localStorage.setItem('user', JSON.stringify(data));
	};

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

UserContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserContextProvider;
