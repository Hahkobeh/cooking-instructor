import { useContext } from 'react';
import { DataContext } from './dataContextProvider';

export const useCategories = () => {
	const { categories } = useContext(DataContext);
	return categories;
};
