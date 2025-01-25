export interface FoodItem {
	id: number;
	name: string;
	calories: number;
}

export interface FoodCategoryProps {
	items: FoodItem[];
	category: string;
}
