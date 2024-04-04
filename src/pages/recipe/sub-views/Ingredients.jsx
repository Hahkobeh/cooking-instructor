import Ingredient from '@/components/ingredient/Ingredient';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipes } from '@/context/data/useRecipes';
import { useUser } from '@/context/user/useUser';
import styles from './ingredient.module.scss';

const Ingredients = () => {
	const { recipeId } = useParams();
	const recipes = useRecipes();
	const { addRecipeToShoppingList } = useUser();

	const recipe = recipes.find((r) => r.id.toString() === recipeId);
	const [ingredientType, setIngredientType] = useState('Normal');
	const [ingredients, setIngredients] = useState([]);
	const [servingSize, setServingSize] = useState(1); // assuming a starting default serving size
	const defaultServingSize = 1; // this should match the recipe's intended serving size, we should add this to the recipe data

	console.log(recipe);

	useEffect(() => {
		if (recipe) {
			let selectedIngredients = [];
			switch (ingredientType) {
				case 'Normal':
					selectedIngredients = recipe.ingredientsNormal || [];
					break;
				case 'Vegetarian':
					selectedIngredients = recipe.ingredientsVegeterian || [];
					break;
				case 'Gluten-Free':
					selectedIngredients = recipe.ingredientsGlutenFree || [];
					break;
				default:
					selectedIngredients = recipe.ingredientsNormal || [];
			}
			setIngredients(
				selectedIngredients.map((ingredient) => ({
					...ingredient,
					checked: false,
				}))
			);
		}
	}, [recipe, ingredientType]);

	const toggleIngredientChecked = (name) => {
		setIngredients(
			ingredients.map((ingredient) =>
				ingredient.name === name
					? { ...ingredient, checked: !ingredient.checked }
					: ingredient
			)
		);
	};

	// function to adjust ingredient quantities based on the serving size
	const adjustIngredientQuantities = (ingredients, servingSize) => {
		return ingredients.map((ingredient) => {
			// calculate the new quantity based on the serving size
			const newQuantity =
				parseFloat(ingredient.quantity) * (servingSize / defaultServingSize);
			return {
				...ingredient,
				quantity: `${newQuantity.toFixed(0)}`, // keep it as a string for consistency
			};
		});
	};

	// adjusted ingredients based on the current serving size
	const adjustedIngredients = adjustIngredientQuantities(
		ingredients,
		servingSize
	);

	const handleAddToShoppingList = () => {
		// check if any ingredients have been selected
		const anySelected = ingredients.some((ingredient) => ingredient.checked);

		let ingredientsToAdd;
		if (!anySelected) {
			// if no ingredients are selected, mark all as selected for visual feedback
			ingredientsToAdd = ingredients.map((ingredient) => ({
				...ingredient,
				checked: true,
			}));
			setIngredients(ingredientsToAdd); // This updates the UI to show all ingredients as checked
		} else {
			// use only the already selected ingredients
			ingredientsToAdd = ingredients.filter((ingredient) => ingredient.checked);
		}
		// adjust the quantities of the ingredients based on the serving size
		const adjustedIngredients = adjustIngredientQuantities(
			ingredientsToAdd,
			servingSize
		);

		// prepare recipe object with the ingredients to add
		const recipeToAdd = {
			...recipe,
			ingredients: adjustedIngredients.map((ingredient) => ({
				...ingredient,
				checked: false, // reset 'checked' state
			})),
		};

		// add the recipe to the shopping list (user.shoppingList)
		addRecipeToShoppingList(recipeToAdd);
	};

	return (
		<div className={styles['ingredients-container']}>
			<div className={styles['segmented-control']}>
				{['Normal', 'Vegetarian', 'Gluten-Free'].map((type) => (
					<button
						key={type}
						className={`${styles.segment} ${ingredientType === type ? styles.active : ''}`}
						onClick={() => setIngredientType(type)}
					>
						{type}
					</button>
				))}
			</div>

			<div className={styles['serving-size-controls']}>
				<button onClick={() => setServingSize(Math.max(1, servingSize - 1))}>
					-
				</button>
				<span>Serving Size: {servingSize}</span>
				<button onClick={() => setServingSize(servingSize + 1)}>+</button>
			</div>
			<ul>
				{adjustedIngredients.map((ingredient, index) => (
					<li key={index}>
						<Ingredient
							ingredient={ingredient}
							onToggle={() => toggleIngredientChecked(ingredient.name)}
						/>
					</li>
				))}
			</ul>
			<div className={styles['button-container']}>
				<button
					className={styles['add-to-list-button']}
					onClick={handleAddToShoppingList}
				>
					Add To Shopping List
				</button>
			</div>
		</div>
	);
};

export default Ingredients;
