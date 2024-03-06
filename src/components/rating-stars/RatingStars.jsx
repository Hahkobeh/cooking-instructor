import PropTypes from 'prop-types';
import styles from './rating-stars.module.scss';

const RatingStars = ({ average, total }) => {
	const fullStars = Math.floor(average); // get the number of full stars
	const halfStar = average % 1 !== 0; // get the number of half stars (remainder modulo 1)
	const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // get the number of empty stars

	return (
		<div className={styles['rating-container']}>
			{[...Array(fullStars)].map((_, i) => (
				<span
					key={i}
					className="material-symbols-outlined"
					style={{ fontVariationSettings: "'FILL' 1" }} // FILL is the name of the font variation
				>
					star
				</span>
			))}
			{halfStar && <span className="material-symbols-outlined">star_half</span>}
			{[...Array(emptyStars)].map((_, i) => (
				<span key={i} className="material-symbols-outlined">
					star
				</span>
			))}
			<span>({total})</span>
		</div>
	);
};

RatingStars.propTypes = {
	average: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
};

export default RatingStars;
