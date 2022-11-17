import { useEffect, useState } from 'react'
import List from '../List/List'
import Form from '../Form/Form'
import Actions from '../Actions/Actions'
import { v4 as uuidv4 } from 'uuid'

function Todo() {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos-store')) || []
    })

    useEffect(() => {
        localStorage.setItem('todos-store', JSON.stringify(todos))
    }, [todos])

    const addTodoHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4(),
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodoHandler = (id) => {
        setTodos(
            (todos) =>
                (todos = todos.map((todo) =>
                    todo.id === id
                        ? { ...todo, isCompleted: !todo.isCompleted }
                        : { ...todo }
                ))
        )
    }

    const deleteTodosHandler = () => {
        setTodos([])
    }

    const refreshTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    const totalTodosHandler = todos.filter((todo) => todo.isCompleted).length

    return (
        <>
            <Form addTodo={addTodoHandler} />

            {!todos.length ? (
                <h2>There no todos today</h2>
            ) : (
                <>
                    <Actions
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        deleteTodos={deleteTodosHandler}
                        refreshTodos={refreshTodosHandler}
                        disabled={!!totalTodosHandler}
                    />
                    <List
                        todos={todos}
                        deleteTodo={deleteTodoHandler}
                        completedFn={toggleTodoHandler}
                    />
                </>
            )}
            {!!totalTodosHandler && (
                <h2>
                    {`Completed: ${totalTodosHandler} task${
                        totalTodosHandler > 1 ? 's' : ''
                    }`}
                </h2>
            )}
        </>
    )
}

export default Todo
