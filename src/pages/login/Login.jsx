import Button from '@/components/button/Button';
import PhoneStatus from '@/components/phone-status/PhoneStatus';
import TextInput from '@/components/text-input/TextInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './login.module.scss';

const Login = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [username, setUsername] = useState('');
	// const [password, setPassword] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<>
			<PhoneStatus />
			<main className={styles.login}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextInput
						text={username}
						setText={setUsername}
						placeholder="username"
						{...register('username', { required: true })}
					/>
					{errors.username && <span>This field is required</span>}
					<input
						placeholder="password"
						{...register('password', { required: true })}
					/>
					{errors.password && <span>This field is required</span>}
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
