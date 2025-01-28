import { Counter } from '@/types/zustand';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

/**
 * Zustand store for managing a counter with persistent state.
 * 
 * This store provides:
 * - `count`: the current count value.
 * - `increase`: function to increment the count.
 * - `decrease`: function to decrement the count.
 * 
 * The state is persisted with the key "counter-storage".
 */
const useStore = create<Counter>()(
	persist(
		immer(
			(set) => ({
				count: 0,
				increase: () => set((state) => { state.count += 1 }),
				decrease: () => set((state) => { state.count -= 1 }),
			}),
		),
		{
			name: "counter-storage",
		}
	)
);

function CounterComponent() {
	const { count, increase, decrease } = useStore();

	return (
		<div>
			<p className='text-2xl my-6 text-center'>{count}</p>
			<div className="button-container flex justify-around">
				<button className="text-2xl" onClick={increase}>Increment</button>
				<button className="text-2xl" onClick={decrease}>Decrement</button>
			</div>
		</div>
	);
}

export default CounterComponent;