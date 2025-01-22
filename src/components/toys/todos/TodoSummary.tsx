import { Todo } from "@/types/todo"

interface TodoSummaryProps {
    todos: Todo[],
    deleteAllCompleted: () => void
}

export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
    const completed = todos.filter(todo => todo.completed);
    return (
        <div className="space-y-2 text-center text-green-500 font-bold">
            <p className="text-sm font-medium">
                {completed.length} / {todos.length} todos completed
            </p>
            {completed.length > 0 &&
                (
                    <button
                        onClick={deleteAllCompleted}
                        className="text-sm font-medium text-red-500 hover:underline">
                        Delete All Completed
                    </button>
                )
            }
        </div>
    )
}