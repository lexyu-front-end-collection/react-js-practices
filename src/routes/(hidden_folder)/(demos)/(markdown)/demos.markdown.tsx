import EditableElementMarkdownDemo from '@/components/demos/markdown/EditableElementMarkdownDemo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
    '/(hidden_folder)/(demos)/(markdown)/demos/markdown',
)({
    component: EditableElementMarkdownDemo,
})

