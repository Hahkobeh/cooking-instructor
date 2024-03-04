import { useContext } from 'react';
import { DataContext } from './dataContextProvider';

export const useTags = () => {
	const { tags } = useContext(DataContext);
	return tags;
};
