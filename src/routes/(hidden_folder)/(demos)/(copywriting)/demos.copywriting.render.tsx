import Copywriting from '@/components/demos/copywriting/Copywriting'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(hidden_folder)/(demos)/(copywriting)/demos/copywriting/render',
)({
  component: Copywriting,
})

