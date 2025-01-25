import { createFileRoute } from '@tanstack/react-router'
import Portal from '@/components/basic/portal/Portal'

export const Route = createFileRoute('/(hidden_folder)/(basic)/basic/portal')({
  component: Portal,
})
