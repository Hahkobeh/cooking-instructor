import styles from './learnsub.module.scss';

const LearnIngredient = () => {
	return (
		<div>
            <div style={{display: "flex"}}>
                <img src='/onion.jpg'></img>
                <h1 style={{marginLeft: '20%', marginTop:"10%"}}><span className='accent'>Onions</span></h1>
            </div>
			<div className={styles.card}>
				<div>
					<h1>Taste</h1>
					<h2>Sweet (white), sour (yellow)</h2>
				</div>
				<div>
					<h1>Texture</h1>
					<h2>Crunchy (raw), soft (cooked)</h2>
				</div>
				<div>
					<h1>Usage</h1>
					<h2>Adds texture and flavor. Major supporter to prop other flavors up</h2>
				</div>
				<div>
					<h1>Alternatives</h1>
					<div style={{display: 'flex'}} className={styles.scrollable}>
						<div className={styles.alt}>
							<img src='/onion.jpg'></img>
							<h2><span className='accent'>Shallots</span></h2>
							<h6>Onion w/ milder taste</h6>
						</div>
						<div className={styles.alt}>
							<img src='/onion.jpg'></img>
							<h2><span className='accent'>Scallion</span></h2>
							<h6>Onion w/ milder taste</h6>
						</div>
						<div className={styles.alt}>
							<img src='/onion.jpg'></img>
							<h2><span className='accent'>Fennel</span></h2>
							<h6>Onion w/ sharper taste</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LearnIngredient;