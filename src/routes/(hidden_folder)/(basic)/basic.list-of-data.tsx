import { createFileRoute } from '@tanstack/react-router'
import ListOfData from '@/components/basic/ListOfData'

export const Route = createFileRoute(
  '/(hidden_folder)/(basic)/basic/list-of-data',
)({
  component: ListOfData,
})
