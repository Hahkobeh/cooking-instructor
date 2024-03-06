import { useDietaryRestrictions } from '@/context/data/useDietaryRestrictions';
import ToggleSwitch from '../toggle/ToggleSwitch';
import styles from './dietary-menu.module.scss';

const DietaryMenu = () => {
	const dietaryRestrictions = useDietaryRestrictions();
	console.log(dietaryRestrictions);
	return (
		<ul className={styles.dietaryMenu}>
			{dietaryRestrictions.map((r) => (
				<li key={r.id}>
					<p>{r.label}</p>
					<ToggleSwitch />
				</li>
			))}
		</ul>
	);
};
export default DietaryMenu;
