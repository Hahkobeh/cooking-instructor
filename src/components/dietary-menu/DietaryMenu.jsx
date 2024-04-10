import { useDietaryRestrictions } from '@/context/data/useDietaryRestrictions';
import PropTypes from 'prop-types';
import ToggleSwitch from '../toggle/ToggleSwitch';
import styles from './dietary-menu.module.scss';

const DietaryMenu = ({ value, setValue }) => {
	const dietaryRestrictions = useDietaryRestrictions();
	if (value.length !== 3) return <p>Incorrect input for dietary menu</p>;

	const setSelectedValue = (i) => {
		let temp = value;
		temp[i] = !temp[i];
		setValue(temp);
	};

	return (
		<ul className={styles.dietaryMenu}>
			{dietaryRestrictions.map((r, i) => (
				<li key={r.id}>
					<p>{r.label}</p>
					<ToggleSwitch initialValue={value[i]} onToggle={() => setSelectedValue(i)}/>
				</li>
			))}
		</ul>
	);
};

DietaryMenu.propTypes = {
	value: PropTypes.array,
	setValue: PropTypes.func,
};

export default DietaryMenu;
