import Login from './components/login/Login';
import { useUser } from './context/user/useUser';
import Router from './pages/Router';

const App = () => {
	document.title = 'Cooking Instructor';

	const { user } = useUser();

	return !user ? <Router /> : <Login />;
};

export default App;
