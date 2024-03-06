import PropTypes from 'prop-types';
import styles from './search-bar.module.scss';

const SearchBar = ({ search, setSearch }) => {
	return (
		<label className={`${styles.searchBar} ${search ? styles.hasValue : ''}`}>
			<span className="material-symbols-outlined">search</span>
			<input
				type="text"
				placeholder="Search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{search && (
				<span
					className="material-symbols-outlined"
					onClick={() => setSearch('')}
				>
					close
				</span>
			)}
		</label>
	);
};

SearchBar.propTypes = {
	search: PropTypes.string.isRequired,
	setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
