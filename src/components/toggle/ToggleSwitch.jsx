import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleSwitch.module.scss'; // Path to your CSS module

const ToggleSwitch = ({ label }) => {
	const [isToggled, setIsToggled] = useState(false);

	const toggleSwitch = () => {
		setIsToggled(!isToggled);
	};

	return (
		<div className={styles['toggle-container']}>
			<label className={styles['toggle-switch']}>
				<input
					type="checkbox"
					checked={isToggled}
					onChange={toggleSwitch}
					className={styles.toggleInput}
				/>
				<span className={styles.slider}></span>
			</label>
			<div className={styles['label-text']}>{label}</div>
		</div>
	);
};

ToggleSwitch.propTypes = {
	label: PropTypes.string.isRequired,
};

export default ToggleSwitch;
