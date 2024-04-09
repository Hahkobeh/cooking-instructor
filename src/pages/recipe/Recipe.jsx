import RatingStars from '@/components/rating-stars/RatingStars';
import RecipeNavBar from '@/components/recipe-nav-bar/RecipeNavBar';
import Toast from '@/components/toast/Toast';
import { useRecipes } from '@/context/data/useRecipes';
import { useUser } from '@/context/user/useUser';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './recipe.module.scss';
//import Button from '@/components/button/Button';

const Recipe = () => {
	const { recipeId } = useParams();
	const recipes = useRecipes();
	const recipe = recipes.find((r) => r.id.toString() === recipeId);
	const navigate = useNavigate();
	const location = useLocation();
	const [activeTab, setActiveTab] = useState('about'); // initial active tab is 'about'
	const [favorited, setFavorited] = useState(false); // initial state set to empty heart icon
	const [toast, setToast] = useState({ isVisible: false, message: '' });
	const { user, addFavorite, removeFavorite, addRecent } = useUser();

	useEffect(() => {
		addRecent(Number(recipeId));
		console.log(user.recents);
		// redirect to /about if the current path is exactly `/recipe/:recipeId`
		if (location.pathname === `/recipe/${recipeId}`) {
			navigate(`/recipe/${recipeId}/about`, { replace: true });
		}
		// fetch favorite status and set the state
		const isFavorited = user.favorites.includes(Number(recipeId));
		setFavorited(isFavorited);
	}, [recipeId, navigate, location.pathname, user.favorites]);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const handleFavoriteClick = () => {
		if (favorited) {
			removeFavorite(Number(recipeId));
			setToast({ isVisible: true, message: 'Removed from favorites!' });
		} else {
			addFavorite(Number(recipeId));
			setToast({ isVisible: true, message: 'Added to favorites!' });
		}
		setFavorited(!favorited);
	};

	return (
		<div id={styles.recipe}>
			<Toast
				message={toast.message}
				isVisible={toast.isVisible}
				onClose={() => setToast({ ...toast, isVisible: false })}
			/>
			<RecipeNavBar
				className={styles.recipeNavBar}
				recipeId={recipeId}
				activeTab={activeTab}
				onTabClick={handleTabClick} // pass the handleTabClick function to the RecipeNavBar component
			/>
			<div className={styles.header}>
				<h2>
					{recipe.title}
					<RatingStars
						average={recipe.ratings.average}
						total={recipe.ratings.total}
					/>
				</h2>
				<button
					type="button"
					style={{
						backgroundColor: 'white',
						border: 'none',
						color: '#a56ff7',
						fontVariationSettings: favorited ? "'FILL' 1" : "'FILL' 0",
					}}
				>
					<span
						className="material-symbols-outlined"
						onClick={handleFavoriteClick}
					>
						favorite
					</span>
				</button>
			</div>
			<Outlet />
		</div>
	);
};

export default Recipe;
