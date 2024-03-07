import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './ToggleSwitch.module.scss';

const ToggleSwitch = ({ label1, label2, onToggle }) => {
	const [isToggled, setIsToggled] = useState(false);

	// Change state if toggle is pressed
	const toggleSwitch = () => {
		setIsToggled(!isToggled);
		onToggle(!isToggled); // notify the parent component about the change
	};

	// Determine label text based on the toggle state
	const labelText = isToggled ? label1 : label2;

	return (
		<div className={styles['toggle-container']}>
			<label className={styles['toggle-switch']}>
				<input
					type="checkbox"
					checked={isToggled}
					onChange={toggleSwitch}
					className={styles['hidden-input']}
				/>
				<span className={styles.slider}></span>
			</label>
			{label1 && label2 && (
				<div className={styles['label-text']}>{labelText}</div>
			)}
		</div>
	);
};

ToggleSwitch.propTypes = {
	label1: PropTypes.string,
	label2: PropTypes.string,
	onToggle: PropTypes.func,
};

export default ToggleSwitch;
