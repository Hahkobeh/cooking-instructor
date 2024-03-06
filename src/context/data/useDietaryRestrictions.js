import { useContext } from 'react';
import { DataContext } from './dataContextProvider';

export const useDietaryRestrictions = () => {
	const { dietaryRestrictions } = useContext(DataContext);
	return dietaryRestrictions;
};
