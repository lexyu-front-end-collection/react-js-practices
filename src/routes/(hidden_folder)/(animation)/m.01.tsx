import FM01 from '@/components/libraries/animation/motion/01_basic/m01'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(hidden_folder)/(animation)/fm/01')({
  component: FM01,
})