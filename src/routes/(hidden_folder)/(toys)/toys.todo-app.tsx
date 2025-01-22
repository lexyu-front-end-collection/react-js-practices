import { createFileRoute } from '@tanstack/react-router'
import TodoApp from '@/components/toys/todos/TodoApp'

export const Route = createFileRoute('/(hidden_folder)/(toys)/toys/todo-app')({
  component: TodoApp,
})
