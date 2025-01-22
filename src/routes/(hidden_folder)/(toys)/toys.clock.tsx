import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import Clock from '@/components/toys/clock/Clock'

export const Route = createFileRoute('/(hidden_folder)/(toys)/toys/clock')({
  component: Clock,
})
