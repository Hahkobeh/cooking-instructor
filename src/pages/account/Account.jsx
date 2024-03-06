import styles from './account.module.scss';

import Button from '@/components/button/Button';
import { useUser } from '@/context/user/useUser';

const Account = () => {
	const { user, setUser } = useUser();
	user;
	const logout = () => {
		setUser(null);
	};
	return (
		<div className={styles.account}>
			<Button func={logout}>Log out</Button>
		</div>
	);
};

export default Account;
