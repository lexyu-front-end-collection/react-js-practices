import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import WithoutDnDkit from '@/components/libraries/dnd/_1/WithoutDnDkit'
import WithDnDkit from '@/components/libraries/dnd/_2/WithDnDkit'

export const Route = createFileRoute('/(hidden_folder)/(libraries)/libs/dnd')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<WithoutDnDkit />
			<hr className="my-8" />
			<WithDnDkit />
		</>
	)
}
