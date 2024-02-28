import PropTypes from 'prop-types';
import UserContextProvider from './user/UserContextProvider';

const ContextProvider = ({ children }) => {
	return <UserContextProvider>{children}</UserContextProvider>;
};

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextProvider;
