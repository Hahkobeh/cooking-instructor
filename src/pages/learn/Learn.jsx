import { Link } from 'react-router-dom';
import styles from './learn.module.scss';
//import Home from './home/Home';
//import Card from "@/components/card/Card";
//import NavBar from "@/components/nav-bar/NavBar";

//TODO: Make design for technique/ingredients screen
//TODO: Find good way to add icon image in cards, even when text is long

const Learn = () => {
	return (
		<div>
			<h1>Learn more</h1>
			<div style={{ marginTop: '16px' }}>
				<h2>Techniques</h2>
			</div>
			<ul>
				<li>
					<Link to={'/learn/LearnTechnique'} style={{ textDecoration: 'none' }}>
						<div className={styles.card}>
							<h3>Sous Vide</h3>
							<h4>Cook food to perfection - using water</h4>
						</div>
					</Link>
					<Link to={'/learn/LearnTechnique'} style={{ textDecoration: 'none' }}>
						<div className={styles.card}>
							<h3>Cutting</h3>
							<h4>Chop chop, but not your fingers...</h4>
						</div>
					</Link>
					<Link to={'/learn/LearnTechnique'} style={{ textDecoration: 'none' }}>
						<div className={styles.card}>
							<h3>Sous Vide</h3>
							<h4>Cook food to perfection - using water</h4>
						</div>
					</Link>
					<Link to={'/learn/LearnTechnique'} style={{ textDecoration: 'none' }}>
						<div className={styles.card}>
							<h3>Cutting</h3>
							<h4>Chop chop, but not your fingers...</h4>
						</div>
					</Link>
				</li>
			</ul>
			<div
				style={{ marginTop: '30px', borderWidth: '50px', borderColor: 'red' }}
			>
				<div style={{ marginTop: '16px' }}>
					<h2>Ingredients</h2>
				</div>
				<ul>
					<li>
						<Link
							to={'/learn/LearnIngredient'}
							style={{ textDecoration: 'none' }}
						>
							<div className={styles.card}>
								<h3>Onions</h3>
								<h4>Chefs May Cry</h4>
							</div>
						</Link>
						<Link
							to={'/learn/LearnIngredient'}
							style={{ textDecoration: 'none' }}
						>
							<div className={styles.card}>
								<h3>Tomatoes</h3>
								<h4>Master the fruitgetable</h4>
							</div>
						</Link>
						<Link
							to={'/learn/LearnIngredient'}
							style={{ textDecoration: 'none' }}
						>
							<div className={styles.card}>
								<h3>Onions</h3>
								<h4>Chefs May Cry</h4>
							</div>
						</Link>
						<Link
							to={'/learn/LearnIngredient'}
							style={{ textDecoration: 'none' }}
						>
							<div className={styles.card}>
								<h3>Tomatoes</h3>
								<h4>Master the fruitgetable</h4>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Learn;
