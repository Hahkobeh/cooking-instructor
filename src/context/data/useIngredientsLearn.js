import { useContext } from 'react';
import { DataContext } from './dataContextProvider';

export const useIngredientsLearn = () => {
	const { ingredientsLearn } = useContext(DataContext);
	return ingredientsLearn;
};