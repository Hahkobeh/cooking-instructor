import PropTypes from 'prop-types';
import ShoppingListIngredient from './ShoppingListIngredient';
import styles from './shopping.module.scss';

const ShoppingListRecipe = ({ recipes, onIngredientToggle }) => {
	return (
		<div>
			{recipes.map((recipe) => (
				<div key={recipe.id} className={styles['shopping-list-recipe']}>
					<h3 className={styles['recipe-title']}>{recipe.name}</h3>
					<ul>
						{recipe.ingredients.map((ingredient, index) => (
							<li key={index}>
								<ShoppingListIngredient
									ingredient={ingredient} // Pass the entire ingredient object
									onToggle={() => onIngredientToggle(recipe.id, ingredient)}
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
