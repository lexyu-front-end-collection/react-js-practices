import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import BeforeUseCallback from '@/components/demos/hooks/usecallback/BeforeUseCallback'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/before-usecallback',
)({
  component: BeforeUseCallback,
})
