import { StoreSlices } from "@/types/zustand"
import { create } from "zustand"
import { devtools, persist, subscribeWithSelector } from "zustand/middleware"
import { immer } from 'zustand/middleware/immer'
import { createUserSlice } from "@/store/user-slice"
import { createCartSlice } from "@/store/cart-slice"

export const useStore = create<StoreSlices>()(
	devtools(
		persist(
			subscribeWithSelector(
				immer((...a) => ({
					...createUserSlice(...a),
					...createCartSlice(...a),
				}))
			),
			{
				name: 'local-storage',
			}
		)
	)
);