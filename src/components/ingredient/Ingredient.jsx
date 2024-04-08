import PropTypes from 'prop-types';
import styles from './ingredient.module.scss';

// Define the Ingredient functional component with destructured props.
const Ingredient = ({ ingredient, onAdd, onRemove, inShoppingList }) => {
	// Determines the CSS class based on whether the ingredient is checked, applying different styles
	const ingredientClass = `${styles['ingredient-item']} ${ingredient.checked ? styles['checked-ingredient'] : ''}`;

	return (
		<div className={ingredientClass}>
			{inShoppingList ? (
				<button
					onClick={() => onRemove(ingredient)}
					className={styles.removeButton}
				>
					<span className="material-symbols-outlined">remove</span>
				</button>
			) : (
				<button onClick={() => onAdd(ingredient)} className={styles.addButton}>
					<span className="material-symbols-outlined">add</span>
				</button>
			)}
			<p className={styles['ingredient-name']}>{ingredient.name}</p>
			<h4>{`${ingredient.quantity} ${ingredient.unit}`}</h4>
		</div>
	);
};

Ingredient.propTypes = {
	ingredient: PropTypes.object.isRequired,
	onAdd: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	inShoppingList: PropTypes.bool.isRequired,
};

export default Ingredient;
