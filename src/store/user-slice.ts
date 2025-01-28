import { StoreSlices } from "@/types/zustand";
import { StateCreator } from "zustand";

type UserState = {
	userName: string;
	fullName: string;
	age: number;
	address: string;
};

type UserActions = {
	setAddress: (address: string) => void;
	fetchUser: () => Promise<void>;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<
	StoreSlices,
	[
		['zustand/immer', never]
	],
	[],
	UserSlice
> = (set) => ({
	userName: "",
	fullName: "",
	age: 0,
	address: "",
	setAddress: (address) => {
		set((state) => {
			state.address = address;
		})
	},
	fetchUser: async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
		set({
			address: "123 Main St",
			fullName: "John Doe",
			age: 30,
			userName: "johndoe@test.com",
		})
	},
});
