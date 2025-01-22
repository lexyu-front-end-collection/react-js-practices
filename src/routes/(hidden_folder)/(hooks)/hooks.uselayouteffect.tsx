import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseLayoutEffect from '@/components/demos/hooks/uselayouteffect/UseLayoutEffect'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/uselayouteffect',
)({
  component: UseLayoutEffect,
})
