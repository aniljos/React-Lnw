'use client';
import { fetchTodos } from "@/actions/fetchTodos";
import { JSX, useEffect, useState } from "react";

export default function TodoPage() {

    const [todos, setTodos] = useState<JSX.Element>();
    useEffect(()=> {

        fetchTodos()
            .then((content) => {
                setTodos(content);
            })

    }, [])
    return (
        <div>
            <h3>Todos</h3>
            <div>
                {todos}
            </div>
        </div>
    )
}