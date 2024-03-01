import PropTypes from 'prop-types';
import CircularCheckbox from '../checkbox/CircularCheckbox';
import styles from './shopping.module.scss';

// Define the ShoppingListIngredient functional component with destructured props.
const ShoppingListIngredient = ({ ingredient, onToggle }) => {
	// Function to handle change events (e.g., when the checkbox is clicked).
	const handleChange = () => {
		// Calls the onToggle function passed as a prop from parent (ShoppingListRecipe), with the current ingredient's state updated (toggled checked state).
		onToggle({ ...ingredient, checked: !ingredient.checked }); // use '...' spread operator to copy ingredient with all its properties, but
	};

	// Determines the CSS class based on whether the ingredient is checked, applying different styles
	const ingredientClass = `${styles['ingredient-item']} ${ingredient.checked ? styles['checked-ingredient'] : ''}`;

	return (
		<div className={ingredientClass}>
			<CircularCheckbox
				checked={ingredient.checked || false}
				onChange={handleChange}
			/>
			<span className={styles['ingredient-name']}>{ingredient.name}</span>
			<span className={styles['ingredient-quantity']}>
				{ingredient.quantity}
			</span>
		</div>
	);
};

ShoppingListIngredient.propTypes = {
	ingredient: PropTypes.shape({
		name: PropTypes.string.isRequired,
		quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
		checked: PropTypes.bool, // Checked property may not initially exist
	}).isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default ShoppingListIngredient;
