import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({
	children,
	func,
	accent,
	submit,
	className,
	icon,
	disabled,
	...rest
}) => {
	return (
		<div
			className={`${styles.button} ${accent ? styles.accent : styles.grey} ${className} ${disabled ? styles.disabled : ''}`}
			onClick={func && (() => func())}
		>
			{icon}
			<input type={submit ? 'submit' : 'button'} value={children} {...rest} />
		</div>
	);
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	func: PropTypes.func,
	accent: PropTypes.bool,
	submit: PropTypes.bool,
	className: PropTypes.string,
	icon: PropTypes.element,
	disabled: PropTypes.bool
};

export default Button;
