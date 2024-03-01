import { useState, useEffect } from 'react';
import ShoppingListRecipe from '../../components/shopping/ShoppingListRecipe';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import styles from './shopping-list.module.scss';
import staticRecipeData from '../../data/staticRecipeData';

const ShoppingList = () => {
	// State hook for managing the recipes array. Initially set to an empty array.
	const [recipes, setRecipes] = useState([]);

	// Effect hook to populate the recipes state when the component mounts. Runs only once due to empty dependency array.
	useEffect(() => {
		setRecipes(staticRecipeData); // Updating the recipes state with the initial data.
	}, []);

	// Function to handle toggling the checked state of an ingredient within a recipe.
	const handleIngredientToggle = (recipeId, toggledIngredient) => {
		setRecipes(
			// Iterate over recipes
			recipes.map((recipe) => {
				// Find a matching recipe id
				if (recipe.id === recipeId) {
					return {
						...recipe, // Return a copy of recipe
						// Iterate over ingredients of the copy
						ingredients: recipe.ingredients.map((ingredient) => {
							// Find a matching name
							if (ingredient.name === toggledIngredient.name) {
								// Return a copy with updated 'checked' state
								return { ...ingredient, checked: !ingredient.checked };
							}
							return ingredient; // If no match, return the original ingredient
						}),
					};
				}
				return recipe; // If no match, return the original recipe
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
				<ToggleSwitch />
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
