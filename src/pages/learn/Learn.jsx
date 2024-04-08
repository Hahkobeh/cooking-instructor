//import { Link } from 'react-router-dom';
//import styles from './learn.module.scss';
import { useState } from 'react';
import SearchBar from '@/components/search-bar/SearchBar';
import { useTechniques } from '@/context/data/useTechniques';
import LearnCardList from '@/components/learn-card-list/LearnCardList';
import { useIngredientsLearn } from '@/context/data/useIngredientsLearn';
//import Home from './home/Home';
//import Card from "@/components/card/Card";
//import NavBar from "@/components/nav-bar/NavBar";

//TODO: Make design for technique/ingredients screen
//TODO: Find good way to add icon image in cards, even when text is long

const Learn = () => {
	const [search, setSearch] = useState('');
	const techniques = useTechniques();
	const ingredientsLearn = useIngredientsLearn();
	//const ingredientsLearn = useIngredientsLearn();

	return (
		<div>
			<h1 style={{ marginBottom: '10px' }}>Learn more</h1>
			<SearchBar search={search} setSearch={setSearch} />
			<div style={{ marginTop: '16px' }}>
				<h2>Techniques</h2>
			</div>
			<LearnCardList>
				{techniques.map((learn) => (
					<LearnCardList.Card
						key={learn.id}
						learnId={learn.id}
						image={learn.image}
						type="LearnTechnique"
					>
						<h3>{learn.title}</h3>
						<h4>{learn.shortDescription}</h4>
					</LearnCardList.Card>
				))}
			</LearnCardList>
			<div
				style={{ marginTop: '30px', borderWidth: '50px', borderColor: 'red' }}
			>
				<div style={{ marginTop: '16px' }}>
					<h2>Ingredients</h2>
				</div>
				<LearnCardList>
				{ingredientsLearn.map((learn) => (
					<LearnCardList.Card
						key={learn.id}
						learnId={learn.id}
						image={learn.image}
						type="LearnIngredient"
					>
						<h3>{learn.title}</h3>
						<h4>{learn.shortDescription}</h4>
					</LearnCardList.Card>
				))}
			</LearnCardList>
			</div>
		</div>
	);
};

export default Learn;
