import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRecipes } from '@/context/data/useRecipes';
import styles from './stepdetail.module.scss';

const StepDetail = () => {
	const navigate = useNavigate(); // get the navigate function from the router
	const { recipeId, stepId } = useParams(); // get the recipeId and stepId from the URL
	const recipes = useRecipes(); // get recipes from the context
	const recipe = recipes.find((r) => r.id.toString() === recipeId);
	const currentStep = parseInt(stepId, 10); // convert stepId to a number
	const step = recipe?.steps[currentStep - 1]; // get the step from the recipe (0-Based index)

	// if the recipe or step is not found, return a message
	if (!recipe || !step) {
		return <div>Step not found</div>;
	}

	// function to navigate back to the steps list
	const handleBackToSteps = () => {
		navigate(`/recipe/${recipeId}/steps`);
	};

	return (
		<div className={styles.stepDetail}>
			<div className={styles.imageNavigationWrapper}>
				{/* render the previous button only if the current step is greater than 1 */}
				{currentStep > 1 && (
					<Link
						to={`/recipe/${recipeId}/steps/${currentStep - 1}`}
						className={`${styles.navButton} ${styles.prevButton}`}
					>
						<span className="material-symbols-outlined">arrow_back_ios</span>
					</Link>
				)}
				{/* render the step image or a default image if the step does not have an image */}
				<img
					src={step.image || '/step.jpg'}
					alt={`Step ${currentStep}`}
					className={styles.stepImage}
				/>
				{/* render the next button only if the current step is less than the total steps */}
				{currentStep < recipe.steps.length && (
					<Link
						to={`/recipe/${recipeId}/steps/${currentStep + 1}`}
						className={`${styles.navButton} ${styles.nextButton}`}
					>
						<span className="material-symbols-outlined">arrow_forward_ios</span>
					</Link>
				)}
			</div>
			<div className={styles.stepHeader}>
				<h2>Step {currentStep}</h2>
				<p>{step.description}</p>
			</div>
			{/* render the back button */}
			<button className={styles.backButton} onClick={handleBackToSteps}>
				Back to Steps
			</button>
		</div>
	);
};

export default StepDetail;
