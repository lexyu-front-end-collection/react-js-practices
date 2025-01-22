import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(hidden_folder)/(basic)/basic/props-children',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(hidden_folder)/(basic)/basic/props-children"!</div>
}
