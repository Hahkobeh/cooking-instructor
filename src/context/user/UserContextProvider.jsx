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

	// adds a single ingredient to a shopping list
	const addIngredientToShoppingList = (recipe, ingredient) => {
		let shoppingList = getShoppingList();
		const recipeId = recipe.id;
		const title = recipe.title;
		const recipeIndex = shoppingList.findIndex((r) => r.id === recipeId);

		if (recipeIndex !== -1) {
			// recipe exists in the shopping list
			const existingIngredientIndex = shoppingList[
				recipeIndex
			].ingredients.findIndex((ing) => ing.name === ingredient.name);

			if (existingIngredientIndex !== -1) {
				// ingredient exists, update it
				shoppingList[recipeIndex].ingredients[existingIngredientIndex] =
					ingredient;
			} else {
				// ingredient does not exist, add it
				shoppingList[recipeIndex].ingredients.push(ingredient);
			}
		} else {
			// recipe does not exist, create new recipe entry with this ingredient
			const newRecipeEntry = {
				id: recipeId,
				title: title,
				ingredients: [ingredient],
			};
			shoppingList.push(newRecipeEntry);
		}

		updateShoppingList(shoppingList);
	};

	// removes a single ingredient from the shopping list
	const removeIngredientFromShoppingList = (recipe, ingredient) => {
		let shoppingList = getShoppingList();
		const recipeId = recipe.id;
		const ingredientName = ingredient.name;
		const recipeIndex = shoppingList.findIndex((r) => r.id === recipeId);

		if (recipeIndex !== -1) {
			// recipe exists, filter out the ingredient
			shoppingList[recipeIndex].ingredients = shoppingList[
				recipeIndex
			].ingredients.filter((ing) => ing.name !== ingredientName);

			// if no ingredients left, remove the recipe
			if (shoppingList[recipeIndex].ingredients.length === 0) {
				shoppingList = shoppingList.filter((_, index) => index !== recipeIndex);
			}

			updateShoppingList(shoppingList);
		}
	};

	// helper function that returns all the favorited recipes (as objects)
	const getFavorites = () => {
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

	// function to get the recent recipes as objects
	const getRecents = () => {
		const recentRecipes = recipes.filter((recipe) =>
			user.recents.includes(recipe.id)
		);
		return recentRecipes;
	};
	// adds a recipe to the recents list
	const addRecent = (recipeId) => {
		const updatedRecents = new Set([recipeId, ...user.recents]); // ensure uniqueness and recency
		setUser({ ...user, recents: Array.from(updatedRecents).slice(0, 10) }); // limit to the most recent 10 items
	};
	// gets a user active recipe
	const getActiveRecipe = () => {
		return user.activeRecipe;
	};

	// sets a user's active recipe
	const setActiveRecipe = (recipeId, tab) => {
		setUser({ ...user, activeRecipe: { id: recipeId, tab: tab } });
	};

	// clears a user's active recipe
	const clearActiveRecipe = () => {
		setUser({ ...user, activeRecipe: { id: null, tab: null } });
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
				addIngredientToShoppingList,
				removeIngredientFromShoppingList,
				getFavorites,
				addFavorite,
				removeFavorite,
				getRecents,
				addRecent,
				getActiveRecipe,
				setActiveRecipe,
				clearActiveRecipe,
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
