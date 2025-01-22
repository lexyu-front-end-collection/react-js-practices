import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseInsertionEffect from '@/components/demos/hooks/useinsertioneffect/UseInsertionEffect'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/useinsertioneffect',
)({
  component: UseInsertionEffect,
})
