import PropTypes from 'prop-types';
import styles from './confirmation-modal.module.scss'; // Create and import your CSS for the modal

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<p>{message}</p>
				<div className={styles.buttonsWrapper}>
					<button
						className={`${styles.actionButton} ${styles.accent}`}
						onClick={onConfirm}
					>
						Yes
					</button>
					<button className={styles.actionButton} onClick={onClose}>
						No
					</button>
				</div>
			</div>
		</div>
	);
};

ConfirmationModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
	message: PropTypes.string,
};

export default ConfirmationModal;
