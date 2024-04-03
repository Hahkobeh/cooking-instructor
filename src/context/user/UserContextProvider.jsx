import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [user, _setUser] = useState(JSON.parse(localStorage.getItem('user')));

	const setUser = (data) => {
		_setUser(data);
		localStorage.setItem('user', JSON.stringify(data));
	};

	const getShoppingList = () => {
		return user.shoppingList || [];
	};

	const updateShoppingList = (newShoppingList) => {
		const updatedUser = { ...user, shoppingList: newShoppingList };
		setUser(updatedUser);
	};

	return (
		<UserContext.Provider
			value={{ user, setUser, getShoppingList, updateShoppingList }}
		>
			{children}
		</UserContext.Provider>
	);
};

UserContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserContextProvider;
