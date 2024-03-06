import Button from '@/components/button/Button';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import { useRecipes } from '@/context/data/useRecipes';
import { useState } from 'react';
import ShoppingListRecipe from '../../components/shopping/ShoppingListRecipe';
import styles from './shopping-list.module.scss';

const ShoppingList = () => {
	const recipes = useRecipes();

	// state hook for managing the recipes array. initially set to an empty array.
	const [recipesState, setRecipes] = useState(recipes);

	const handleIngredientToggle = (recipeId, toggledIngredient) => {
		// find the recipe that needs to be updated
		const updatedRecipes = recipesState.map((recipe) => {
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

		// update the state with the new array of recipes
		setRecipes(updatedRecipes);
	};

	return (
		<div id={styles['shopping-list']}>
			<div className={styles['header-container']}>
				<Button className={styles['add-item-button']}>Add Ingredients</Button>
				<ToggleSwitch label1="Total" label2="Recipe" />
			</div>

			<ShoppingListRecipe
				recipes={recipesState} // use recipesState here
				onIngredientToggle={handleIngredientToggle}
			/>
		</div>
	);
};

export default ShoppingList;
