import { CartSlice } from "@/store/cart-slice";
import { UserSlice } from "@/store/user-slice";

export type Counter = {
	count: number;
	increase: () => void;
	decrease: () => void;
};

// ---------------------------------------------------->

// Product
export type Product = {
	id: string;
	title: string;
	price: number;
}

// Cart
export type Cart = Product & { quantity: number };


// Slices
export type StoreSlices = UserSlice & CartSlice