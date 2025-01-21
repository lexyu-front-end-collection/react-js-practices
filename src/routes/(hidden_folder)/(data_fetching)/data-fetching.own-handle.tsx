import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import DataFetchOwnHandle from '@/components/demos/data_fetching/DataFetchingOwnHandle'

export const Route = createFileRoute(
  '/(hidden_folder)/(data_fetching)/data-fetching/own-handle',
)({
  component: DataFetchOwnHandle,
})
