const staticData = {
	recipes: [
		{
			id: 1,
			title: 'Spaghetti Carbonara',
			tagIds: [1, 2, 7],
			shortDescription: 'An unforgettable classic',
			about:
				'This is a spaghetti recipe. A delightful dish that is both easy to prepare and delicious. ',
			time: '30 minutes',
			difficulty: 'Easy',
			equipment: ['Pan', 'Spatula', 'Bowl'],
			skills: ['Chopping', 'Sautéing'],
			image: 'spaghetti.jpg',
			ratings: {
				average: 4.5,
				total: 120,
			},
			ingredientsNormal: [
				{ name: 'Pasta', quantity: 2, unit: 'cups' },
				{ name: 'Pancetta', quantity: 100, unit: 'g' },
				{ name: 'Eggs', quantity: 4, unit: 'large' },
				{ name: 'Parmesan Cheese', quantity: 1, unit: 'cup' },
				{ name: 'Garlic', quantity: 2, unit: 'cloves' },
				{ name: 'Salt', quantity: 2, unit: 'pinches' },
				{ name: 'Black Pepper', quantity: 1, unit: 'tsp' },
			],
			ingredientsVegeterian: [
				{ name: 'Pasta', quantity: 2, unit: 'cups' },
				{
					name: 'Shiitake Mushrooms',
					quantity: 100,
					unit: 'g',
					substituteFor: 'Pancetta',
				},
				{ name: 'Eggs', quantity: 4, unit: 'large' },
				{
					name: 'Vegan Parmesan Cheese',
					quantity: 1,
					unit: 'cup',
					substituteFor: 'Parmesan Cheese',
				},
				{ name: 'Garlic', quantity: 2, unit: 'cloves' },
				{ name: 'Salt', quantity: 2, unit: 'pinches' },
				{ name: 'Black Pepper', quantity: 1, unit: 'tsp' },
			],
			ingredientsGlutenFree: [
				{ name: 'Gluten-Free Pasta', quantity: 2, unit: 'cups' },
				{ name: 'Pancetta', quantity: 100, unit: 'g' },
				{ name: 'Eggs', quantity: 4, unit: 'large' },
				{ name: 'Parmesan Cheese', quantity: 1, unit: 'cup' },
				{ name: 'Garlic', quantity: 2, unit: 'cloves' },
				{ name: 'Salt', quantity: 2, unit: 'pinches' },
				{ name: 'Black Pepper', quantity: 1, unit: 'tsp' },
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
			ratings: {
				average: 3.5,
				total: 80,
			},
			ingredientsNormal: [
				{ name: 'All-purpose Flour', quantity: 3, unit: 'cups' },
				{ name: 'Granulated Sugar', quantity: 2, unit: 'cups' },
				{ name: 'Baking Powder', quantity: 1, unit: 'tbsp' },
				{ name: 'Salt', quantity: 0.5, unit: 'tsp' },
				{ name: 'Unsalted Butter', quantity: 1, unit: 'cup' },
				{ name: 'Eggs', quantity: 4, unit: 'large' },
				{ name: 'Milk', quantity: 1, unit: 'cup' },
				{ name: 'Vanilla Extract', quantity: 2, unit: 'tsp' },
			],
			ingredientsGlutenFree: [
				{ name: 'Gluten-Free Flour Blend', quantity: 3, unit: 'cups' },
				{ name: 'Granulated Sugar', quantity: 2, unit: 'cups' },
				{ name: 'Baking Powder', quantity: 1, unit: 'tbsp' },
				{ name: 'Salt', quantity: 0.5, unit: 'tsp' },
				{ name: 'Unsalted Butter', quantity: 1, unit: 'cup' },
				{ name: 'Eggs', quantity: 4, unit: 'large' },
				{ name: 'Milk', quantity: 1, unit: 'cup' },
				{ name: 'Vanilla Extract', quantity: 2, unit: 'tsp' },
			],
			ingredientsVegeterian: [
				{ name: 'All-purpose Flour', quantity: 3, unit: 'cups' },
				{ name: 'Organic Sugar', quantity: 2, unit: 'cups' },
				{ name: 'Baking Powder', quantity: 1, unit: 'tbsp' },
				{ name: 'Salt', quantity: 0.5, unit: 'tsp' },
				{ name: 'Vegan Butter', quantity: 1, unit: 'cup' },
				{
					name: 'Flaxseed Eggs',
					quantity: 4,
					unit: '',
					note: 'Mix 4 tbsp ground flaxseed with 12 tbsp water',
				},
				{ name: 'Almond Milk', quantity: 1, unit: 'cup' },
				{ name: 'Vanilla Extract', quantity: 2, unit: 'tsp' },
			],
			steps: [
				{
					number: 1,
					description:
						'Preheat your oven to 350°F (175°C) and grease your baking pan.',
				},
				{
					number: 2,
					description: 'Sift together flour, baking powder, and salt.',
				},
				{
					number: 3,
					description: 'Cream the butter and sugar until light and fluffy.',
				},
				{
					number: 4,
					description:
						'Add eggs one at a time, then mix in the vanilla extract.',
				},
				{
					number: 5,
					description:
						'Gradually add the dry ingredients alternately with milk, starting and ending with the dry ingredients.',
				},
				{
					number: 6,
					description:
						'Pour the batter into the prepared pan and bake for 30-35 minutes.',
				},
				{
					number: 7,
					description:
						'Let the cake cool before applying vanilla buttercream frosting.',
				},
				{
					number: 8,
					description: 'Decorate as desired and serve.',
				},
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
	categories: [
		{ id: 1, name: 'Italian', icon: 'local_pizza' },
		{ id: 2, name: 'Desserts', icon: 'cake' },
		{ id: 3, name: 'Quick Meals', icon: 'schedule' },
		{ id: 4, name: 'Vegetarian', icon: 'spa' },
		{ id: 5, name: 'Vegan', icon: 'grass' },
		{ id: 6, name: 'Gluten-Free', icon: 'no_food' },
		{ id: 7, name: 'Breakfast', icon: 'free_breakfast' },
		{ id: 8, name: 'Asian Cuisine', icon: 'rice_bowl' },
		{ id: 9, name: 'Mexican', icon: 'local_dining' },
		{ id: 10, name: 'Easy', icon: 'thumb_up' },
		{ id: 11, name: 'Healthy', icon: 'favorite' },
		{ id: 13, name: 'Nut-Free', icon: 'no_meals' },
		{ id: 15, name: 'Low Carb', icon: 'fitness_center' },
	],

	users: [
		{
			username: 'Jacob',
			password: '123',
			favorites: [1, 3],
			shoppingList: [],
			dietaryRestrictions: [1],
		},
		{
			username: 'Achraf',
			password: '123',
			favorites: [2],
			dietaryRestrictions: [1],
		},
		{
			username: 'Mo',
			password: '123',
			favorites: [2],
			dietaryRestrictions: [1],
		},
		{
			username: 'Colty',
			password: '123',
			favorites: [2],
			dietaryRestrictions: [1],
		},
		{
			username: 'Aidan',
			password: '123',
			favorites: [2],
			dietaryRestrictions: [1],
		},
	],
	dietaryRestrictions: [
		{ id: 1, label: 'Vegetarian' },
		{ id: 2, label: 'Vegan' },
		{ id: 3, label: 'Gluten-Free' },
		{ id: 4, label: 'Halal' },
		{ id: 5, label: 'Kosher' },
		{ id: 6, label: 'Lactose Intolerant' },
	],
};

export default staticData;
