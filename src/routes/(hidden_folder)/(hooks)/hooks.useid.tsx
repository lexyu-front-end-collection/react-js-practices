import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import UseId from '@/components/demos/hooks/useid/UseId'

export const Route = createFileRoute('/(hidden_folder)/(hooks)/hooks/useid')({
  component: UseId,
})
