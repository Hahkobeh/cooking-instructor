import RatingForm from '@/components/rating-form/RatingForm';
import { useRecipes } from '@/context/data/useRecipes';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './steps.module.scss';

const Steps = () => {
	const navigate = useNavigate(); // get the navigate function from the router
	const { recipeId } = useParams(); // get the recipeId from the URL
	const recipes = useRecipes(); // get recipes from the context
	const recipe = recipes.find((r) => r.id.toString() === recipeId);

	const handleRatingSubmit = (newRating) => {
		// eventually will use to update the recipe rating in state/context
		console.log(`New rating submitted: ${newRating}`);
	};

	if (!recipe) {
		return <div>Recipe not found</div>;
	}

	// function to navigate to the step-by-step mode (first step)
	const handleStepModeClick = () => {
		navigate(`/recipe/${recipeId}/steps/1`);
	};

	return (
		<div className={styles['steps-container']}>
			<button
				className={styles['step-mode-button']}
				onClick={handleStepModeClick}
			>
				Step-by-step Mode
			</button>
			<ol>
				{/* render the steps list */}
				{recipe.steps.map((step) => (
					<li key={step.number}>
						<p>{step.description}</p>
					</li>
				))}
			</ol>
			<h3 style={{ textAlign: 'center', marginBottom: '8px' }}>
				Rate this recipe:
			</h3>
			<RatingForm onSubmit={handleRatingSubmit} />
		</div>
	);
};

export default Steps;
