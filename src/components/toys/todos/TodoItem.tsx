import { Trash2 } from "lucide-react";
import { Todo } from "@/types/todo";

interface TodoItemProps {
    todo: Todo
    onCompletedChange: (id: number, completed: boolean) => void
    onDelete: (id: number) => void
}

export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {
    console.log("TodoItem Rendered");

    return (
        <div className="flex gap-2 items-center">
            <label key={todo.id} className="flex gap-7 items-center p-2 bg-white rounded-md border border-gray-400 hover:bg-slate-50 grow">
                <input type="checkbox" className={"scale-125"} checked={todo.completed} onChange={(e) => onCompletedChange(todo.id, e.target.checked)} />
                <span className={todo.completed ? "line-through text-gray-400" : "text-black"}>
                    {/* {todo.id} - */}
                    {todo.title}
                </span>
            </label>
            <button onClick={() => onDelete(todo.id)}>
                <Trash2 size={20} className="text-gray-500"></Trash2>
            </button>
        </div>
    )
}