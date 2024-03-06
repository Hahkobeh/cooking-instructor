import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleSwitch.module.scss';

const ToggleSwitch = () => {
	const [isToggled, setIsToggled] = useState(false);

	// Change state if toggle is pressed
	const toggleSwitch = () => {
		setIsToggled(!isToggled);
	};

	// Determine label text based on the toggle state
	const labelText = isToggled ? 'Mode 2' : 'Mode 1';

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
			<div className={styles['label-text']}>{labelText}</div>
		</div>
	);
};

ToggleSwitch.propTypes = {
	label: PropTypes.string,
};

export default ToggleSwitch;
