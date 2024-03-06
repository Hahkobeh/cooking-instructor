import './learnsub.module.scss';

const LearnIngredient = () => {
	return (
		<div>
            <div style={{display: "flex"}}>
                <h2 style={{borderWidth: 20,borderColor: 'black'}}>img</h2>
                <h1 style={{marginLeft: '20%'}}>Onions</h1>
            </div>
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
				<div style={{display: 'flex'}}>
					<div>
						<h2>img</h2>
						<h2>Shallots</h2>
					</div>
					<div style={{}}>
						<h2>img</h2>
						<h2>Shallots</h2>
					</div>
					<div>
						<h2>img</h2>
						<h2>Shallots</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LearnIngredient;