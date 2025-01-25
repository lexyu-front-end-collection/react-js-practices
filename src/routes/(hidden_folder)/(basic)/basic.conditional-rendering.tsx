import { createFileRoute } from '@tanstack/react-router'
import ConditionalRendering from '@/components/basic/ConditionalRendering'

export const Route = createFileRoute(
  '/(hidden_folder)/(basic)/basic/conditional-rendering',
)({
  component: ConditionalRendering,
})

