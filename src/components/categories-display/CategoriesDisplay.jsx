import { useCategories } from '../../context/data/useCategories';
import styles from './categories-display.module.scss';

const CategoriesDisplay = () => {
	const categories = useCategories();

	return (
		<div className={styles['categories-container']}>
			{/* iterate over every category, render an icon and name */}
			{categories.map((category) => (
				<div key={category.id} className={styles['category-card']}>
					<span className="material-symbols-outlined">{category.icon}</span>
					<span className={styles['category-name']}>{category.name}</span>
				</div>
			))}
		</div>
	);
};

export default CategoriesDisplay;
