'use server'

export async function fetchTodos() {

    console.log("Fetching todos from the server");
    const todos = [
        { id: 1, title: "Call Home", completed: false },
        { id: 2, title: "Register for course", completed: false },
    ]

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? "Yes" : "No"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}