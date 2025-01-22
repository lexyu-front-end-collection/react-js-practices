import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseTransition from '@/components/demos/hooks/usetransition/UseTransition'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/usetransition',
)({
  component: UseTransition,
})
