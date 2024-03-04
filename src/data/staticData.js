const staticData = {
	recipes: [
		{
			id: 1,
			title: 'Spaghetti Carbonara',
			tagIds: [1, 2, 7],
			shortDescription: 'An unforgettable classic',
			about: 'this is a spaghetti recipe.',
			image: 'spaghetti.jpg',
			steps: [
				{
					description: 'add water to pot and bring to boil',
				},
				{
					description: 'insert pasta into boiling water',
				},
			],
		},
		{
			id: 2,
			title: 'Vanilla Dream Cake',
			tagIds: [1, 4],
			shortDescription: 'A delicious vanilla suprise',
			about: 'this is a vanilla cake recipe.',
			image: 'cake.jpg',
			steps: [
				{
					description: 'mix flour',
				},
				{
					description: 'mix in wet ingredients',
				},
			],
		},
		{
			id: 3,
			title: 'Ginger Beef',
			tagIds: [3, 5],
			shortDescription: 'A crunchy masterpiece',
			about: 'This is a ginger beef recipe.',
			image: 'ginger-beef.jpg',
			steps: [
				{
					description: 'mix flour',
				},
				{
					description: 'mix in wet ingredients',
				},
			],
		},
	],
	tags: [
		{
			id: 1,
			value: 'cheap',
			icon: 'attach_money',
		},
		{
			id: 2,
			value: 'italian',
			icon: 'location_on',
		},
		{
			id: 3,
			value: 'chinese',
			icon: 'location_on',
		},
		{
			id: 4,
			value: 'baking',
			icon: 'oven',
		},
		{
			id: 5,
			value: 'stir fry',
			icon: 'skillet',
		},
		{
			id: 5,
			value: 'stew',
			icon: 'stockpot',
		},
		{
			id: 6,
			value: 'barbaque',
			icon: 'outdoor_grill',
		},
		{
			id: 7,
			value: 'fast',
			icon: 'microwave',
		},
	],
};

export default staticData;
