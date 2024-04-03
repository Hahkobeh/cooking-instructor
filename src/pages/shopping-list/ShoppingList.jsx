import Button from '@/components/button/Button';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import { useUser } from '@/context/user/useUser';
import { useState } from 'react';
import ShoppingListRecipe from '../../components/shopping/ShoppingListRecipe';
import styles from './shopping-list.module.scss';

// simulating a fixed ID for the aggregated "total" recipe
const TOTAL_RECIPE_ID = -1;

const ShoppingList = () => {
	const { getShoppingList, updateShoppingList } = useUser();
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
					existing.quantity += ingredient.quantity;
					// Update the checked quantity
					if (ingredient.checked) {
						existing.checkedQuantity =
							existing.checkedQuantity !== undefined
								? existing.checkedQuantity + ingredient.quantity
								: ingredient.quantity;
					}
				} else {
					acc.push({
						...ingredient,
						// Initialize checkedQuantity for each ingredient based on its checked state
						checkedQuantity: ingredient.checked ? ingredient.quantity : 0,
					});
				}
				return acc;
			}, [])
			.map((ingredient) => ({
				// Adjust each ingredient to include the quantity as "checked/total"
				...ingredient,
				quantity: `${ingredient.checkedQuantity !== undefined ? ingredient.checkedQuantity : 0}/${ingredient.quantity} `,
			})),
	};

	return (
		<div id={styles['shopping-list']}>
			<div className={styles['header-container']}>
				<Button accent>Add Ingredients</Button>
				<ToggleSwitch
					label1="Recipe"
					label2="Total"
					onToggle={handleToggleSwitchChange}
				/>
			</div>

			{viewByRecipe ? (
				<ShoppingListRecipe
					recipes={recipes}
					onIngredientToggle={handleIngredientToggle}
				/>
			) : (
				<ShoppingListRecipe
					recipes={[totalRecipe]}
					onIngredientToggle={handleIngredientToggle}
				/>
			)}
		</div>
	);
};

export default ShoppingList;
