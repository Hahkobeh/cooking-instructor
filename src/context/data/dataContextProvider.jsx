import staticData from '../../data/staticData';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
	const [tags] = useState(staticData.tags);
	const [recipes] = useState(
		staticData.recipes.map((recipe) => ({
			...recipe,
			tags: recipe.tagIds.map((tagId) =>
				staticData.tags.find((tag) => tag.id === tagId)
			),
			path: recipe.title.replace(/\s+/g, '-').toLocaleLowerCase(),
		}))
	);
	const [users] = useState(
		staticData.users
	);

	return (
		<DataContext.Provider value={{ recipes, tags, users }}>
			{children}
		</DataContext.Provider>
	);
};

DataContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DataContextProvider;
