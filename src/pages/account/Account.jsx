import Button from '@/components/button/Button';
import { useUser } from '@/context/user/useUser';
import { useNavigate } from 'react-router-dom';
import styles from './account.module.scss';

const Account = () => {
	const { user, setUser } = useUser();
	const navigate = useNavigate();
	user;
	const logout = () => {
		setUser(null);
		navigate('/');
	};
	return (
		<div className={styles.account}>
			<span className={`${styles.picture} material-symbols-outlined`}>
				account_circle
			</span>
			<h4>Add a profile Picture</h4>
			<Button func={logout} className={styles.button}>
				Log out
			</Button>
		</div>
	);
};

export default Account;
