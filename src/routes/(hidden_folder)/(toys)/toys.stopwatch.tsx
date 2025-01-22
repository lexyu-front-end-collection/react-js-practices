import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import Stopwatch from '@/components/toys/stopwatch/Stopwatch'

export const Route = createFileRoute('/(hidden_folder)/(toys)/toys/stopwatch')({
  component: Stopwatch,
})
