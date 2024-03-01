import styles from './home.module.scss';

const Home = () => {
	return (
		<div id={styles.home}>
			<h1>
				Welcome, <span className="accent">Jacob</span>
			</h1>
			<h2>hello there</h2>
			<h3>mr kenobi</h3>
			<h4>a story by jacob artuso</h4>
			<p>
				Once upon a time there was a man named jacob artuso who wrote some css
			</p>

			<p>
				regular text <span className="accent">accented text</span>
			</p>
			<br />
			<h2>Sample Card List</h2>
			<div className={styles.card}>
				<h3>example card</h3>
				<h4>this is a card</h4>
				<p>wow you are reading about this card, thats great!</p>
			</div>
			<div className={styles.card}>
				<h3>example card</h3>
				<h4>this is a card</h4>
				<p>wow you are reading about this card, thats great!</p>
			</div>
			<div className={styles.card}>
				<h3>example card</h3>
				<h4>this is a card</h4>
				<p>wow you are reading about this card, thats great!</p>
			</div>
			<div className={styles.card}>
				<h3>example card</h3>
				<h4>this is a card</h4>
				<p>wow you are reading about this card, thats great!</p>
			</div>
			<div className={styles.card}>
				<h3>example card</h3>
				<h4>this is a card</h4>
				<p>wow you are reading about this card, thats great!</p>
			</div>
		</div>
	);
};

export default Home;
