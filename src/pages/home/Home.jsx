import CategoriesDisplay from '@/components/categories-display/CategoriesDisplay';
import RatingStars from '@/components/rating-stars/RatingStars';
import RecipeCardList from '@/components/recipe-card-list/RecipeCardList';
import SearchBar from '@/components/search-bar/SearchBar';
import TagList from '@/components/tag-list/TagList';
import { useRecipes } from '@/context/data/useRecipes';
import { useTags } from '@/context/data/useTags';
import { useUser } from '@/context/user/useUser';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './home.module.scss';

const Home = () => {
	const [search, setSearch] = useState('');
	const recipes = useRecipes();
	const { user, getActiveRecipe } = useUser();
	const tags = useTags();
	const activeRecipeId = getActiveRecipe().id;
	const navigate = useNavigate();

	useEffect(() => {
		if (activeRecipeId) {
			navigate(`/recipe/${activeRecipeId}`, { replace: true });
		}
	}, [activeRecipeId, navigate]);

	const suggestedRecipes = recipes.filter((recipe) =>
		user.dietaryRestrictions.some((restriction) =>
			recipe.dietaryRestrictions.includes(restriction)
		)
	);

	const recipesToDisplay = () => {
		if (search) {
			return filteredRecipes;
		} else if (user.dietaryRestrictions.length > 0) {
			return suggestedRecipes;
		} else {
			return recipes;
		}
	};

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

	return (
		<div id={styles.home}>
			{!activeRecipeId && (
				<>
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
					{search === '' && user.dietaryRestrictions.length > 0 && (
						<h2>Recommended for You</h2>
					)}
					<RecipeCardList>
						{recipesToDisplay().map((recipe) => (
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
				{recipesToDisplay().length < 1 && (
					<h4 className={styles['empty']}>No matching results.</h4>
				)}
				</>
			)}
		</div>
	);
};

export default Home;
