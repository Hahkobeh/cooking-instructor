import RecipeCardList from '@/components/recipe-card-list/RecipeCardList';
import TagList from '@/components/tag-list/TagList';
import { useRecipes } from '@/context/data/useRecipes';
import styles from './home.module.scss';

const Home = () => {
	const recipes = useRecipes();

	return (
		<div id={styles.home}>
			<h1 className={styles.title}>
				Welcome, <span className="accent">Jacob</span>
			</h1>
			<h3>Let&apos;s find you something to cook!</h3>
			<br />
			<h2>Search bar here</h2>
			<RecipeCardList>
				{recipes.map((recipe) => (
					<RecipeCardList.Card
						key={recipe.id}
						recipeId={recipe.id}
						image={recipe.image}
					>
						<h3>{recipe.title}</h3>
						<h4>{recipe.shortDescription}</h4>
						<TagList tags={recipe.tags} />
					</RecipeCardList.Card>
				))}
				{recipes.map((recipe) => (
					<RecipeCardList.Card
						key={recipe.id}
						recipeId={recipe.id}
						image={recipe.image}
					>
						<h3>{recipe.title}</h3>
						<h4>{recipe.shortDescription}</h4>
						<TagList tags={recipe.tags} />
					</RecipeCardList.Card>
				))}
				{recipes.map((recipe) => (
					<RecipeCardList.Card
						key={recipe.id}
						recipeId={recipe.id}
						image={recipe.image}
					>
						<h3>{recipe.title}</h3>
						<h4>{recipe.shortDescription}</h4>
						<TagList tags={recipe.tags} />
					</RecipeCardList.Card>
				))}
			</RecipeCardList>
		</div>
	);
};

export default Home;
