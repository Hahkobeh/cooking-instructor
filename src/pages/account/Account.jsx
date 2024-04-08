import Button from '@/components/button/Button';
import Dialog from '@/components/dialog/Dialog';
import DietaryMenu from '@/components/dietary-menu/DietaryMenu';
import RatingStars from '@/components/rating-stars/RatingStars';
import RecipeCardList from '@/components/recipe-card-list/RecipeCardList';
import TagList from '@/components/tag-list/TagList';
// import { useRecipes } from '@/context/data/useRecipes';
import { useUser } from '@/context/user/useUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './account.module.scss';

const Account = () => {
	const [videoOn, setVideoOn] = useState(false);
	const [subPage, setSubPage] = useState(null);
	const { setUser, getFavorites } = useUser();
	// const recipes = useRecipes();
	const favoriteRecipes = getFavorites();
	const numFavorites = favoriteRecipes.length;
	const navigate = useNavigate();
	const logout = () => {
		setUser(null);
		navigate('/');
	};

	const page = () => {
		switch (subPage) {
			case 'recents':
				return (
					<>
						<div className={styles.header}>
							<h2>
								Recents <span className="italic">({numFavorites})</span>
								{/* TODO HARDCODED NUMBER ... */}
							</h2>
							<Button
								className={styles.navigate}
								func={() => setSubPage(null)}
								icon={
									<span className="material-symbols-outlined">arrow_back</span>
								}
							>
								Return
							</Button>
						</div>
						<RecipeCardList>
							{favoriteRecipes.map((recipe) => (
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
					</>
				);
			case 'favorites':
				return (
					<>
						<div className={styles.header}>
							<h2>
								Favorites <span className="italic">({numFavorites})</span>
							</h2>
							<Button
								className={styles.navigate}
								func={() => setSubPage(null)}
								icon={
									<span className="material-symbols-outlined">arrow_back</span>
								}
							>
								Return
							</Button>
						</div>
						<RecipeCardList>
							{favoriteRecipes.map((recipe) => (
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
					</>
				);
			default:
				return (
					<>
						<span className={`${styles.picture} material-symbols-outlined`}>
							account_circle
						</span>
						<h4 className={styles.pictureSubtitle}>Add a profile Picture</h4>
						<br />
						<div className={styles.subTitle}>
							<h3>
								Favorites <span className="italic">({numFavorites})</span>
							</h3>
							<Button
								className={styles.navigate}
								func={() => setSubPage('favorites')}
							>
								View all
							</Button>
						</div>
						{/* use SHIFT + SCROLL WHEEL to scroll */}
						<RecipeCardList horizontal>
							{favoriteRecipes.map((recipe) => (
								<RecipeCardList.Card key={recipe.id} recipeId={recipe.id}>
									<p>{recipe.title}</p>
									<h5>{recipe.shortDescription}</h5>
								</RecipeCardList.Card>
							))}
						</RecipeCardList>
						<br />

						<div className={styles.subTitle}>
							<h3>
								Recents <span className="italic">({numFavorites})</span>
							</h3>
							<Button
								className={styles.navigate}
								func={() => setSubPage('recents')}
							>
								View all
							</Button>
						</div>
						<RecipeCardList horizontal>
							{favoriteRecipes.map((recipe) => (
								<RecipeCardList.Card key={recipe.id} recipeId={recipe.id}>
									<p>{recipe.title}</p>
									<h5>{recipe.shortDescription}</h5>
								</RecipeCardList.Card>
							))}
						</RecipeCardList>
						<br />
						<div className={styles.subTitle}>
							<h3>Manage dietary needs</h3>
						</div>
						<DietaryMenu />
						<div className={styles.buttons}>
							<Button className={styles.button} func={() => setVideoOn(true)}>
								Tutorial mode
							</Button>
							<Button func={logout} className={styles.button}>
								Log out
							</Button>
						</div>
					</>
				);
		}
	};

	return (
		<>
			{videoOn && (
				<Dialog close={() => setVideoOn(false)} title="Tutorial">
					<p src="video-player.png" style={{ width: '300px' }}>This feature is in development</p>
				</Dialog>
			)}
			<div className={styles.account}>{page()}</div>
		</>
	);
};

export default Account;
