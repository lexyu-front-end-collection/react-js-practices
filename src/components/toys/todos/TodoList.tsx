import { Todo } from "@/types/todo"
import TodoItem from "@/components/toys/todos/TodoItem"

interface TodoListProps {
    todos: Todo[]
    onCompletedChange: (id: number, completed: boolean) => void
    onDelete: (id: number) => void
}

export default function TodoList({ todos, onCompletedChange, onDelete }: TodoListProps) {
    console.log("TodoList Rendered");

    const sortedTodos = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id
        }
        return a.completed ? 1 : -1
    })

    return (
        <>
            <div className="space-y-2 font-bold">
                {sortedTodos.map((todo: Todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onCompletedChange={onCompletedChange}
                        onDelete={onDelete} />
                ))}
            </div>
            {todos.length === 0 && <p className="text-sm font-bold text-center text-gray-500">No Todos</p>}
        </>
    )
}