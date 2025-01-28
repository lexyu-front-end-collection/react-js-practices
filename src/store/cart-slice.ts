import { Cart, Product, StoreSlices } from "@/types/zustand"
import { StateCreator } from "zustand"

type CartState = {
	cartProducts: Cart[]
	total: number
}

type CartActions = {
	add: (product: Product) => void;
	remove: (productId: string) => void;
	incrQty: (productId: string) => void;
	decrQty: (productId: string) => void;
	getProductById: (productId: string) => Cart | undefined;
	setTotal: (total: number) => void;
	reset: () => void;
}

export type CartSlice = CartState & CartActions

const initState: CartState = {
	cartProducts: [],
	total: 0
}

export const createCartSlice: StateCreator<
	StoreSlices,
	[
		['zustand/immer', never]
	],
	[],
	CartSlice
> = (set, get) => ({
	...initState,
	add: (product) => {
		set((state) => {
			state.cartProducts.push({
				...product,
				quantity: 1
			})
		})
	},
	remove: (productId) => {
		set((state) => {
			state.cartProducts = state.cartProducts.filter((product) => product.id !== productId)
		})
	},
	incrQty: (productId) =>
		set((state) => {
			const foundProduct = state.cartProducts.find((product) => product.id === productId)
			if (foundProduct) foundProduct.quantity += 1
		}
		),
	decrQty: (productId) => set(
		(state) => {
			const foundProductIdx = state.cartProducts.findIndex((product) => product.id === productId)
			if (foundProductIdx !== -1) {
				if (state.cartProducts[foundProductIdx].quantity === 1) {
					state.cartProducts.splice(foundProductIdx, 1)
				} else {
					state.cartProducts[foundProductIdx].quantity -= 1
				}
			}
		}
	),
	getProductById: (productId) => get().cartProducts.find((product) => product.id === productId),
	setTotal: (total) => {
		set((state) => {
			state.total = total;
		})
	},
	reset: () => set(() => initState)
})
