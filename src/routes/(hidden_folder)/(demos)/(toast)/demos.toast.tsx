import ToastEditor from '@/components/demos/copywriting/ToastUI'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
    '/(hidden_folder)/(demos)/(toast)/demos/toast',
)({
    component: ToastEditor,
})
