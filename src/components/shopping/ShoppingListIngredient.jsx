import PropTypes from 'prop-types';
import styles from './shopping.module.scss';

const ShoppingListIngredient = ({ ingredient, onToggle }) => {
	const handleChange = () => {
		onToggle({ ...ingredient, checked: !ingredient.checked }); // Ensure to update the checked state
	};

	const ingredientClass = `${styles['ingredient-item']} ${ingredient.checked ? styles['checked-ingredient'] : ''}`;

	return (
		<div className={ingredientClass}>
			<input
				type="checkbox"
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
		checked: PropTypes.bool, // checked property may not initially exist
	}).isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default ShoppingListIngredient;
