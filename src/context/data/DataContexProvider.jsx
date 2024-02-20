import staticData from '@/staticData';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
	const [data] = useState(staticData);

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

DataContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DataContextProvider;
