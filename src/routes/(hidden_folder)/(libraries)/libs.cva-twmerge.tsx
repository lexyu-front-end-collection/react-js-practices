import { createFileRoute } from '@tanstack/react-router'
import CVA from '@/components/libraries/cva/CVA'

export const Route = createFileRoute(
	'/(hidden_folder)/(libraries)/libs/cva-twmerge',
)({
	component: CVA,
})
