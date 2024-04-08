import styles from './learnsub.module.scss';
import Dialog from '@/components/dialog/Dialog';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTechniques } from '@/context/data/useTechniques';

const LearnTechnique = () => {
	const [videoOn, setVideoOn] = useState(false);
	const routeParams = useParams();
	const techniques = useTechniques();
	const technique = techniques.find((i) => i.id.toString() === routeParams.learnId);

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
					<h1>{technique.title}</h1>
					<h4>{technique.difficulty}</h4>
				</div>
				<img className={styles.thumb} src={technique.image}></img>
			</div>
			<div className={styles.card}>
				<div>
					<h2>Tools</h2>
					<ul className={styles.unlist}>
						{technique.tools.map((item, index) => (
						<li key={index} className={styles.unlistel}>
							<p>{item}</p>
						</li>
						))}
					</ul>
				</div>
				<br />
				<div>
					<h2>Steps</h2>
					<ol className={styles.list}>
						{technique.steps.map((item, index) => (
						<li key={index} className={styles.listel}>
							<p>{item.description}</p>
						</li>
						))}
						{/* <li className={styles.listel}>
							<p>Use a <a className={styles.clickable} onClick={setVideoOn}>claw grip</a> to hold on to the item you want to cut</p>
						</li> */}
					</ol>
				</div>
			</div>
		</div>
		</>
	);
};

export default LearnTechnique;
