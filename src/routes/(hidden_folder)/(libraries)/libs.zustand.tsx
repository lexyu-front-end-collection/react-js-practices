import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
	'/(hidden_folder)/(libraries)/libs/zustand',
)({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/(hidden_folder)/(libraries)/libs/zustand"!</div>
}