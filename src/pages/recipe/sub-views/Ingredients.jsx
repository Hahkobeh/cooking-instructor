import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipes } from '@/context/data/useRecipes';
import ShoppingListIngredient from '../../../components/shopping/ShoppingListIngredient';
import styles from './ingredient.module.scss';

const Ingredients = () => {
	const { recipeId } = useParams();
	const recipes = useRecipes(); // get recipes from the context
	const recipe = recipes.find((r) => r.id.toString() === recipeId);

	// initialize states for ingredients and serving size
	const [ingredients, setIngredients] = useState([]);
	const [servingSize, setServingSize] = useState(1); // assuming a starting default serving size
	const defaultServingSize = 1; // this should match the recipe's intended serving size, we should add this to the recipe data

	useEffect(() => {
		if (recipe) {
			// initialize ingredients with a checked property
			setIngredients(
				recipe.ingredients.map((ingredient) => ({
					...ingredient,
					checked: false, // assume all ingredients are initially unchecked
				}))
			);
		}
	}, [recipe]);

	const toggleIngredientChecked = (name) => {
		// toggle the checked state for the clicked ingredient
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

	return (
		<div className={styles['ingredients-container']}>
			<div className={styles['serving-size-controls']}>
				<button onClick={() => setServingSize(Math.max(1, servingSize - 1))}>
					-
				</button>
				<span>Serving Size: {servingSize}</span>
				<button onClick={() => setServingSize(servingSize + 1)}>+</button>
			</div>
			<ul className={styles.ul}>
				{adjustedIngredients.map((ingredient, index) => (
					<li key={index} className={styles.li}>
						<ShoppingListIngredient
							ingredient={{ ...ingredient, quantity: ingredient.quantity }}
							onToggle={() => toggleIngredientChecked(ingredient.name)}
						/>
					</li>
				))}
			</ul>
			<button className={styles['add-to-list-button']}> + Add To List </button>
		</div>
	);
};

export default Ingredients;
