import { createFileRoute } from '@tanstack/react-router'
import Counter from '@/components/libraries/zustand/_1/Counter'
import ZustandDemo from '@/components/libraries/zustand/_2/ZustandDemo'
import TicTacToe from '@/components/libraries/zustand/_3/TicTacToe'

export const Route = createFileRoute(
	'/(hidden_folder)/(libraries)/libs/zustand',
)({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div>
			<Counter />
			<hr className='my-8' />
			<ZustandDemo />
			<hr className='my-8' />
			<TicTacToe />
		</div>
	)
}