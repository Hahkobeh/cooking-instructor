import Button from '@/components/button/Button';
import Dialog from '@/components/dialog/Dialog';
import DietaryMenu from '@/components/dietary-menu/DietaryMenu';
import RecipeCardList from '@/components/recipe-card-list/RecipeCardList';
import { useRecipes } from '@/context/data/useRecipes';
import { useUser } from '@/context/user/useUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './account.module.scss';

const Account = () => {
	const [videoOn, setVideoOn] = useState(false);
	const { user, setUser } = useUser();
	const recipes = useRecipes();
	const navigate = useNavigate();
	user;
	const logout = () => {
		setUser(null);
		navigate('/');
	};
	return (
		<>
			{videoOn && (
				<Dialog close={() => setVideoOn(false)} title='Tutorial'>
					<img src="video-player.png" style={{width: '300px'}}/>
				</Dialog>
			)}
			<div className={styles.account}>
				<span className={`${styles.picture} material-symbols-outlined`}>
					account_circle
				</span>
				<h4 className={styles.pictureSubtitle}>Add a profile Picture</h4>
				<br />
				<h3>
					Recent <span className="italic">(3)</span>
				</h3>
				{/* use SHIFT + SCROLL WHEEL to scroll */}
				<RecipeCardList horizontal>
					{recipes.map((recipe) => (
						<RecipeCardList.Card key={recipe.id} recipeId={recipe.id}>
							<p>{recipe.title}</p>
							<h5>{recipe.shortDescription}</h5>
						</RecipeCardList.Card>
					))}
				</RecipeCardList>
				<br />
				<h3>
					Favorites <span className="italic">(5)</span>
				</h3>
				<RecipeCardList horizontal>
					{recipes.map((recipe) => (
						<RecipeCardList.Card key={recipe.id} recipeId={recipe.id}>
							<p>{recipe.title}</p>
							<h5>{recipe.shortDescription}</h5>
						</RecipeCardList.Card>
					))}
				</RecipeCardList>
				<br />
				<h3>Manage dietary needs</h3>
				<DietaryMenu />
				<div className={styles.buttons}>
					<Button className={styles.button} func={() => setVideoOn(true)}>
						Watch Tutorial
					</Button>
					<Button func={logout} className={styles.button}>
						Log out
					</Button>
				</div>
			</div>
		</>
	);
};

export default Account;
