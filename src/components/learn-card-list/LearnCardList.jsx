import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './learn-card-list.module.scss';

const LearnCardList = ({ children, horizontal }) => {
	return (
		<div
			className={
				horizontal
					? styles.learnCardListHorizontalWrapper
					: ''
			}
		>
			<div
				className={
					horizontal ? styles.learnCardListHorizontal : styles.learnCardList
				}
			>
				{children}
			</div>
		</div>
	);
};

LearnCardList.propTypes = {
	children: PropTypes.node.isRequired,
	horizontal: PropTypes.bool,
};

const LearnCard = ({ children, image, learnId, type }) => {
	return (
		<Link to={`/learn/${type}/${learnId}`} className={styles.learnCard}>
			<div>{children}</div>
			{image && (
				<img src={image} alt="image of food" className={styles.image} />
			)}
		</Link>
	);
};

LearnCard.propTypes = {
	children: PropTypes.node.isRequired,
	image: PropTypes.string,
	learnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		.isRequired,
    type: PropTypes.string,
};

LearnCardList.Card = LearnCard;

export default LearnCardList;
