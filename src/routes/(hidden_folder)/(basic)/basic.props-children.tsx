import { createFileRoute } from '@tanstack/react-router'
import PropsChildren from '@/components/basic/props/PropsChildren'

export const Route = createFileRoute(
  '/(hidden_folder)/(basic)/basic/props-children',
)({
  component: PropsChildren,
})
