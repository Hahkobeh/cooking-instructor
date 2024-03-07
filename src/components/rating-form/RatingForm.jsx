import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../button/Button';
import styles from './rating-form.module.scss';

const RatingForm = ({ onSubmit }) => {
	const [rating, setRating] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent the form from submitting
		onSubmit(rating); // call the onSubmit function with the rating, from parent component
		setRating(0); // reset after submit
	};

	return (
		<form onSubmit={handleSubmit} className={styles['rating-form']}>
			<div className={styles['rating-stars']}>
				{/* map through an array of 5 stars and render a button for each */}
				{[1, 2, 3, 4, 5].map((star) => (
					<button
						key={star}
						type="button"
						className={`${styles['star']} ${rating >= star ? styles.filled : ''}`}
						onClick={() => setRating(star)}
						style={{
							// applying inline style for font variation settings
							fontVariationSettings: rating >= star ? "'FILL' 1" : "'FILL' 0",
						}}
					>
						<span className="material-symbols-outlined">star</span>
					</button>
				))}
			</div>
			<Button type="submit" onSubmit={null} accent>
				Rate
			</Button>
		</form>
	);
};

RatingForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default RatingForm;
