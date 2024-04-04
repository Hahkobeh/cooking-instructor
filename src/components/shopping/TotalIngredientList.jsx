import PropTypes from 'prop-types';
import ShoppingListIngredient from './ShoppingListIngredient';
import styles from './shopping.module.scss';

// Define the ShoppingListRecipe functional component with props received from the parent component (ShoppingList)
const TotalIngredientList = ({ recipe, onIngredientToggle }) => {
	return (
		<div className={styles['shopping-list-recipe']}>
			<h3>{recipe.title}</h3>

			<ul className={styles['ingredient-list']}>
				{recipe.ingredients.map((ingredient, index) => (
					<li key={index}>
						<ShoppingListIngredient
							ingredient={ingredient}
							onToggle={() => onIngredientToggle(recipe.id, ingredient)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

// Proptypes definition
TotalIngredientList.propTypes = {
	recipe: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
					.isRequired,
				checked: PropTypes.bool,
			})
		).isRequired,
	}).isRequired,
	onIngredientToggle: PropTypes.func.isRequired,
};

export default TotalIngredientList;
