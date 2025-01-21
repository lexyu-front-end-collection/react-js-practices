import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseIntervalDemo from '@/components/demos/custom_hooks/interval/UseInterval'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/useinterval',
)({
  component: UseIntervalDemo,
})
