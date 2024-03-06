import { useContext } from 'react';
import { DataContext } from './dataContextProvider';

export const useUsers = () => {
	const { users } = useContext(DataContext);
	return users;
};
