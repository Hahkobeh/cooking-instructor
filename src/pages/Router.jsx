import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Account from './account/Account';
import Home from './home/Home';
import Learn from './learn/Learn';
import Recipe from './recipe/Recipe';
import ShoppingList from './shopping-list/ShoppingList';
// import routerData from './routerData';

const routerData = [
	{
		path: '/',
		element: <Home />,
		title: 'Home',
	},
	{
		path: '/account',
		element: <Account />,
		title: 'Account',
	},
	{
		path: '/learn',
		element: <Learn />,
		title: 'Learn',
	},
	{
		path: '/shopping-list',
		element: <ShoppingList />,
		title: 'Shopping List',
	},
	{
		path: '/recipe/:recipeId',
		element: <Recipe />,
		title: 'Recipe',
		children: [
			{
				path: '/recipe/:recipeId/steps',
				element: null,
			},
			{
				path: '/recipe/:recipeId/ingredients',
				element: null,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to={'/'} />,
	},
];

const router = createBrowserRouter(routerData);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
