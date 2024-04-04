import styles from './learnsub.module.scss';
import Dialog from '@/components/dialog/Dialog';
import { useState } from 'react';

const LearnTechnique = () => {
	const [videoOn, setVideoOn] = useState(false);

	return (
		<>
		{videoOn && (
			<Dialog close={() => setVideoOn(false)} title="Tutorial">
				<img src="/video-player.png" style={{ width: '300px' }} />
			</Dialog>
		)}
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
							<p>Use a <a className={styles.clickable} onClick={setVideoOn}>claw grip</a> to hold on to the item you want to cut</p>
						</li>
						<li className={styles.listel}>
							<p>
								With your dominant hand, keep the knife <a className={styles.clickable} onClick={setVideoOn}>next to your knuckles</a>
							</p>
						</li>
						<li className={styles.listel}>
							<p><a className={styles.clickable} onClick={setVideoOn}>Move the knife down,</a> lift up when finished making your cut</p>
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
		</>
	);
};

export default LearnTechnique;
