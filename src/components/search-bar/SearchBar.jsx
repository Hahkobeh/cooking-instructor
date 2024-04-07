import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './search-bar.module.scss';

const SearchBar = ({ search, setSearch, suggestions }) => {
	const [showSuggestions, setShowSuggestions] = useState(false);
	return (
		<div className={styles['searchBarContainer']}>
			<label className={`${styles.searchBar} ${search ? styles.hasValue : ''}`}>
				<span className="material-symbols-outlined">search</span>
				<input
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						setShowSuggestions(true);
					}}
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
			<div>
				{search && showSuggestions && suggestions.length > 0 && (
					<ul className={styles.suggestionsList}>
						{suggestions.map((suggestion, index) => (
							<li
								key={index}
								onClick={() => {
									setSearch(suggestion);
									setShowSuggestions(false);
								}}
							>
								{suggestion}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

SearchBar.propTypes = {
	search: PropTypes.string.isRequired,
	setSearch: PropTypes.func.isRequired,
	suggestions: PropTypes.func,
};

export default SearchBar;
