import { useState, useEffect } from 'react';
import ShoppingListRecipe from '../../components/shopping/ShoppingListRecipe';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import styles from './shopping-list.module.scss';

const ShoppingList = () => {
	// State hook for managing the recipes array. Initially set to an empty array.
	const [recipes, setRecipes] = useState([]);

	// Effect hook to populate the recipes state when the component mounts. Runs only once due to empty dependency array.
	useEffect(() => {
		const initialRecipes = [
			// Hard-coded initial recipes data.
			{
				id: 1,
				name: 'Recipe 1',
				ingredients: [
					{ name: 'Ingredient 1', quantity: '2 cups' },
					{ name: 'Ingredient 2', quantity: '1 tablespoon' },
					{ name: 'Ingredient 3', quantity: '2 tablespoon' },
				],
			},
			{
				id: 2,
				name: 'Recipe 2',
				ingredients: [
					{ name: 'Ingredient 1', quantity: '500g' },
					{ name: 'Ingredient 2', quantity: '200ml' },
				],
			},
			{
				id: 3,
				name: 'Recipe 3',
				ingredients: [
					{ name: 'Ingredient 1', quantity: '3 bunches' },
					{ name: 'Ingredient 2', quantity: '2 units' },
					{ name: 'Ingredient 3', quantity: '1 tablespoon' },
				],
			},
			{
				id: 4,
				name: 'Recipe 4',
				ingredients: [
					{ name: 'Ingredient 1', quantity: '3 bunches' },
					{ name: 'Ingredient 2', quantity: '2 units' },
					{ name: 'Ingredient 3', quantity: '1 tablespoon' },
				],
			},
		];

		setRecipes(initialRecipes); // Updating the recipes state with the initial data.
	}, []);

	// Function to handle toggling the checked state of an ingredient within a recipe.
	const handleIngredientToggle = (recipeId, toggledIngredient) => {
		setRecipes(
			recipes.map((recipe) => {
				if (recipe.id === recipeId) {
					return {
						...recipe,
						ingredients: recipe.ingredients.map((ingredient) => {
							if (ingredient.name === toggledIngredient.name) {
								return { ...ingredient, checked: !ingredient.checked }; // Toggling the checked state.
							}
							return ingredient;
						}),
					};
				}
				return recipe;
			})
		);
	};

	// Render method of the component, defining the structure of the shopping list UI.
	return (
		<div id={styles['shopping-list']}>
			<div className={styles['header-container']}>
				<h1>
					Shopping <span className="accent">List</span>
				</h1>
				<ToggleSwitch label="Mode" />
			</div>
			<button className={styles['add-item-button']}> + Add To List </button>

			<ShoppingListRecipe
				recipes={recipes}
				onIngredientToggle={handleIngredientToggle}
			/>
		</div>
	);
};

export default ShoppingList;
