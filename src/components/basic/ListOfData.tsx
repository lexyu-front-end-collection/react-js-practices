import { FoodItem, FoodCategoryProps } from '@/types/list_of_data';

function ListOfData() {
	const fruits: FoodItem[] = [
		{ id: 1, name: "apple", calories: 100 },
		{ id: 2, name: "mango", calories: 50 },
		{ id: 3, name: "orange", calories: 75 },
		{ id: 4, name: "banana", calories: 125 },
		{ id: 5, name: "pineapple", calories: 200 }
	];

	const vegetables: FoodItem[] = [
		{ id: 6, name: "potatoes", calories: 110 },
		{ id: 7, name: "celery", calories: 15 },
		{ id: 8, name: "carrots", calories: 25 },
		{ id: 9, name: "corn", calories: 63 },
		{ id: 10, name: "broccoli", calories: 50 }
	];


	const FoodCategory = ({ items, category }: FoodCategoryProps) => {
		const sortedItems = [...items].sort((a, b) => b.name.localeCompare(a.name));

		return (
			<div className="w-full max-w-2xl mx-auto p-4">
				<h3 className="text-4xl font-bold text-gray-800 mb-4 text-center 
						   border-4 rounded-lg bg-cyan-400 p-2
						   hover:text-red-500">
					{category}
				</h3>
				<ul className="text-2xl text-yellow-500 space-y-2">
					{sortedItems.map(item => (
						<li key={item.id}
							className="hover:text-red-500 cursor-pointer transition-colors">
							{item.name}: <b>{item.calories}</b>
						</li>
					))}
				</ul>
			</div>
		);
	};

	return (
		<>
			{fruits.length > 0 && <FoodCategory items={fruits} category="FRUITS" />}
			{vegetables.length > 0 && <FoodCategory items={vegetables} category="VEGETABLES" />}
		</>
	);
};

export default ListOfData;