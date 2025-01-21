import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseCallbackDemo from '@/components/demos/hooks/usecallback/UseCallback'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/usecallback',
)({
  component: UseCallbackDemo,
})
