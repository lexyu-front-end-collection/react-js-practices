import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import IntervalProblem2 from '@/components/demos/custom_hooks/interval/IntervalProblem2'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/interval-problem-2',
)({
  component: IntervalProblem2,
})

