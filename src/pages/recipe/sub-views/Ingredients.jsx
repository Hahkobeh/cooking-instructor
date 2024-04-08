import Ingredient from '@/components/ingredient/Ingredient';
import Toast from '@/components/toast/Toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipes } from '@/context/data/useRecipes';
import { useUser } from '@/context/user/useUser';
import styles from './ingredient.module.scss';

const Ingredients = () => {
	const { recipeId } = useParams();
	const recipes = useRecipes();
	const {
		getShoppingList,
		addRecipeToShoppingList,
		removeRecipeFromShoppingList,
		addIngredientToShoppingList,
		removeIngredientFromShoppingList,
	} = useUser();

	const recipe = recipes.find((r) => r.id.toString() === recipeId);
	const [ingredientType, setIngredientType] = useState('Normal');
	const [ingredients, setIngredients] = useState([]);
	const [servingSize, setServingSize] = useState(1); // assuming a starting default serving size
	const defaultServingSize = 1; // this should match the recipe's intended serving size, we should add this to the recipe data
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState('');

	const isInShoppingList = (ingredient) => {
		const recipeShoppingList = getShoppingList().find(
			(recipe) => recipe.id.toString() === recipeId
		);
		console.log(recipeShoppingList);
		if (recipeShoppingList && recipeShoppingList.ingredients) {
			return recipeShoppingList.ingredients.some(
				(shopIngredient) => shopIngredient.name === ingredient.name
			);
		}
		return false;
	};

	const allInShoppingList = ingredients.every((ingredient) =>
		isInShoppingList(ingredient)
	);

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

			const sortedIngredients = selectedIngredients
				.map((ingredient) => ({
					...ingredient,
					checked: isInShoppingList(ingredient),
					inShoppingList: isInShoppingList(ingredient), // Add a flag to indicate presence in shopping list
				}))
				.sort((a, b) =>
					a.inShoppingList === b.inShoppingList ? 0 : a.inShoppingList ? -1 : 1
				); // Sort so ingredients in the shopping list come first

			setIngredients(sortedIngredients);
		}
	}, [recipe, ingredientType]);

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

	const handleAddIngredientToShoppingList = (ingredient) => {
		addIngredientToShoppingList(recipe, ingredient);
		setShowToast(true);
		setToastMessage(`${ingredient.name} added to shopping list`);
	};
	const handleAddAllToShoppingList = () => {
		let ingredientsToAdd;
		// if no ingredients are selected, mark all as selected for visual feedback
		ingredientsToAdd = ingredients.map((ingredient) => ({
			...ingredient,
		}));
		setIngredients(ingredientsToAdd); // This updates the UI to show all ingredients as checked

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
		setShowToast(true);
		setToastMessage(`All ingredients added to shopping list`);
	};

	const handleRemoveIngredientFromShoppingList = (ingredient) => {
		removeIngredientFromShoppingList(recipe, ingredient);
		setShowToast(true);
		setToastMessage(`${ingredient.name} removed from shopping list`);
	};

	const handleRemoveAllFromShoppingList = () => {
		removeRecipeFromShoppingList(recipe.id);
		setShowToast(true);
		setToastMessage('All ingredients removed from shopping list');
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
							onAdd={() => handleAddIngredientToShoppingList(ingredient)}
							onRemove={() =>
								handleRemoveIngredientFromShoppingList(ingredient)
							}
							inShoppingList={isInShoppingList(ingredient)}
						/>
					</li>
				))}
			</ul>
			<div className={styles['button-container']}>
				{allInShoppingList ? (
					<button
						className={styles['action-button']}
						onClick={handleRemoveAllFromShoppingList}
					>
						Remove all from shopping list
					</button>
				) : (
					<button
						className={styles['action-button']}
						onClick={handleAddAllToShoppingList}
					>
						Add all to shopping list
					</button>
				)}
				<Toast
					message={toastMessage}
					isVisible={showToast}
					onClose={() => setShowToast(false)}
				/>
			</div>
		</div>
	);
};

export default Ingredients;
