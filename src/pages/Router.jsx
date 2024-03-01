import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouteWrapper from './RouteWrapper';
import { routerData } from './routeData';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RouteWrapper />,
		children: routerData,
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
