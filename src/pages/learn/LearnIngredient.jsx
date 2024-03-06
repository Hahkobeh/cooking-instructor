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
					<div style={{display: 'flex'}}>
						<div style={{alignItems:'center'}}>
							<h2>Sweet</h2>
							<progress className={styles.bar} value={0.5}/>
						</div> 
						<div>
							<h2>Sour</h2>
							<progress className={styles.bar} value={0.3}/>
						</div>
					</div>
				</div>
				<div>
					<h1>Texture</h1>
					<div style={{display: 'flex'}}>
						<div style={{alignItems:'center'}}>
							<h2>Crunch (raw)</h2>
							<progress className={styles.bar} value={1.0}/>
						</div> 
						<div>
							<h2>Soft (cooked)</h2>
							<progress className={styles.bar} value={0.6}/>
						</div>
					</div>
				</div>
				<div>
					<h1>Usage</h1>
					<span className={styles.desc}>Adds texture and flavor. Major supporter to prop other flavors up</span>
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