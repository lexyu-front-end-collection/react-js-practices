import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import ReactQueryDataFetchDemo from '@/components/demos/data_fetching/ReactQueryDataFetching'

export const Route = createFileRoute( '/(hidden_folder)/(data_fetching)/data_fetching/react-query')({
  component: ReactQueryDataFetchDemo,
})
