import PropTypes from 'prop-types';
import styles from './CircularCheckbox.module.scss';

// Define the CircularCheckbox functional component with destructured props `checked` and `onChange`.
const CircularCheckbox = ({ checked, onChange }) => {
	return (
		// label element to increase the clickable area of checkbox
		<label className={styles['custom-checkbox']}>
			{/* The actual checkbox input, visually hidden but interactive.
                Its checked state is controlled by the `checked` prop, and it triggers the `onChange`
                function passed as a prop when its state changes. */}
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				// Apply CSS class to visually hide the checkbox but keeping it functional
				className={styles['hidden-checkbox']}
			/>
			{/* A span used to visually represent the custom circular checkbox. The actual appearance,
                including the visual indication of the checked state, is controlled via CSS. */}
			<span className={styles['checkbox-circle']}></span>
		</label>
	);
};

CircularCheckbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default CircularCheckbox;
