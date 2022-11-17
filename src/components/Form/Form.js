import { useState } from 'react'
import Button from '../Button/Button'

function Form({ addTodo }) {
    const [text, setText] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (text.length) {
            addTodo(text)
            setText('')
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                onChange={(e) => setText((text) => (text = e.target.value))}
                value={text}
                type="text"
                placeholder="Enter new todo"
            />
            <Button type="submit" title="Add new task">
                Add Task
            </Button>
        </form>
    )
}

export default Form
