import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './ListItem.module.css'
import { motion } from 'framer-motion'

const variants = {
    active: { opacity: 1, scale: 1, x: 0 },
    disabled: { opacity: 0.8, scale: 0.9, x: 0 },
}

function ListItem({ deleteTodo, text, id, completedFn, isCompleted }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, x: '-50%' }}
            animate={isCompleted ? 'disabled' : 'active'}
            variants={variants}
            exit={{ opacity: 0, scale: 0.5, x: '50%' }}
            className={
                isCompleted
                    ? `${styles.todo} ${styles.completedTodo}`
                    : styles.todo
            }
        >
            <span className={styles.todoIcon}>
                <RiTodoFill />
            </span>
            <p className={styles.todoText}>{text}</p>
            <span onClick={() => deleteTodo(id)} className={styles.deleteIcon}>
                <RiDeleteBin2Line />
            </span>
            <span onClick={() => completedFn(id)} className={styles.checkIcon}>
                <FaCheck />
            </span>
        </motion.div>
    )
}

export default ListItem
