import Button from '@/components/button/Button';
import DietaryMenu from '@/components/dietary-menu/DietaryMenu';
import PhoneStatus from '@/components/phone-status/PhoneStatus';
import { useUsers } from '@/context/data/useUsers';
import { useUser } from '@/context/user/useUser';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './login.module.scss';

const Login = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const users = useUsers();
	const { setUser } = useUser();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = ({ username, password }) => {
		if (isLogin) {
			const foundUser = users.find(
				(user) => user.username.toLowerCase() === username.toLowerCase()
			);
			if (foundUser.password === password) {
				setUser(foundUser);
			}
		} else {
			console.log('not implemented');
		}
	};

	return (
		<>
			<PhoneStatus />
			<main className={styles.login}>
				<h3>Welcome to</h3>
				<h1>
					<span className="accent">Pocket Chef!</span>
				</h1>
				<br />
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className={'textInput' + (username ? ' hasValue' : '')}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="username"
						{...register('username', { required: true })}
					/>
					<span className="error">
						{errors.username ? 'This field is required' : '‎'}
					</span>
					<input
						className={'textInput' + (password ? ' hasValue' : '')}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="password"
						{...register('password', { required: true })}
					/>
					<span className="error">
						{errors.password ? 'This field is required' : '‎'}
					</span>
					{!isLogin && <DietaryMenu />}
					<div>
						<Button func={() => setIsLogin(!isLogin)}>
							{isLogin ? 'Sign Up' : 'Login'}
						</Button>
						<Button accent submit>
							{isLogin ? 'Login' : 'Register'}
						</Button>
					</div>
				</form>
			</main>
		</>
	);
};

export default Login;
