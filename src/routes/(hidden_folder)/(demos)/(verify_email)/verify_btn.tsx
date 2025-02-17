import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(hidden_folder)/(demos)/(verify_email)/verify_btn',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(hidden_folder)/(demos)/(verify_email)/verify_btn"!</div>
}
