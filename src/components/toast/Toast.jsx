import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './toast.module.scss';

const Toast = ({ message, isVisible, onClose, duration = 3000 }) => {
	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				onClose();
			}, duration);
			return () => clearTimeout(timer);
		}
	}, [isVisible, duration, onClose]);

	if (!isVisible) return null;

	return <div className={styles.toast}>{message}</div>;
};

Toast.propTypes = {
	message: PropTypes.string.isRequired,
	isVisible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	duration: PropTypes.number,
};
export default Toast;
