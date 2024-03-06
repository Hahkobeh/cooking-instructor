import { useRecipes } from '@/context/data/useRecipes';
import { useParams } from 'react-router-dom';
import styles from './steps.module.scss';

const Steps = () => {
	const { recipeId } = useParams();
	const recipes = useRecipes(); // get recipes from the context
	const recipe = recipes.find((r) => r.id.toString() === recipeId);

	if (!recipe) {
		return <div>Recipe not found</div>;
	}

	return (
		<div className={styles['steps-container']}>
			<button className={styles['step-mode-button']}>Step-by-step Mode </button>
			<ol>
				{/* render the steps list */}
				{recipe.steps.map((step) => (
					<li key={step.number}>{step.description}</li>
				))}
			</ol>
		</div>
	);
};

export default Steps;
