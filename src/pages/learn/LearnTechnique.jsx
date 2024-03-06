import styles from './learnsub.module.scss';

const LearnTechnique = () => {
	return (
		<div className={styles.divL}>
            <div className={styles.divL} style={{display: "flex"}}>
                <img className={styles.thumb} src="/cutting.jpg"></img>
                <h1 style={{marginLeft: '20%', marginTop:"10%"}}><span className='accent'>Cutting</span></h1>
            </div>
            <div className={styles.card}>
                <div>
                    <h1>Difficulty</h1>
                    <h2>Easy</h2>
                </div>
                <div>
                    <h1>Tools</h1>
                    <ul className={styles.unlist}>
                        <li className={styles.unlistel}>
                            Knife
                        </li>
                        <li className={styles.unlistel}>
                            Cutting board
                        </li>
                        <li className={styles.unlistel}>
                            Ingredient of your choice!
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Steps</h1>
                    <ol className={styles.list}>
                        <li className={styles.listel}>
                            Use a claw grip to hold on to the item you want to cut
                        </li>
                        <li className={styles.listel}>
                            With your dominant hand, keep the knife next to your knuckles
                        </li>
                        <li className={styles.listel}>
                            Move the knife down, lift up when finished making your cut
                        </li>
                        <li className={styles.listel}>
                            Move the knife to the next part you want to cut
                        </li>
                        <li className={styles.listel}>
                            Repeat steps 1-4 until new desired shape is achieved
                        </li>
                    </ol>
                </div>
            </div>
		</div>
	);
};

export default LearnTechnique;