import styles from './learnsub.module.scss';
import Dialog from '@/components/dialog/Dialog';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useIngredientsLearn } from '@/context/data/useIngredientsLearn';
const LearnIngredient = () => {
	const [videoOn, setVideoOn] = useState(false);
	const routeParams = useParams();
	const ingredients = useIngredientsLearn();
	const ingredient = ingredients.find((i) => i.id.toString() === routeParams.learnId);

	if (!ingredient) {
		console.log(ingredients);
		console.log(routeParams.learnId);
		return <div>Ingredient not found. Looked for {routeParams.learnId} id</div>;
	}

	return (
		<>
		{videoOn && (
			<Dialog close={() => setVideoOn(false)} title="Tutorial">
				<img src="/video-player.png" style={{ width: '300px' }} />
			</Dialog>
		)}
		<div>
			<div className={styles.header}>
				<h1>{ingredient.title}</h1>
				<img className={styles.thumb} src={ingredient.image}></img>
			</div>
			<div className={styles.card}>
				<div>
					<h2>Taste</h2>
					<div className={styles.subGroup}>
					{ingredient.taste.map((item, index) => (
						<div key={index}>
							<p>{item.title}</p>
							<progress className={styles.bar} value={item.value} />
						</div>
						))}
					</div>
					<br />
				</div>
				<div>
					<h2>Texture</h2>
					<div className={styles.subGroup}>
						{ingredient.texture.map((item, index) => (
						<div key={index}>
							<p>{item.title}</p>
							<progress className={styles.bar} value={item.value} />
						</div>
						))}
					</div>
					<br />
				</div>
				<div>
					<h2>Usage</h2>
					<p>
						{ingredient.usage}
					</p>
					<br />
				</div>
				<div>
					<h2>Alternatives</h2>
					<div className={styles.subGroup}>
					{ingredient.alts.map((item, index) => (
						<div key={index} className={styles.alt}>
						<img className={styles.thumb} src={item.image}></img>
						<h3>{item.name}</h3>
						<p>{item.shortDescription}</p>
					</div>
						))}
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default LearnIngredient;
