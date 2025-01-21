import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import IntervalProblem from '@/components/demos/custom_hooks/interval/IntervalProblem'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/interval-problem-1',
)({
  component: IntervalProblem,
})
