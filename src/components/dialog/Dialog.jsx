import PropTypes from 'prop-types';
import styles from './dialog.module.scss';

const Dialog = ({ children, close, title }) => {
	return (
		<>
			<div className={styles.wrapper}></div>
			<div className={styles.box} onClick={() => close()}>
				<div className={styles.header}>
					<h3>{title}</h3>
					<span className={`${styles.close} material-symbols-outlined`}>
						close
					</span>
				</div>
				{children}
			</div>
		</>
	);
};

Dialog.propTypes = {
	children: PropTypes.string.isRequired,
	close: PropTypes.bool,
	title: PropTypes.string,
};

export default Dialog;
