import { useContext } from 'react';
import { DataContext } from './dataContextProvider';

export const useTechniques = () => {
	const { techniques } = useContext(DataContext);
	return techniques;
};
