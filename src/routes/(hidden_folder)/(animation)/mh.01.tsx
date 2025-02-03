import M01 from '@/components/libraries/animation/motion/hooks/01_rotate/mh01'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(hidden_folder)/(animation)/m/01')({
  component: M01,
})
