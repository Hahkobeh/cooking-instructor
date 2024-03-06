import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './recipe-nav-bar.module.scss';

const RecipeNavBar = ({ recipeId, activeTab, onTabClick }) => {
	return (
		<div className={styles.navBar}>
			<NavLink
				to={`/recipe/${recipeId}/about`}
				className={`${styles.navItem} ${activeTab === 'about' ? styles.active : ''}`}
				onClick={() => onTabClick('about')} // call onTabClick with 'about' as argument
			>
				<span className="material-symbols-outlined">restaurant_menu</span>
				<span>About</span>
			</NavLink>
			<NavLink
				to={`/recipe/${recipeId}/ingredients`}
				className={`${styles.navItem} ${activeTab === 'ingredients' ? styles.active : ''}`}
				onClick={() => onTabClick('ingredients')} // call onTabClick with 'ingredients' as argument
			>
				<span className="material-symbols-outlined">shopping_bag</span>
				<span>Ingredients</span>
			</NavLink>
			<NavLink
				to={`/recipe/${recipeId}/steps`}
				className={`${styles.navItem} ${activeTab === 'steps' ? styles.active : ''}`}
				onClick={() => onTabClick('steps')} // call onTabClick with 'steps' as argument
			>
				<span className="material-symbols-outlined">checklist</span>
				<span>Steps</span>
			</NavLink>
		</div>
	);
};

// define prop types
RecipeNavBar.propTypes = {
	recipeId: PropTypes.string.isRequired,
	activeTab: PropTypes.string.isRequired,
	onTabClick: PropTypes.func.isRequired,
};

export default RecipeNavBar;
