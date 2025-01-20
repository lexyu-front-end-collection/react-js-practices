import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/data_fetching/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/data_fetching/"!</div>
}
