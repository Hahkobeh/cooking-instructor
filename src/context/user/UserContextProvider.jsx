import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import staticData from '../../data/staticData';
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [user, _setUser] = useState(JSON.parse(localStorage.getItem('user')));
	const [recipes] = useState(
		staticData.recipes.map((recipe) => ({
			...recipe,
			tags: recipe.tagIds.map((tagId) =>
				staticData.tags.find((tag) => tag.id === tagId)
			),
			path: recipe.title.replace(/\s+/g, '-').toLocaleLowerCase(),
		}))
	);

	const setUser = (data) => {
		_setUser(data);
		localStorage.setItem('user', JSON.stringify(data));
	};

	// returns the shopping list
	const getShoppingList = () => {
		return user.shoppingList || [];
	};

	// updates an ingredient's checked state
	const updateShoppingList = (newShoppingList) => {
		const updatedUser = { ...user, shoppingList: newShoppingList };
		setUser(updatedUser);
	};

	// adds a recipe object to the shopping list (with only the checked ingredients)
	const addRecipeToShoppingList = (newRecipe) => {
		const updatedShoppingList = user.shoppingList ? [...user.shoppingList] : [];

		const recipeIndex = updatedShoppingList.findIndex(
			(recipe) => recipe.id === newRecipe.id
		);
		const recipeExists = recipeIndex !== -1;

		// If it exists just overwrite it
		if (recipeExists) {
			updatedShoppingList[recipeIndex] = newRecipe;
			// Otherwise append it to the list
		} else {
			updatedShoppingList.push(newRecipe);
		}

		setUser({ ...user, shoppingList: updatedShoppingList });
	};

	// removes a recipe object from the shopping list
	const removeRecipeFromShoppingList = (recipeIdToRemove) => {
		const updatedShoppingList = user.shoppingList.filter(
			(recipe) => recipe.id !== recipeIdToRemove
		);
		setUser({ ...user, shoppingList: updatedShoppingList });
	};

	// helper function that returns all the favorited recipes (as objects)
	const getFavorites = () => {
		console.log(recipes);
		console.log(user.favorites);
		const favoriteRecipes = recipes.filter((recipe) =>
			user.favorites.includes(recipe.id)
		);
		return favoriteRecipes;
	};

	// adds a recipe id to a user's favourite list
	const addFavorite = (recipeId) => {
		const updatedFavorites = [...user.favorites, recipeId];
		setUser({ ...user, favorites: updatedFavorites });
	};

	// adds a recipe id to a user's favourite list
	const removeFavorite = (recipeId) => {
		const updatedFavorites = user.favorites.filter((id) => id !== recipeId);
		setUser({ ...user, favorites: updatedFavorites });
	};

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				getShoppingList,
				updateShoppingList,
				addRecipeToShoppingList,
				removeRecipeFromShoppingList,
				getFavorites,
				addFavorite,
				removeFavorite,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

UserContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserContextProvider;
