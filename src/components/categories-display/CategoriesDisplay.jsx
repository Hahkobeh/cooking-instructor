import PropTypes from 'prop-types';
import { useTags } from '@/context/data/useTags';
import styles from './categories-display.module.scss';

const CategoriesDisplay = ({ onCategorySelect }) => {
	const categories = useTags();

	return (
		<div className={styles['categories-container']}>
			{/* iterate over every category, render an icon and name */}
			{categories.map((category) => (
				<div
					key={category.id}
					className={styles['category-card']}
					onClick={() => onCategorySelect(category.value)}
				>
					<span className="material-symbols-outlined">{category.icon}</span>
					<span className={styles['category-name']}>{category.value}</span>
				</div>
			))}
		</div>
	);
};

CategoriesDisplay.propTypes = {
	onCategorySelect: PropTypes.string.isRequired,
};

export default CategoriesDisplay;
