import styles from './learnsub.module.scss';

const LearnTechnique = () => {
	return (
		<div>
            <div style={{display: "flex"}}>
                <h2 style={{borderWidth: 20,borderColor: 'black'}}>img</h2>
                <h1 style={{marginLeft: '20%'}}>Cutting</h1>
            </div>
            <div style={{marginTop:"10%"}}>
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
                        Move the knife down, lift up when finished cutting
                    </li>
                </ol>
            </div>
		</div>
	);
};

export default LearnTechnique;