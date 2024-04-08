import { useContext } from 'react';
import { DataContext } from './dataContextProvider';

export const useRecipes = () => {
	const { recipes } = useContext(DataContext);
	// For debugging purposes otherwise just: recipes
	return recipes;
};
