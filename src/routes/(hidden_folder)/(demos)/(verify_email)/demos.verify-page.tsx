import VerifyEmailBtn from '@/components/demos/verify_email/VerifyPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(hidden_folder)/(demos)/(verify_email)/demos/verify-page',
)({
  component: VerifyEmailBtn,
})

