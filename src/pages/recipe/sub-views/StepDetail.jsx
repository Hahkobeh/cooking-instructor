import Button from '@/components/button/Button';
import { useRecipes } from '@/context/data/useRecipes';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
			<div className={styles['button-wrapper']}>
				<Button accent func={handleBackToSteps}>
					See All Steps
				</Button>
			</div>
			<img
				src={step.image || '/step.jpg'}
				alt={`Step ${currentStep}`}
				className={styles.stepImage}
			/>
			<div className={styles.stepHeader}>
				<h2>Step {currentStep}</h2>
				<p>{step.description}</p>
			</div>
			<div className={styles.stepNav}>
				<Link
					to={`/recipe/${recipeId}/steps/${currentStep - 1}`}
					className={
						styles.navButton + ' ' + (currentStep > 1 ? '' : styles.disabled)
					}
				>
					<span className="material-symbols-outlined">arrow_back</span>
				</Link>
				<Link
					to={`/recipe/${recipeId}/steps/${currentStep + 1}`}
					className={
						styles.navButton +
						' ' +
						(currentStep < recipe.steps.length ? '' : styles.disabled)
					}
				>
					<span className="material-symbols-outlined">arrow_forward</span>
				</Link>
			</div>
		</div>
	);
};

export default StepDetail;
