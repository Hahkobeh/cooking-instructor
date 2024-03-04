import PropTypes from 'prop-types';
import styles from './recipe-card-list.module.scss';

const RecipeCardList = ({ children }) => {
	return <div className={styles.recipeCardList}>{children}</div>;
};

RecipeCardList.propTypes = {
	children: PropTypes.node.isRequired,
};

const RecipeCard = ({ children, image }) => {
	return (
		<div className={styles.recipeCard}>
			<div>{children}</div>
			<img src={image} alt="image of food" className={styles.image} />
		</div>
	);
};

RecipeCard.propTypes = {
	children: PropTypes.node.isRequired,
	image: PropTypes.string,
};

RecipeCardList.Card = RecipeCard;

export default RecipeCardList;
