import PropTypes from 'prop-types';
import styles from './text-input.module.scss';

const TextInput = ({text, setText, ...rest}) => {
	console.log(text)
	return (
		<input
			className={`${styles.textInput} ${text ? styles.text : ''}`}
			type="text"
			value={text}
			onChange={(e) => setText(e.target.value)}
			{...rest}
		/>
	);
};

TextInput.propTypes = {
	text: PropTypes.string.isRequired,
	setText: PropTypes.func,
	accent: PropTypes.bool,
	submit: PropTypes.bool,
};

export default TextInput;
