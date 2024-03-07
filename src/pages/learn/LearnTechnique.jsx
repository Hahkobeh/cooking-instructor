import styles from './learnsub.module.scss';

const LearnTechnique = () => {
	return (
		<div className={styles.divL}>
			<div className={styles.header}>
				<div>
					<h1>Cutting</h1>
					<h4>Easy</h4>
				</div>
				<img className={styles.thumb} src="/cutting.jpg"></img>
			</div>
			<div className={styles.card}>
				<div>
					<h2>Tools</h2>
					<ul className={styles.unlist}>
						<li className={styles.unlistel}>
							<p>Knife</p>
						</li>
						<li className={styles.unlistel}>
							<p>Cutting board</p>
						</li>
						<li className={styles.unlistel}>
							<p>Ingredient of your choice!</p>
						</li>
					</ul>
				</div>
				<br />
				<div>
					<h2>Steps</h2>
					<ol className={styles.list}>
						<li className={styles.listel}>
							<p>Use a claw grip to hold on to the item you want to cut</p>
						</li>
						<li className={styles.listel}>
							<p>
								With your dominant hand, keep the knife next to your knuckles
							</p>
						</li>
						<li className={styles.listel}>
							<p>Move the knife down, lift up when finished making your cut</p>
						</li>
						<li className={styles.listel}>
							<p>Move the knife to the next part you want to cut</p>
						</li>
						<li className={styles.listel}>
							<p>Repeat steps 1-4 until new desired shape is achieved</p>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default LearnTechnique;
