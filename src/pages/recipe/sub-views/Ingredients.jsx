import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipes } from '@/context/data/useRecipes';
import Ingredient from '@/components/ingredient/Ingredient';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import styles from './ingredient.module.scss';

const Ingredients = () => {
	const { recipeId } = useParams();
	const recipes = useRecipes();
	const recipe = recipes.find((r) => r.id.toString() === recipeId);

	const [useAlternativeIngredients, setUseAlternativeIngredients] =
		useState(false);
	const [ingredients, setIngredients] = useState([]);

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

	return (
		<div className={styles.ingredientsContainer}>
			<h2>Ingredients</h2>
			<ToggleSwitch
				label1="Original"
				label2="Alternative"
				onToggle={handleToggleChange}
			/>
			<ul>
				{ingredients.map((ingredient, index) => (
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
