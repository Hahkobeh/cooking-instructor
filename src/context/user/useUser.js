import { useContext } from 'react';
import { UserContext } from './UserContextProvider';

export const useUser = () => {
	const userContext = useContext(UserContext);
	return userContext;
};
