import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useRecipes } from '@/context/data/useRecipes';
import RecipeNavBar from '@/components/recipe-nav-bar/RecipeNavBar';
import styles from './recipe.module.scss';
//import Button from '@/components/button/Button';

const Recipe = () => {
	const { recipeId } = useParams();
	const recipes = useRecipes();
	const recipe = recipes.find((r) => r.id.toString() === recipeId);
	const navigate = useNavigate();
	const location = useLocation();
	const [activeTab, setActiveTab] = useState('about'); // initial active tab is 'about'
	const [favorited, setFavorited] = useState('false'); //Initial state set to empty heart icon

	useEffect(() => {
		// redirect to /about if the current path is exactly `/recipe/:recipeId`
		if (location.pathname === `/recipe/${recipeId}`) {
			navigate(`/recipe/${recipeId}/about`, { replace: true });
		}
	}, [recipeId, navigate, location.pathname]);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const handleFavoriteClick = () => {
		setFavorited(!favorited);
	}

	return (
		<div id={styles.recipe}>
			<div style={{display:'flex'}}>
				<h1 className={styles.title}>
					<span className="accent">{recipe.title}</span>
				</h1>
				<button
					type = 'button' 
					style={{backgroundColor:'white', borderWidth:'0px', height:'40px', color:"#a56ff7", fontVariationSettings: favorited ? "'FILL' 1" : "'FILL' 0"}}>
					<span className="material-symbols-outlined" onClick={handleFavoriteClick}>favorite</span>
				</button>
			</div>
			<RecipeNavBar
				className={styles.recipeNavBar}
				recipeId={recipeId}
				activeTab={activeTab}
				onTabClick={handleTabClick} // pass the handleTabClick function to the RecipeNavBar component
			/>
			<Outlet />
		</div>
	);
};

export default Recipe;
