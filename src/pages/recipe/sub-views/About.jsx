import { useRecipes } from '@/context/data/useRecipes';
import { useParams } from 'react-router-dom';
import styles from './about.module.scss';

const About = () => {
	const { recipeId } = useParams();
	const recipes = useRecipes(); // get recipes from the context
	const recipe = recipes.find((r) => r.id.toString() === recipeId); // find the recipe with the given id

	if (!recipe) {
		return <div>Recipe not found</div>;
	}

	return (
		<div className={styles.about}>
			<h4>
				{recipe.difficulty} - {recipe.time}
			</h4>
			<p>{recipe.about}</p>
			<h3>Equipment</h3>
			<ul>
				{/* render the equipment list */}
				{recipe.equipment.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<h3>Skills</h3>
			<ul>
				{/* render the skills list */}
				{recipe.skills.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
		</div>
	);
};

export default About;
