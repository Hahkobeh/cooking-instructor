import RecipeCardList from '@/components/recipe-card-list/RecipeCardList';
import SearchBar from '@/components/search-bar/SearchBar';
import TagList from '@/components/tag-list/TagList';
import CategoriesDisplay from '@/components/categories-display/CategoriesDisplay';
import { useRecipes } from '@/context/data/useRecipes';
import { useUser } from '@/context/user/useUser';
import { useState } from 'react';
import styles from './home.module.scss';

const Home = () => {
	const [search, setSearch] = useState('');
	const recipes = useRecipes();
	const { user } = useUser();

	return (
		<div id={styles.home}>
			<h1 className={styles.title}>
				Welcome, <span className="accent">{user.username}</span>
			</h1>
			<h3>Let&apos;s find you something to cook!</h3>
			<SearchBar search={search} setSearch={setSearch} />
			<CategoriesDisplay />
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
			</RecipeCardList>
		</div>
	);
};

export default Home;
