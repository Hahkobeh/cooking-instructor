import PropTypes from 'prop-types';
import DataContextProvider from './data/dataContextProvider';
import UserContextProvider from './user/UserContextProvider';

const ContextProvider = ({ children }) => {
	return (
		<UserContextProvider>
			<DataContextProvider>{children}</DataContextProvider>
		</UserContextProvider>
	);
};

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextProvider;
