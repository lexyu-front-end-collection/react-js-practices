import { createFileRoute } from '@tanstack/react-router'
import Throttle from '@/components/demos/custom_hooks/throttle/Throttle'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/usethrottle',
)({
  component: Throttle,
})
