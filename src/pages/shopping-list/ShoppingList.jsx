import { useState, useEffect } from 'react';
import ShoppingListRecipe from '../../components/shopping/ShoppingListRecipe';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import styles from './shopping-list.module.scss';

const ShoppingList = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const initialRecipes = [
			{
				id: 1,
				name: 'Recipe 1',
				ingredients: [
					{ name: 'Ingredient 1', quantity: '2 cups' },
					{ name: 'Ingredient 2', quantity: '1 tablespoon' },
				],
			},
			{
				id: 2,
				name: 'Recipe 2',
				ingredients: [
					{ name: 'Ingredient 3', quantity: '500g' },
					{ name: 'Ingredient 4', quantity: '200ml' },
				],
			},
			// Can add more recipes here
		];

		setRecipes(initialRecipes);
	}, []); // Empty dependency array makes this effect run only once on component mount

	const handleIngredientToggle = (recipeId, toggledIngredient) => {
		setRecipes(
			recipes.map((recipe) => {
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
			})
		);
	};

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
