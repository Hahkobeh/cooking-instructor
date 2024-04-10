import { useContext } from 'react';
import { DataContext } from './dataContextProvider';

export const useUsers = () => {
	const { users, setUsers } = useContext(DataContext);
	return { users, setUsers };
};
