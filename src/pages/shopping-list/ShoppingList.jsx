import Button from '@/components/button/Button';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import { useRecipes } from '@/context/data/useRecipes';
import { useState } from 'react';
import ShoppingListRecipe from '../../components/shopping/ShoppingListRecipe';
import ShoppingListIngredient from '../../components/shopping/ShoppingListIngredient';
import styles from './shopping-list.module.scss';

const ShoppingList = () => {
	const recipes = useRecipes();

	// state hook for managing the viewByRecipe state. initially set to true for recipe view
	const [viewByRecipe, setViewByRecipe] = useState(true);

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
	// state hook for managing the viewByRecipe state. initially set to true.
	const handleToggleSwitchChange = () => {
		setViewByRecipe(!viewByRecipe);
	};

	// flatten ingredients if viewByRecipe is false
	const flattenedIngredients = recipesState
		// flatten the ingredients array
		.flatMap((recipe) => recipe.ingredients)
		// remove duplicates based on ingredient name
		.reduce((acc, ingredient) => {
			const existing = acc.find((item) => item.name === ingredient.name);
			if (existing) {
				existing.quantity += ingredient.quantity; //  re-calculating the quantity
			} else {
				acc.push({ ...ingredient });
			}
			return acc;
		}, []);

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
					recipes={recipesState}
					onIngredientToggle={handleIngredientToggle}
				/>
			) : (
				<div className={styles['ingredient-list']}>
					{flattenedIngredients.map((ingredient, index) => (
						<ShoppingListIngredient
							key={index}
							ingredient={ingredient}
							onToggle={() =>
								handleIngredientToggle(ingredient.recipeId, ingredient)
							}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default ShoppingList;
