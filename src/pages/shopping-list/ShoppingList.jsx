import Button from '@/components/button/Button';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import { useUser } from '@/context/user/useUser';
import { useState } from 'react';
import ShoppingListRecipe from '../../components/shopping/ShoppingListRecipe';
import styles from './shopping-list.module.scss';

// simulating a fixed ID for the aggregated "total" recipe
const TOTAL_RECIPE_ID = -1;

const ShoppingList = () => {
	const { getShoppingList, updateShoppingList, removeRecipeFromShoppingList } =
		useUser();
	// state hook for managing the viewByRecipe state. initially set to true for recipe view
	const [viewByRecipe, setViewByRecipe] = useState(true);
	// state hook for managing the recipes array. initially set to an empty array.
	const [recipes, setRecipes] = useState(getShoppingList);
	// state hook for managing the viewByRecipe state. initially set to true.
	const handleToggleSwitchChange = () => {
		setViewByRecipe(!viewByRecipe);
	};

	const handleIngredientToggle = (recipeId, toggledIngredient) => {
		// If toggling within a specific recipe, only that recipe's ingredients need updating.
		if (recipeId !== TOTAL_RECIPE_ID) {
			const updatedRecipes = recipes.map((recipe) => {
				if (recipe.id === recipeId) {
					return {
						...recipe,
						ingredients: recipe.ingredients.map((ingredient) => {
							if (ingredient.name === toggledIngredient.name) {
								return { ...ingredient, checked: !ingredient.checked };
							}
							return ingredient;
						}),
					};
				}
				return recipe;
			});
			// Update the user.shoppingList
			updateShoppingList(updatedRecipes);
			// Update the local state
			setRecipes(updatedRecipes);
		} else {
			// If toggling in the Total Recipe, update all instances of the ingredient across all recipes.
			const updatedRecipes = recipes.map((recipe) => ({
				...recipe,
				ingredients: recipe.ingredients.map((ingredient) => {
					if (ingredient.name === toggledIngredient.name) {
						// Toggle the checked state for all instances of this ingredient.
						return { ...ingredient, checked: !toggledIngredient.checked };
					}
					return ingredient;
				}),
			}));

			// Update the user.shoppingList
			updateShoppingList(updatedRecipes);
			// Update the local state
			setRecipes(updatedRecipes);
		}
	};

	// Aggregate ingredients into a total recipe
	const totalRecipe = {
		id: TOTAL_RECIPE_ID,
		title: 'Total Ingredients',
		ingredients: recipes
			.flatMap((recipe) =>
				recipe.ingredients.map((ingredient) => ({
					...ingredient,
					recipeId: TOTAL_RECIPE_ID,
				}))
			)
			.reduce((acc, ingredient) => {
				const existing = acc.find(
					(item) =>
						item.name === ingredient.name && item.unit === ingredient.unit
				);
				if (existing) {
					// Update the total quantity
					existing.quantity =
						parseFloat(existing.quantity) + parseFloat(ingredient.quantity);
					// Update the checked quantity
					if (ingredient.checked) {
						existing.checkedQuantity =
							(existing.checkedQuantity !== undefined
								? parseFloat(existing.checkedQuantity)
								: 0) + parseFloat(ingredient.quantity);
					}
				} else {
					acc.push({
						...ingredient,
						quantity: parseFloat(ingredient.quantity),
						checkedQuantity: ingredient.checked
							? parseFloat(ingredient.quantity)
							: 0,
					});
				}
				return acc;
			}, [])
			.map((ingredient) => ({
				...ingredient,
				quantity: `${ingredient.checkedQuantity !== undefined ? ingredient.checkedQuantity : 0}/${ingredient.quantity} `,
			})),
	};

	const handleDeleteAction = (recipeId, ingredientNamesToRemove = []) => {
		// determine whether we're removing specific ingredients or the entire recipe
		if (ingredientNamesToRemove.length > 0) {
			// remove specific ingredients from the recipe
			const updatedRecipes = recipes.map((recipe) => {
				if (recipe.id === recipeId || recipeId == TOTAL_RECIPE_ID) {
					console.log(recipeId);
					const filteredIngredients = recipe.ingredients.filter(
						(ingredient) => !ingredientNamesToRemove.includes(ingredient.name)
					);
					return { ...recipe, ingredients: filteredIngredients };
				}
				return recipe;
			});
			updateShoppingList(updatedRecipes); // update the list
			setRecipes(updatedRecipes); // update local state
		} else {
			// otherwise, remove the entire recipe
			removeRecipeFromShoppingList(recipeId); // Tupdate the context
			setRecipes(recipes.filter((recipe) => recipe.id !== recipeId)); // update local state
		}
	};

	const handleClearAll = () => {
		// Clear all recipes from the global state
		updateShoppingList([]);

		// Clear the local state
		setRecipes([]);
	};

	return (
		<div id={styles['shopping-list']}>
			<div className={styles['header-container']}>
				{recipes.length > 0 && (
					<Button
						accent
						onClick={handleClearAll}
						className={styles['clear-all-button']}
					>
						Clear All
					</Button>
				)}

				<ToggleSwitch
					className={styles['display-mode-toggle']}
					label1="by ingredient"
					label2="by recipe"
					onToggle={handleToggleSwitchChange}
				/>
			</div>

			{viewByRecipe ? (
				recipes.map(
					(recipe) =>
						recipe.ingredients.length > 0 && (
							<ShoppingListRecipe
								key={recipe.id}
								recipe={recipe}
								onIngredientToggle={handleIngredientToggle}
								onDelete={handleDeleteAction}
							/>
						)
				)
			) : (
				<>
					{totalRecipe.ingredients.length > 0 && (
						<ShoppingListRecipe
							key={TOTAL_RECIPE_ID}
							recipe={totalRecipe}
							onIngredientToggle={handleIngredientToggle}
							onDelete={handleDeleteAction}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default ShoppingList;
