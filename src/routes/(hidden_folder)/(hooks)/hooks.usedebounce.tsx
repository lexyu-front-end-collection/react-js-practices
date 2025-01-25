import { createFileRoute } from '@tanstack/react-router'
import Debounce from '@/components/demos/custom_hooks/debounce/Debounce'

export const Route = createFileRoute(
  '/(hidden_folder)/(hooks)/hooks/usedebounce',
)({
  component: Debounce,
  // errorComponent: () => <p className="text-red-500 text-2xl">Error</p>,
})
