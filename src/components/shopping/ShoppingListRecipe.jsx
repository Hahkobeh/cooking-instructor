import PropTypes from 'prop-types';
import ShoppingListIngredient from './ShoppingListIngredient';
import styles from './shopping.module.scss';

// Define the ShoppingListRecipe functional component with props received from the parent component (ShoppingList)
const ShoppingListRecipe = ({ recipes, onIngredientToggle }) => {
	return (
		<div>
			{/* Iterate over the recipes array passed as a prop, rendering a div for each recipe */}
			{recipes.map((recipe) => (
				<div key={recipe.id} className={styles['shopping-list-recipe']}>
					<h3 className={styles['recipe-title']}>{recipe.name}</h3>
					<ul>
						{/* Iterate over the ingredients of the current recipe, rendering a list item for each */}
						{recipe.ingredients.map((ingredient, index) => (
							<li key={index}>
								{/* Render the ShoppingListIngredient component for each ingredient */}
								<ShoppingListIngredient
									ingredient={ingredient} // Pass the entire ingredient object
									onToggle={() => onIngredientToggle(recipe.id, ingredient)} // Calls onIngredientToggle, passed as a prop (from the parent component)
								/>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

ShoppingListRecipe.propTypes = {
	recipes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			ingredients: PropTypes.arrayOf(
				PropTypes.shape({
					name: PropTypes.string.isRequired,
					quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
						.isRequired,
					checked: PropTypes.bool, // Ensure this is included
				})
			).isRequired,
		})
	).isRequired,
	onIngredientToggle: PropTypes.func.isRequired,
};

export default ShoppingListRecipe;
