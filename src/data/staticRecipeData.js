// No longer really using this file, but keeping it for reference.
const staticRecipeData = [
	{
		id: 1,
		name: 'Recipe 1',
		about: {
			description:
				'A delightful dish that is both easy to prepare and delicious.',
			time: '30 minutes',
			difficulty: 'Easy',
			equipment: ['Pan', 'Spatula', 'Bowl'],
			skills: ['Chopping', 'Sautéing'],
		},
		ingredients: [
			{ name: 'Ingredient 1', quantity: '2 cups' },
			{ name: 'Ingredient 2', quantity: '1 tablespoon' },
			{ name: 'Ingredient 3', quantity: '2 tablespoon' },
		],
		steps: [
			'Step 1: Do something.',
			'Step 2: Do the next thing.',
			'Step 3: Finish up.',
		],
	},
	{
		id: 2,
		name: 'Recipe 2',
		about: {
			description: 'A classic dish that brings comfort and warmth.',
			time: '1 hour',
			difficulty: 'Medium',
			equipment: ['Pot', 'Knife', 'Cutting board'],
			skills: ['Boiling', 'Simmering'],
		},
		ingredients: [
			{ name: 'Ingredient 1', quantity: '500g' },
			{ name: 'Ingredient 2', quantity: '200ml' },
		],
		steps: [
			'Step 1: Prepare the ingredients.',
			'Step 2: Cook the ingredients.',
			'Step 3: Serve and enjoy.',
		],
	},
];

export default staticRecipeData;
