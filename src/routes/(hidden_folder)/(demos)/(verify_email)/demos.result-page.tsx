import ResultPage from '@/components/demos/verify_email/ResultPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(hidden_folder)/(demos)/(verify_email)/demos/result-page',
)({
  component: ResultPage,
})
