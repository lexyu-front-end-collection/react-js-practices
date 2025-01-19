import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import DataFetchOwnHandle from '@/components/demos/DataFetchingOwnHandle.jsx'

export const Route = createFileRoute('/data_fetching')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <DataFetchOwnHandle></DataFetchOwnHandle>
    </div>
  )
}
