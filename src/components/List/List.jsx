import ListItem from '../ListItem/ListItem'
import { AnimatePresence } from 'framer-motion'

function List({ todos, deleteTodo, completedFn }) {
    return (
        <>
            <AnimatePresence>
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        completedFn={completedFn}
                        deleteTodo={deleteTodo}
                        {...todo}
                    />
                ))}
            </AnimatePresence>
        </>
    )
}

export default List
