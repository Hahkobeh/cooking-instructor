import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ children, func, accent, submit, className, ...rest }) => {
	return (
		<input
			className={`${styles.button} ${accent ? styles.pink : styles.grey} ${className}`}
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
	className: PropTypes.string,
};

export default Button;
