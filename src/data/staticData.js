const staticData = {
	recipes: [
		{
			id: 1,
			title: 'Spaghetti Carbonara',
			tagIds: [1, 2, 7],
			shortDescription: 'An unforgettable classic',
			about:
				'This is a spaghetti recipe. A delightful dish that is both easy to prepare and delicious.',
			time: '30 minutes',
			difficulty: 'Easy',
			equipment: ['Pan', 'Spatula', 'Bowl'],
			skills: ['Chopping', 'Sautéing'],
			image: 'spaghetti.jpg',
			ingredients: [
				{ name: 'Pasta', quantity: '2', unit: 'cups' },
				{ name: 'Pancetta', quantity: '100', unit: 'g' },
				{ name: 'Eggs', quantity: '4', unit: 'large' },
				{ name: 'Parmesan Cheese', quantity: '1', unit: 'cup' },
				{ name: 'Garlic', quantity: '2', unit: 'cloves' },
				{ name: 'Salt', quantity: '2', unit: 'pinches' },
				{ name: 'Black Pepper', quantity: '1', unit: 'tsp' },
			],
			steps: [
				{
					number: 1,
					description: 'Boil the pasta in salted water until al dente.',
				},
				{
					number: 2,
					description:
						'Fry the pancetta with garlic until crispy. Remove garlic afterwards.',
				},
				{
					number: 3,
					description: 'Beat the eggs with grated Parmesan, salt, and pepper.',
				},
				{
					number: 4,
					description:
						'Combine the pasta with the pancetta in a pan. Remove from heat.',
				},
				{
					number: 5,
					description:
						'Quickly mix in the egg mixture, allowing the residual heat to cook the eggs without scrambling.',
				},
				{
					number: 6,
					description:
						'Serve immediately with extra Parmesan and freshly ground black pepper.',
				},
			],
		},
		{
			id: 2,
			title: 'Vanilla Dream Cake',
			tagIds: [1, 4],
			shortDescription: 'A delicious vanilla surprise',
			about:
				'This is a vanilla cake recipe. A classic dish that brings comfort and warmth.',
			time: '1 hour',
			difficulty: 'Medium',
			equipment: ['Pot', 'Knife', 'Cutting board'],
			skills: ['Boiling', 'Simmering'],
			image: 'cake.jpg',
			ingredients: [
				{ name: 'All-purpose Flour', quantity: '3', unit: 'cups' },
				{ name: 'Granulated Sugar', quantity: '2', unit: 'cups' },
				{ name: 'Baking Powder', quantity: '1', unit: 'tbsp' },
				{ name: 'Salt', quantity: '1/2', unit: 'tsp' },
				{ name: 'Unsalted Butter', quantity: '1', unit: 'cup' },
				{ name: 'Eggs', quantity: '4', unit: 'large' },
				{ name: 'Milk', quantity: '1', unit: 'cup' },
				{ name: 'Vanilla Extract', quantity: '2', unit: 'tsp' },
			],
			steps: [
				'Step 1: Preheat your oven to 350°F (175°C) and grease your baking pan.',
				'Step 2: Sift together flour, baking powder, and salt.',
				'Step 3: Cream the butter and sugar until light and fluffy.',
				'Step 4: Add eggs one at a time, then mix in the vanilla extract.',
				'Step 5: Gradually add the dry ingredients alternately with milk, starting and ending with the dry ingredients.',
				'Step 6: Pour the batter into the prepared pan and bake for 30-35 minutes.',
				'Step 7: Let the cake cool before applying vanilla buttercream frosting.',
				'Step 8: Decorate as desired and serve.',
			],
		},
	],
	tags: [
		{ id: 1, value: 'cheap', icon: 'attach_money' },
		{ id: 2, value: 'italian', icon: 'location_on' },
		{ id: 3, value: 'chinese', icon: 'location_on' },
		{ id: 4, value: 'baking', icon: 'oven' },
		{ id: 5, value: 'stir fry', icon: 'skillet' },
		{ id: 6, value: 'stew', icon: 'stockpot' },
		{ id: 7, value: 'barbecue', icon: 'outdoor_grill' },
		{ id: 8, value: 'fast', icon: 'microwave' },
	],
	users: [
		{
			username: 'Jacob',
			password: '123',
			favorites: [1, 3],
		},
		{
			username: 'Achraf',
			password: '123',
			favorites: [2],
		},
		{
			username: 'Mo',
			password: '123',
			favorites: [2],
		},
		{
			username: 'Colty',
			password: '123',
			favorites: [2],
		},
		{
			username: 'Aidan',
			password: '123',
			favorites: [2],
		},
	],
};

export default staticData;
