import CategoriesDisplay from '@/components/categories-display/CategoriesDisplay';
import RatingStars from '@/components/rating-stars/RatingStars';
import RecipeCardList from '@/components/recipe-card-list/RecipeCardList';
import SearchBar from '@/components/search-bar/SearchBar';
import TagList from '@/components/tag-list/TagList';
import { useRecipes } from '@/context/data/useRecipes';
import { useTags } from '@/context/data/useTags';
import { useUser } from '@/context/user/useUser';
import { useState } from 'react';
import styles from './home.module.scss';

const Home = () => {
	const [search, setSearch] = useState('');
	const recipes = useRecipes();
	const { user } = useUser();
	const tags = useTags();

	const doesSearchMatchTag = (searchText, tags, recipe) => {
		// convert search text to lowercase for case-insensitive comparison
		const searchLower = searchText.toLowerCase();

		// find tags that match the search text
		const matchingTagIds = tags
			.filter((tag) => tag.value.toLowerCase().includes(searchLower))
			.map((tag) => tag.id);

		// check if the recipe has any of the matching tags
		return recipe.tagIds.some((tagId) => matchingTagIds.includes(tagId));
	};

	const filteredRecipes = recipes.filter(
		(recipe) =>
			recipe.title.toLowerCase().includes(search.toLowerCase()) ||
			recipe.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
			recipe.about.toLowerCase().includes(search.toLowerCase()) ||
			doesSearchMatchTag(search, tags, recipe)
	);

	const recipeSuggestions = filteredRecipes
		.slice(0, 3)
		.map((recipe) => recipe.title);

	const tagSuggestions = tags
		.filter((tag) => tag.value.toLowerCase().includes(search.toLowerCase()))
		.map((tag) => tag.value)
		.slice(0, 2);

	const handleCategorySelect = (categoryName) => {
		setSearch(categoryName); // Set the search state to the category name
	};

	console.log('Filtered Recipes', filteredRecipes);

	return (
		<div id={styles.home}>
			<h1 className={styles.title}>
				Welcome, <span className="accent">{user.username}</span>
			</h1>
			<h3>Let&apos;s find you something to cook!</h3>
			<SearchBar
				search={search}
				setSearch={setSearch}
				suggestions={[...recipeSuggestions, ...tagSuggestions]}
			/>
			<CategoriesDisplay onCategorySelect={handleCategorySelect} />
			<RecipeCardList>
				{filteredRecipes.map((recipe) => (
					<RecipeCardList.Card
						key={recipe.id}
						recipeId={recipe.id}
						image={recipe.image}
					>
						<h3>{recipe.title}</h3>
						<h4>{recipe.shortDescription}</h4>
						<RatingStars
							average={recipe.ratings.average}
							total={recipe.ratings.total}
						/>
						<TagList tags={recipe.tags} />
					</RecipeCardList.Card>
				))}
			</RecipeCardList>
		</div>
	);
};

export default Home;
