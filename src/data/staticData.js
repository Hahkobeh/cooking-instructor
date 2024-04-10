const staticData = {
	recipes: [
		{
			id: 1,
			title: 'Spaghetti Carbonara',
			tagIds: [1, 2, 6],
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
			dietaryRestrictions: [2],
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
			tagIds: [2, 9],
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
			dietaryRestrictions: [2],
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
		{
			id: 3,
			title: 'Mushroom Risotto',
			tagIds: [4, 5, 8],
			shortDescription: 'Creamy and comforting Italian classic',
			about:
				'A rich and creamy risotto cooked slowly to perfection, featuring earthy mushrooms and aromatic herbs.',
			time: '45 minutes',
			difficulty: 'Medium',
			equipment: ['Saucepan', 'Wooden Spoon'],
			skills: ['Stirring', 'Tasting'],
			image: 'mushroom-risotto.jpg',
			ratings: {
				average: 4.8,
				total: 95,
			},
			dietaryRestrictions: [1],
			ingredientsNormal: [
				{ name: 'Arborio Rice', quantity: 1, unit: 'cup' },
				{ name: 'Mixed Mushrooms', quantity: 300, unit: 'g' },
				{ name: 'Vegetable Stock', quantity: 4, unit: 'cups' },
				{ name: 'White Wine', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Parmesan Cheese', quantity: 3 / 4, unit: 'cup' },
				{ name: 'Onion', quantity: 1, unit: '' },
				{ name: 'Garlic', quantity: 2, unit: 'cloves' },
				{ name: 'Butter', quantity: 2, unit: 'tbsp' },
				{ name: 'Olive Oil', quantity: 1, unit: 'tbsp' },
				{ name: 'Thyme', quantity: 1, unit: 'tsp' },
			],
			ingredientsGlutenFree: [
				{ name: 'GF Arborio Rice', quantity: 1, unit: 'cup' },
				{ name: 'GF Mixed Mushrooms', quantity: 300, unit: 'g' },
				{ name: 'GF Vegetable Stock', quantity: 4, unit: 'cups' },
				{ name: 'GF White Wine', quantity: 1 / 2, unit: 'cup' },
				{ name: 'GF Parmesan Cheese', quantity: 3 / 4, unit: 'cup' },
				{ name: 'GF Onion', quantity: 1, unit: '' },
				{ name: 'GF Garlic', quantity: 2, unit: 'cloves' },
				{ name: 'GF Butter', quantity: 2, unit: 'tbsp' },
				{ name: 'GF Olive Oil', quantity: 1, unit: 'tbsp' },
				{ name: 'GF Thyme', quantity: 1, unit: 'tsp' },
			],
			ingredientsVegeterian: [
				{ name: 'VEG Arborio Rice', quantity: 1, unit: 'cup' },
				{ name: 'VEG Mixed Mushrooms', quantity: 300, unit: 'g' },
				{ name: 'VEG Vegetable Stock', quantity: 4, unit: 'cups' },
				{ name: 'VEG White Wine', quantity: 1 / 2, unit: 'cup' },
				{ name: 'VEG Parmesan Cheese', quantity: 3 / 4, unit: 'cup' },
				{ name: 'VEG Onion', quantity: 1, unit: '' },
				{ name: 'VEG Garlic', quantity: 2, unit: 'cloves' },
				{ name: 'VEG Butter', quantity: 2, unit: 'tbsp' },
				{ name: 'VEG Olive Oil', quantity: 1, unit: 'tbsp' },
				{ name: 'VEG Thyme', quantity: 1, unit: 'tsp' },
			],
			steps: [
				{
					number: 1,
					description:
						'Heat the stock in a separate pot and keep it warm over low heat.',
				},
				{
					number: 2,
					description:
						'Sauté onions, garlic, and mushrooms in a saucepan with olive oil and butter until softened.',
				},
				{
					number: 3,
					description:
						'Add the rice to the saucepan, stirring until grains are well-coated and translucent.',
				},
				{
					number: 4,
					description:
						'Pour in the wine, cooking until the liquid has been absorbed.',
				},
				{
					number: 5,
					description:
						'Add the stock one ladle at a time, stirring continuously, until the rice is al dente and creamy.',
				},
				{
					number: 6,
					description:
						'Stir in the Parmesan cheese and thyme, then season with salt and pepper to taste. Serve immediately.',
				},
			],
		},
		{
			id: 4,
			title: 'Thai Green Curry',
			tagIds: [4, 5, 6],
			shortDescription: 'Spicy and aromatic curry dish',
			about:
				'A vibrant and spicy Thai green curry that combines creamy coconut milk with tender chicken, crisp vegetables, and fragrant herbs.',
			time: '30 minutes',
			difficulty: 'Easy',
			equipment: ['Pot'],
			skills: ['Boiling', 'Simmering'],
			image: 'thai-green-curry.jpg',
			ratings: {
				average: 3.5,
				total: 105,
			},
			dietaryRestrictions: [1],
			ingredientsNormal: [
				{ name: 'Chicken Breast', quantity: 400, unit: 'g' },
				{ name: 'Coconut Milk', quantity: 1, unit: 'can' },
				{ name: 'Green Curry Paste', quantity: 2, unit: 'tbsp' },
				{ name: 'Bamboo Shoots', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Bell Pepper', quantity: 1, unit: '' },
				{ name: 'Thai Basil Leaves', quantity: 1 / 4, unit: 'cup' },
				{ name: 'Fish Sauce', quantity: 1, unit: 'tbsp' },
				{ name: 'Brown Sugar', quantity: 1, unit: 'tsp' },
				{ name: 'Lime', quantity: 1, unit: '' },
			],
			ingredientsGlutenFree: [
				{ name: 'Chicken Breast', quantity: 400, unit: 'g' },
				{ name: 'Coconut Milk', quantity: 1, unit: 'can' },
				{ name: 'GF Green Curry Paste', quantity: 2, unit: 'tbsp' },
				{ name: 'Bamboo Shoots', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Bell Pepper', quantity: 1, unit: '' },
				{ name: 'Thai Basil Leaves', quantity: 1 / 4, unit: 'cup' },
				{ name: 'Fish Sauce', quantity: 1, unit: 'tbsp' },
				{ name: 'Brown Sugar', quantity: 1, unit: 'tsp' },
				{ name: 'Lime', quantity: 1, unit: '' },
			],
			ingredientsVegeterian: [
				{ name: 'Tofu Chicken Breast', quantity: 400, unit: 'g' },
				{ name: 'Coconut Milk', quantity: 1, unit: 'can' },
				{ name: 'Green Curry Paste', quantity: 2, unit: 'tbsp' },
				{ name: 'Bamboo Shoots', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Bell Pepper', quantity: 1, unit: '' },
				{ name: 'Thai Basil Leaves', quantity: 1 / 4, unit: 'cup' },
				{ name: 'Vegeterian Fish Sauce', quantity: 1, unit: 'tbsp' },
				{ name: 'Brown Sugar', quantity: 1, unit: 'tsp' },
				{ name: 'Lime', quantity: 1, unit: '' },
			],
			steps: [
				{
					number: 1,
					description:
						'Heat the green curry paste in a pot over medium heat, then add coconut milk.',
				},
				{
					number: 2,
					description: 'Add the chicken and simmer until cooked through.',
				},
				{
					number: 3,
					description:
						'Add the bamboo shoots and bell pepper, cooking until tender.',
				},
				{
					number: 4,
					description:
						'Stir in the fish sauce, brown sugar, and squeeze in lime juice.',
				},
				{
					number: 5,
					description:
						'Garnish with Thai basil leaves before serving with steamed rice.',
				},
			],
		},
		{
			id: 5,
			title: 'Quinoa Salad with Avocado',
			tagIds: [4, 5, 10],
			shortDescription: 'Refreshing and nutritious salad',
			about:
				'A light and healthy quinoa salad packed with fresh vegetables and topped with slices of creamy avocado.',
			time: '20 minutes',
			difficulty: 'Easy',
			equipment: ['Bowl'],
			skills: ['Boiling', 'Chopping'],
			image: 'quinoa-salad.jpg',
			ratings: {
				average: 4.9,
				total: 85,
			},
			dietaryRestrictions: [1],
			ingredientsNormal: [
				{ name: 'Quinoa', quantity: 1, unit: 'cup' },
				{ name: 'Cucumber', quantity: 1, unit: '' },
				{ name: 'Cherry Tomatoes', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Red Onion', quantity: 1 / 4, unit: '' },
				{ name: 'Avocado', quantity: 1, unit: '' },
				{ name: 'Lemon', quantity: 1, unit: '' },
				{ name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
				{ name: 'Feta Cheese', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Fresh Parsley', quantity: 1 / 4, unit: 'cup' },
			],
			ingredientsGlutenFree: [
				{ name: 'GF Quinoa', quantity: 1, unit: 'cup' },
				{ name: 'Cucumber', quantity: 1, unit: '' },
				{ name: 'Cherry Tomatoes', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Red Onion', quantity: 1 / 4, unit: '' },
				{ name: 'Avocado', quantity: 1, unit: '' },
				{ name: 'Lemon', quantity: 1, unit: '' },
				{ name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
				{ name: 'Feta Cheese', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Fresh Parsley', quantity: 1 / 4, unit: 'cup' },
			],
			ingredientsVegeterian: [
				{ name: 'Quinoa', quantity: 1, unit: 'cup' },
				{ name: 'Cucumber', quantity: 1, unit: '' },
				{ name: 'Cherry Tomatoes', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Red Onion', quantity: 1 / 4, unit: '' },
				{ name: 'Avocado', quantity: 1, unit: '' },
				{ name: 'Lemon', quantity: 1, unit: '' },
				{ name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
				{ name: 'GF Feta Cheese', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Fresh Parsley', quantity: 1 / 4, unit: 'cup' },
			],
			steps: [
				{
					number: 1,
					description:
						'Cook quinoa according to package instructions, then let it cool.',
				},
				{
					number: 2,
					description:
						'In a large bowl, combine cooled quinoa with chopped cucumber, cherry tomatoes, red onion, and crumbled feta cheese.',
				},
				{
					number: 3,
					description:
						'Drizzle with olive oil and squeeze in lemon juice. Toss to combine.',
				},
				{
					number: 4,
					description:
						'Serve topped with slices of avocado and a sprinkle of fresh parsley.',
				},
				
			],
		},
		{
			id: 6,
			title: 'Grilled Cheese Sandwich',
			tagIds: [2, 3, 8],
			shortDescription: 'Staple American Breakfast',
			about:
				'A dish that is quick and easy to make, and very customizable allowing it to suit the tastes of the chef that makes it.',
			time: '20 minutes',
			difficulty: 'Easy',
			equipment: ['Pan'],
			skills: ['Grilling'],
			image: 'grilledcheese.jpg',
			ratings: {
				average: 4.7,
				total: 500,
			},
			dietaryRestrictions: [1],
			ingredientsNormal: [
				{ name: 'White Bread', quantity: 2, unit: 'slices' },
				{ name: 'Butter', quantity: 3 / 2, unit: 'tbsp' },
				{ name: 'American Cheese', quantity: 2, unit: 'slices' },
				
			],
			ingredientsGlutenFree: [
				{ name: 'GF Bread', quantity: 2, unit: 'slices' },
				{ name: 'Almond Oil', quantity: 3 / 2, unit: 'tbsp' },
				{ name: 'Cheddar Cheese', quantity: 2, unit: 'slices' },
			],
			ingredientsVegeterian: [
				{ name: 'White Bread', quantity: 2, unit: 'slices' },
				{ name: 'Butter', quantity: 3 / 2, unit: 'tbsp' },
				{ name: 'American Cheese', quantity: 2, unit: 'slices' },
			],
			steps: [
				{
					number: 1,
					description:
						'Place your slices of cheese between your slices of bread',
				},
				{
					number: 2,
					description:
						'Butter the outside of your slices of bread',
				},
				{
					number: 3,
					description:
						'Place a pan over medium heat, once warmed place your sandwich into the pan',
				},
				{
					number: 4,
					description:
						'Once crisp on the bottom, flip the sandwich and continue to cook until the cheese has melted',
				},
				
			],
		},
		{
			id: 7,
			title: 'Shakshuka',
			tagIds: [4, 5 ,8],
			shortDescription: 'A hearty and heartwarming breakfast to start your mornings with.',
			about:
				'Originating from the Middle East, shakshuka is a one-pot dish that is packed with flavor and nutrients to start the day off right',
			time: '30 minutes',
			difficulty: 'Medium',
			equipment: ['Pan','Knife','Cutting board'],
			skills: ['Sauteeing', 'Poaching', 'Chopping'],
			image: 'shakshuka.jpg',
			ratings: {
				average: 4.0,
				total: 20,
			},
			dietaryRestrictions: [1,3],
			ingredientsNormal: [
				{ name: 'Yellow Onion', quantity: 1, unit: '' },
				{ name: 'Green Peppers', quantity: 2, unit: '' },
				{ name: 'Garlic Cloves', quantity: 2, unit: '' },
				{ name: 'Ground Coriander', quantity: 1, unit: 'tsp' },
				{ name: 'Sweet Paprika', quantity: 1, unit: 'tsp' },
				{ name: 'Ground Cumin', quantity: 1/2, unit: 'tsp' },
				{ name: 'Medium Tomatoes', quantity: 6, unit: 'tbsp' },
				{ name: 'Tomato Sauce', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Fresh Parsley', quantity: 1 / 4, unit: 'cup' },
				{ name: 'Fresh Mint', quantity: 1 / 4, unit: 'cup' },
				{ name: 'Eggs', quantity: 6, unit: '' },
				
			],
			ingredientsGlutenFree: [
				{ name: 'Yellow Onion', quantity: 1, unit: '' },
				{ name: 'Green Peppers', quantity: 2, unit: '' },
				{ name: 'Garlic Cloves', quantity: 2, unit: '' },
				{ name: 'Ground Coriander', quantity: 1, unit: 'tsp' },
				{ name: 'Sweet Paprika', quantity: 1, unit: 'tsp' },
				{ name: 'Ground Cumin', quantity: 1/2, unit: 'tsp' },
				{ name: 'Medium Tomatoes', quantity: 6, unit: 'tbsp' },
				{ name: 'Tomato Sauce', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Fresh Parsley', quantity: 1 / 4, unit: 'cup' },
				{ name: 'Fresh Mint', quantity: 1 / 4, unit: 'cup' },
				{ name: 'Eggs', quantity: 6, unit: '' },
				
			],
			ingredientsVegeterian: [
				{ name: 'Yellow Onion', quantity: 1, unit: '' },
				{ name: 'Green Peppers', quantity: 2, unit: '' },
				{ name: 'Garlic Cloves', quantity: 2, unit: '' },
				{ name: 'Ground Coriander', quantity: 1, unit: 'tsp' },
				{ name: 'Sweet Paprika', quantity: 1, unit: 'tsp' },
				{ name: 'Ground Cumin', quantity: 1/2, unit: 'tsp' },
				{ name: 'Medium Tomatoes', quantity: 6, unit: 'tbsp' },
				{ name: 'Tomato Sauce', quantity: 1 / 2, unit: 'cup' },
				{ name: 'Fresh Parsley', quantity: 1 / 4, unit: 'cup' },
				{ name: 'Fresh Mint', quantity: 1 / 4, unit: 'cup' },
				{ name: 'Eggs', quantity: 6, unit: '' },
				
			],
			steps: [
				{
					number: 1,
					description:
						'Heat olive oil in your pan while you chop your vegetables',
				},
				{
					number: 2,
					description:
						'Add your vegetables with garlic, spices, and salt and pepper to taste to the pan. Cook until the veggies have softened',
				},
				{
					number: 3,
					description:
						'Add tomatoes and tomato sauce, let simmer for 15 minutes. Afterwards, uncover and cook for ~4 more minutes',
				},
				{
					number: 4,
					description:
						'Make 6 wells in your mixture, and crack an egg into each well',
				},
				{
					number: 5,
					description:
						'Reduce the heat to low, cover and let cook until the egg whites have set',
				},
				{
					number: 6,
					description:
						'Uncover and add your parsley and mint and serve while hot',
				},
				
			],
		},
	],

	tags: [
		{ id: 1, value: 'cheap', icon: 'attach_money' },
		{ id: 2, value: 'quick', icon: 'schedule' },
		{ id: 3, value: 'beginner', icon: 'thumb_up' },
		{ id: 4, value: 'healthy', icon: 'favorite' },
		{ id: 5, value: 'vegetarian', icon: 'spa' },
		{ id: 6, value: 'italian', icon: 'local_pizza' },
		{ id: 7, value: 'chinese', icon: 'rice_bowl' },
		{ id: 8, value: 'breakfast', icon: 'free_breakfast' },
		{ id: 9, value: 'desserts', icon: 'cake' },
		{ id: 10, value: 'keto', icon: 'fitness_center' },
	],
	users: [
		{
			username: 'Jacob',
			password: '123',
			favorites: [1, 2],
			recents: [],
			shoppingList: [],
			dietaryRestrictions: [1],
			activeRecipe: {
				id: null,
				tab: null,
			},
		},
		{
			username: 'Achraf',
			password: '123',
			favorites: [2],
			recents: [],
			shoppingList: [],
			dietaryRestrictions: [1],
			activeRecipe: {
				id: null,
				tab: null,
			},
		},
		{
			username: 'Mo',
			password: '123',
			favorites: [2],
			recents: [],
			shoppingList: [],
			dietaryRestrictions: [1],
			activeRecipe: {
				id: null,
				tab: null,
			},
		},
		{
			username: 'Colty',
			password: '123',
			favorites: [2],
			recents: [],
			shoppingList: [],
			dietaryRestrictions: [1],
			activeRecipe: {
				id: null,
				tab: null,
			},
		},
		{
			username: 'Aidan',
			password: '123',
			favorites: [2],
			recents: [],
			shoppingList: [],
			dietaryRestrictions: [1],
			activeRecipe: {
				id: null,
				tab: null,
			},
		},
	],
	dietaryRestrictions: [
		{ id: 1, label: 'Vegetarian' },
		{ id: 2, label: 'Gluten-Free' },
		{ id: 3, label: 'Lactose Intolerant' },
	],
	techniques: [
		{
			id: 1,
			title: 'Cutting',
			shortDescription: 'Chop chop, but not your fingers...',
			difficulty: 'Easy',
			tools: ['Knife', 'Cutting board', 'Ingredient of your choice!'],
			image: '/cutting.jpg',
			steps: [
				{
					number: 1,
					description: 'Use a # to hold on to the item you want to cut',
					ref: 'claw grip',
				},
				{
					number: 2,
					description: 'With your dominant hand, keep the knife #',
					ref: 'next to your knuckles',
				},
				{
					number: 3,
					description: '# lift up when finished making your cut',
					ref: 'Move the knife down,',
				},
				{
					number: 4,
					description: 'Move the knife to the next part you want to cut',
					ref: '',
				},
				{
					number: 5,
					description: 'Repeat steps 1-4 until new desired shape is achieved',
					ref: '',
				},
			],
		},
		{
			id: 2,
			title: 'Grating',
			shortDescription: 'Never find preparing cheese grating again',
			difficulty: 'Easy',
			tools: ['Grater', 'Soft food item'],
			image: '/grating.jpg',
			steps: [
				{
					number: 1,
					description: 'Hold your # so that it does not move off the table',
					ref: 'grater',
				},
				{
					number: 2,
					description: 'Hold the item that you want to grate # against the grater',
					ref: 'at an angle',
				},
				{
					number: 3,
					description: 'Move the item up/down # while pushing it against the grater ',
					ref: 'against the grain',
				},
				{
					number: 4,
					description: 'Repeat steps 1-3 until you have the desired amount of the item',
					ref: '',
				},
			],
		},
		{
			id: 3,
			title: 'Boiling',
			shortDescription: 'Never reach your own boiling point again',
			difficulty: 'Easy',
			tools: ['Pot', 'Stove', 'Water'],
			image: '/boiling.jpg',
			steps: [
				{
					number: 1,
					description: '# with as much water as you want to boil',
					ref: 'Fill your pot',
				},
				{
					number: 2,
					description: 'Place the pot on the stove and turn the heat up to high',
					ref: '',
				},
				{
					number: 3,
					description: 'If your pot has a lid, put it on at this point',
					ref: '',
				},
				{
					number: 4,
					description: 'Wait 8-10 minutes, or until you see # in your water',
					ref: 'lots of bubbles',
				},
			],
		},
	],
	ingredientsLearn: [
		{
			id: 1,
			title: 'Onion',
			shortDescription: 'Chefs May Cry',
			taste: [
				{
					title: 'Sweet',
					value: 0.5,
				},
				{
					title: 'Sour',
					value: 0.3,
				},
			],
			texture: [
				{
					title: 'Crunch (raw)',
					value: 1.0,
				},
				{
					title: 'Soft (cooked)',
					value: 0.6,
				},
			],
			image: '/onion.jpg',
			usage:
				'Adds texture and flavor. Major supporter to prop other flavors up.',
			alts: [
				{
					number: 1,
					name: 'Shallots',
					shortDescription: 'Onions w/ milder taste',
					image: '/shallots.jpg',
				},
				{
					number: 2,
					name: 'Scallion',
					shortDescription: 'Onions w/ milder taste',
					image: '/scallions.jpg',
				},
				{
					number: 3,
					name: 'Fennel',
					shortDescription: 'Onions w/ sharper taste',
					image: '/fennel.jpg',
				},
			],
		},
		{
			id: 2,
			title: 'Potato',
			shortDescription: 'Most staple ingredient in any kitchen',
			taste: [
				{
					title: 'Starchy',
					value: 1.0,
				},
				{
					title: 'Sweet',
					value: 0.1,
				},
			],
			texture: [
				{
					title: 'Creamy (cooked)',
					value: 0.7,
				},
				{
					title: 'Firm (uncooked)',
					value: 0.6,
				},
			],
			image: '/potato.png',
			usage:
				'Can be used as either sides or the main part of a dish. Very versatile and provides different experiences any way it is cooked',
			alts: [
				{
					number: 1,
					name: 'Radish',
					shortDescription: 'Low-carb replacement',
					image: '/radish.jpg',
				},
				{
					number: 2,
					name: 'Cauliflower',
					shortDescription: 'Similar texture when cooked',
					image: '/cauliflower.jpg',
				},
				{
					number: 3,
					name: 'Daikon',
					shortDescription: 'More mild',
					image: '/daikon.jpg',
				},
			],
		},
	],
};

export default staticData;
