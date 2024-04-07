import { useState } from 'react';
import PropTypes from 'prop-types';
import ShoppingListIngredient from './ShoppingListIngredient';
import styles from './shopping.module.scss';

// Define the ShoppingListRecipe functional component with props received from the parent component (ShoppingList)
const ShoppingListRecipe = ({ recipe, onIngredientToggle, onDelete }) => {
	// State to manage dropdown visibility
	const [isDropdownOpen, setIsDropdownOpen] = useState(true);

	// Function to toggle dropdown visibility
	const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

	return (
		<div className={styles['shopping-list-recipe']}>
			<h3
				className={`${styles['recipe-title']} ${isDropdownOpen ? styles['rotate'] : ''}`}
				onClick={toggleDropdown}
			>
				{recipe.title}
				{recipe.id != -1 && (
					<button
						onClick={(event) => {
							event.stopPropagation();
							const checkedIngredientNames = recipe.ingredients
								.filter((ingredient) => ingredient.checked)
								.map((ingredient) => ingredient.name);

							onDelete(recipe.id, checkedIngredientNames);
						}}
						className={styles['delete-button']}
					>
						<span
							className="material-symbols-outlined"
							style={{ fontSize: '24px' }}
						>
							delete
						</span>
					</button>
				)}
			</h3>

			{isDropdownOpen && (
				<ul className={styles['ingredient-list']}>
					{recipe.ingredients
						.sort((a, b) => a.checked - b.checked)
						.map((ingredient, index) => (
							<li key={index}>
								<ShoppingListIngredient
									ingredient={ingredient}
									onToggle={() => onIngredientToggle(recipe.id, ingredient)}
									onDelete={() => onDelete(recipe.id, [ingredient.name])}
								/>
							</li>
						))}
				</ul>
			)}
		</div>
	);
};

// Proptypes definition
ShoppingListRecipe.propTypes = {
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
	onDelete: PropTypes.func.isRequired,
};

export default ShoppingListRecipe;
