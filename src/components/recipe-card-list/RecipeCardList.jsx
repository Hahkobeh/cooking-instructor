import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './recipe-card-list.module.scss';

const RecipeCardList = ({ children }) => {
	return <div className={styles.recipeCardList}>{children}</div>;
};

RecipeCardList.propTypes = {
	children: PropTypes.node.isRequired,
};

const RecipeCard = ({ children, image, recipeId }) => {
	return (
		<Link to={`/recipe/${recipeId}/about`} className={styles.recipeCard}>
			<div>{children}</div>
			<img src={image} alt="image of food" className={styles.image} />
		</Link>
	);
};

RecipeCard.propTypes = {
	children: PropTypes.node.isRequired,
	image: PropTypes.string,
	recipeId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		.isRequired,
};

RecipeCardList.Card = RecipeCard;

export default RecipeCardList;
