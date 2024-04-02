import Ingredient from '@/components/ingredient/Ingredient';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import { useRecipes } from '@/context/data/useRecipes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ingredient.module.scss';

const Ingredients = () => {
	const { recipeId } = useParams();
	const recipes = useRecipes();
	const recipe = recipes.find((r) => r.id.toString() === recipeId);

	const [useAlternativeIngredients, setUseAlternativeIngredients] =
		useState(false);
	const [ingredients, setIngredients] = useState([]);
	const [servingSize, setServingSize] = useState(1); // assuming a starting default serving size
	const defaultServingSize = 1; // this should match the recipe's intended serving size, we should add this to the recipe data

	console.log(recipe);

	useEffect(() => {
		if (recipe) {
			const selectedIngredients = useAlternativeIngredients
				? recipe.ingredients2
				: recipe.ingredients;
			setIngredients(
				selectedIngredients.map((ingredient) => ({
					...ingredient,
					checked: false, // Initially unchecked
				}))
			);
		}
	}, [recipe, useAlternativeIngredients]);

	const toggleIngredientChecked = (name) => {
		setIngredients(
			ingredients.map((ingredient) =>
				ingredient.name === name
					? { ...ingredient, checked: !ingredient.checked }
					: ingredient
			)
		);
	};

	// handler for switching between original and alternative ingredients
	const handleToggleChange = () => {
		setUseAlternativeIngredients(!useAlternativeIngredients);
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
		<div className={styles.ingredientsContainer}>
			<div className={styles.footer}>
				<button className={styles['add-to-list-button']}>
					Add To Shopping List{' '}
				</button>
				<ToggleSwitch
					label1="Original"
					label2="Alternative"
					onToggle={handleToggleChange}
				/>
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
		</div>
	);
};

export default Ingredients;
