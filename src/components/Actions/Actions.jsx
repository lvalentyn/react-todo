import styles from './Actions.module.css'
import Button from '../Button/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

const Actions = ({ deleteTodos, refreshTodos, disabled }) => {
    return (
        <>
            <Button onClick={deleteTodos} title={'Delete All'}>
                <RiDeleteBin2Line color="#222" size="20" />
            </Button>

            <Button
                onClick={refreshTodos}
                title={'Refresh'}
                disabled={!disabled}
            >
                <RiRefreshLine color="#222" size="20" />
            </Button>
        </>
    )
}

export default Actions
