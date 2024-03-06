import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './recipe-card-list.module.scss';

const RecipeCardList = ({ children, horizontal }) => {
	return (
		<div
			className={
				horizontal
					? styles.recipeCardListHorizontalWrapper
					: ''
			}
		>
			<div
				className={
					horizontal ? styles.recipeCardListHorizontal : styles.recipeCardList
				}
			>
				{children}
			</div>
		</div>
	);
};

RecipeCardList.propTypes = {
	children: PropTypes.node.isRequired,
	horizontal: PropTypes.bool,
};

const RecipeCard = ({ children, image, recipeId }) => {
	return (
		<Link to={`/recipe/${recipeId}/about`} className={styles.recipeCard}>
			<div>{children}</div>
			{image && (
				<img src={image} alt="image of food" className={styles.image} />
			)}
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
