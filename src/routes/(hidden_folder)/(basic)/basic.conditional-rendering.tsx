import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(hidden_folder)/(basic)/basic/conditional-rendering',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/(hidden_folder)/(basic)/basic/conditional-rendering"!</div>
  )
}
