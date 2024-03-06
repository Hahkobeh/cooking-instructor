import { useContext } from 'react';
import { DataContext } from './dataContextProvider';

export const useRecipes = () => {
	const { recipes } = useContext(DataContext);
	return recipes;
};
