import { useState } from 'react';
import PropTypes from 'prop-types';
import ShoppingListIngredient from './ShoppingListIngredient';
import styles from './shopping.module.scss';

// Define the ShoppingListRecipe functional component with props received from the parent component (ShoppingList)
const ShoppingListRecipe = ({
	recipes,
	onIngredientToggle,
	onDeleteRecipe,
}) => {
	// State to manage dropdown visibility
	const [dropdownsOpen, setDropdownsOpen] = useState({});

	// Function to toggle dropdown visibility
	const toggleDropdown = (id) => {
		setDropdownsOpen((prevDropdownsOpen) => ({
			...prevDropdownsOpen,
			[id]: !prevDropdownsOpen[id],
		}));
	};

	return (
		<div>
			{/* Iterate over the recipes array passed as a prop, rendering a div for each recipe */}
			{recipes.map((recipe) => (
				<div key={recipe.id} className={styles['shopping-list-recipe']}>
					<h3
						className={`${styles['recipe-title']} ${dropdownsOpen[recipe.id] ? styles['rotate'] : ''}`}
						onClick={() => toggleDropdown(recipe.id)}
					>
						{recipe.title}
						<button
							onClick={() => onDeleteRecipe(recipe.id)}
							className={styles['delete-button']}
						>
							<span
								className="material-symbols-outlined"
								style={{ fontSize: '24px' }}
							>
								delete
							</span>
						</button>
					</h3>

					{dropdownsOpen[recipe.id] && (
						<ul className={styles['ingredient-list']}>
							{/* Iterate over the ingredients of the current recipe, rendering a list item for each */}
							{recipe.ingredients.map((ingredient, index) => (
								<li key={index}>
									{/* Render the ShoppingListIngredient component for each ingredient */}
									<ShoppingListIngredient
										ingredient={ingredient}
										onToggle={() => onIngredientToggle(recipe.id, ingredient)} // Calls onIngredientToggle, passed as a prop (from the parent component)
									/>
								</li>
							))}
						</ul>
					)}
				</div>
			))}
		</div>
	);
};

// Proptypes definition
ShoppingListRecipe.propTypes = {
	recipes: PropTypes.arrayOf(
		PropTypes.shape({
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
		})
	).isRequired,
	onIngredientToggle: PropTypes.func.isRequired,
	onDeleteRecipe: PropTypes.func, // Add this line
};

export default ShoppingListRecipe;
