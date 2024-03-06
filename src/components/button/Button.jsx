import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ children, func, accent, submit, ...rest }) => {
	return (
		<input
			className={`${styles.button} ${accent ? styles.pink : styles.grey}`}
			onClick={func && (() => func())}
			type={submit ? 'submit' : 'button'}
			value={children}
			{...rest}
		/>
	);
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	func: PropTypes.func,
	accent: PropTypes.bool,
	submit: PropTypes.bool,
};

export default Button;
