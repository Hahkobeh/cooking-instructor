import PropTypes from 'prop-types';
import styles from './tag-list.module.scss';

const TagList = ({ tags }) => {
	return (
		<div className={styles.tagList}>
			{tags && tags.map((tag) => <Tag tag={tag} key={tag.id} />)}
		</div>
	);
};

TagList.propTypes = {
	tags: PropTypes.array.isRequired,
};

const Tag = ({ tag }) => {
	return (
		<div className={styles.tag}>
			<span className="material-symbols-outlined">{tag.icon}</span>
			<h5>{tag.value}</h5>
		</div>
	);
};

Tag.propTypes = {
	tag: PropTypes.object.isRequired,
};

TagList.Tag = Tag;

export default TagList;
