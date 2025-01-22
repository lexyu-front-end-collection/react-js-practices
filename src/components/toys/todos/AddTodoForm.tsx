import { JSX, useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps): JSX.Element {
    const [inputTodo, setInputTodo] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(!inputTodo.trim()) return;
        onSubmit(inputTodo);
        setInputTodo("");
    }

    return (
        <div>
            <form className="flex" onSubmit={handleSubmit}>
                <input
                    value={inputTodo}
                    onChange={(e) => setInputTodo(e.target.value)}
                    placeholder="Add Your Todo..."
                    className="rounded-s-lg grow border border-gray-400 p-2" />
                <button
                    type="submit"
                    className="w-16 rounded-e-lg bg-black hover:bg-gray-700 text-white px-4">
                    Add
                </button>
            </form>
        </div>
    )
}