import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseDeferredValue from '@/components/demos/hooks/usedeferredvalue/UseDeferredValue'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/usedeferredvalue',
)({
  component: UseDeferredValue,
})

