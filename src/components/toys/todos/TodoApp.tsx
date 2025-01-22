import AddTodoForm from "@/components/toys/todos/AddTodoForm"
import TodoList from "@/components/toys/todos/TodoList"
import TodoSummary from "@/components/toys/todos/TodoSummary"
import useTodos from "@/hooks/custom/useTodos"

function TodoApp() {
    const {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodos
    } = useTodos();

    return (
        <main className="overflow-y-auto py-10 space-y-5 h-screen">
            <h1 className="text-3xl font-bold text-center">TODOs</h1>
            <div className="p-5 mx-auto space-y-6 max-w-lg rounded-md bg-slate-100">
                <AddTodoForm onSubmit={addTodo}></AddTodoForm>
                <TodoList
                    todos={todos}
                    onCompletedChange={setTodoCompleted}
                    onDelete={deleteTodo}></TodoList>
                <TodoSummary
                    todos={todos}
                    deleteAllCompleted={deleteAllCompletedTodos}></TodoSummary>
            </div>
        </main>
    )
}

export default TodoApp