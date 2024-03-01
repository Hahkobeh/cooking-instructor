//import Login from './components/login/Login';
import Learn from './pages/learn/Learn';
import { useUser } from './context/user/UseUser';
import Router from './pages/Router';

const App = () => {
	const { user } = useUser();

	return !user ? <Router /> : <Learn />;
};

export default App;
