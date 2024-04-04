import styles from './learnsub.module.scss';
import Dialog from '@/components/dialog/Dialog';
import { useState } from 'react';

const LearnIngredient = () => {
	const [videoOn, setVideoOn] = useState(false);

	return (
		<>
		{videoOn && (
			<Dialog close={() => setVideoOn(false)} title="Tutorial">
				<img src="/video-player.png" style={{ width: '300px' }} />
			</Dialog>
		)}
		<div>
			<div className={styles.header}>
				<h1>Onions</h1>
				<img className={styles.thumb} src="/onion.jpg"></img>
			</div>
			<div className={styles.card}>
				<div>
					<h2>Taste</h2>
					<div className={styles.subGroup}>
						<div>
							<p>Sweet</p>
							<progress className={styles.bar} value={0.5} />
						</div>
						<div>
							<p>Sour</p>
							<progress className={styles.bar} value={0.3} />
						</div>
					</div>
					<br />
				</div>
				<div>
					<h2>Texture</h2>
					<div className={styles.subGroup}>
						<div>
							<p>Crunch (raw)</p>
							<progress className={styles.bar} value={1.0} />
						</div>
						<div>
							<p>Soft (cooked)</p>
							<progress className={styles.bar} value={0.6} />
						</div>
					</div>
					<br />
				</div>
				<div>
					<h2>Usage</h2>
					<p>
						Adds texture and flavor. Major supporter to prop other flavors up
					</p>
					<br />
				</div>
				<div>
					<h2>Alternatives</h2>
					<div className={styles.subGroup}>
						<div className={styles.alt}>
							<img className={styles.thumb} src="/onion.jpg"></img>
							<h3>Shallots</h3>
							<p>Onion w/ milder taste</p>
						</div>
						<div className={styles.alt}>
							<img className={styles.thumb} src="/onion.jpg"></img>
							<h3>Scallion</h3>
							<p>Onion w/ milder taste</p>
						</div>
						<div className={styles.alt}>
							<img className={styles.thumb} src="/onion.jpg"></img>
							<h3>Fennel</h3>
							<p>Onion w/ sharper taste</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default LearnIngredient;
