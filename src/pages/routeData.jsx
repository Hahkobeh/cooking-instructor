import { Navigate } from 'react-router-dom';
import Account from './account/Account';
import Home from './home/Home';
import Learn from './learn/Learn';
import LearnTechnique from './learn/LearnTechnique';
import LearnIngredient from './learn/LearnIngredient';
import Recipe from './recipe/Recipe';
import ShoppingList from './shopping-list/ShoppingList';
import About from './recipe/sub-views/About';
import Ingredients from './recipe/sub-views/Ingredients';
import Steps from './recipe/sub-views/Steps';
import StepDetail from './recipe/sub-views/StepDetail';

export const routerData = [
	{
		path: '/',
		element: <Home />,
		title: 'Home',
		icon: 'home',
	},
	{
		path: '/shopping-list',
		element: <ShoppingList />,
		title: 'Shopping List',
		icon: 'list_alt',
	},
	{
		path: '/learn',
		element: <Learn />,
		title: 'Learn',
		icon: 'school',
	},
	{
		path: '/learn/LearnTechnique/:learnId',
		element: <LearnTechnique />,
		title: 'LearnTechnique',
	},
	{
		path: '/learn/LearnIngredient/:learnId',
		element: <LearnIngredient />,
		title: 'LearnIngredient',
	},
	{
		path: '/account',
		element: <Account />,
		title: 'Account',
		icon: 'account_circle',
	},
	{
		path: '/recipe/:recipeId',
		element: <Recipe />,
		title: 'Recipe',
		children: [
			{
				path: '/recipe/:recipeId/about',
				element: <About />,
			},
			{
				path: '/recipe/:recipeId/steps',
				element: <Steps />,
			},
			{
				path: '/recipe/:recipeId/steps/:stepId',
				element: <StepDetail />,
			},
			{
				path: '/recipe/:recipeId/ingredients',
				element: <Ingredients />,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to={'/'} />,
	},
];
