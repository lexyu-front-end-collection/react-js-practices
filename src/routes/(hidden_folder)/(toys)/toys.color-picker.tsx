import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import ColorPicker from '@/components/toys/color-picker/ColorPicker'

export const Route = createFileRoute(
  '/(hidden_folder)/(toys)/toys/color-picker',
)({
  component: ColorPicker,
})
