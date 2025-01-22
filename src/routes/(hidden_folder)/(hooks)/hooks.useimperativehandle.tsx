import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseImperativeHandle from '@/components/demos/hooks/useimperativehandle/UseImperativeHandle'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/useimperativehandle',
)({
  component: UseImperativeHandle,
})
