import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import staticData from '../../data/staticData';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
	const [tags] = useState(staticData.tags);
	const [categories] = useState(staticData.categories);
	const [recipes] = useState(
		staticData.recipes.map((recipe) => ({
			...recipe,
			tags: recipe.tagIds.map((tagId) =>
				staticData.tags.find((tag) => tag.id === tagId)
			),
			path: recipe.title.replace(/\s+/g, '-').toLocaleLowerCase(),
		}))
	);
	const [users, setUsers] = useState(staticData.users);
	const [dietaryRestrictions] = useState(staticData.dietaryRestrictions);
	const [techniques] = useState(staticData.techniques);
	const [ingredientsLearn] = useState(staticData.ingredientsLearn);

	return (
		<DataContext.Provider
			value={{ recipes, tags, categories, users, setUsers, dietaryRestrictions, techniques, ingredientsLearn }}
		>
			{children}
		</DataContext.Provider>
	);
};

DataContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DataContextProvider;
