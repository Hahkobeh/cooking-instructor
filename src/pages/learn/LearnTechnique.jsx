import styles from './learnsub.module.scss';

const LearnTechnique = () => {
	return (
		<div>
            <div style={{display: "flex"}}>
                <img src="/cutting.jpg"></img>
                <h1 style={{marginLeft: '20%', marginTop:"10%"}}><span className='accent'>Cutting</span></h1>
            </div>
            <div className={styles.card}>
                <div>
                    <h1>Difficulty</h1>
                    <h2>Easy</h2>
                </div>
                <div>
                    <h1>Tools</h1>
                    <ul className={styles.a}>
                        <li>
                            Knife
                        </li>
                        <li>
                            Cutting board
                        </li>
                        <li>
                            Ingredient of your choice!
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Steps</h1>
                    <ol className={styles.a}>
                        <li>
                            Use a claw grip to hold on to the item you want to cut
                        </li>
                        <li>
                            With your dominant hand, keep the knife next to your knuckles
                        </li>
                        <li>
                            Move the knife down, lift up when finished making your cut
                        </li>
                        <li>
                            Move the knife to the next part you want to cut
                        </li>
                        <li>
                            Repeat steps 1-4 until new desired shape is achieved
                        </li>
                    </ol>
                </div>
            </div>
		</div>
	);
};

export default LearnTechnique;