import { ChangeEvent, FC } from 'react'
import { Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
    onRemoveTodo: ({ id }: TodoId) => void
    onToggleCompleteTodo: ({
        id,
        completed
    }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: FC<Props> = ({
    id,
    title,
    completed,
    onRemoveTodo,
    onToggleCompleteTodo
}) => {
    const handleChangeCheckbox = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        onToggleCompleteTodo({
            id,
            completed: event.target.checked
        })
    }
    return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => onRemoveTodo({ id })}
            ></button>
        </div>
    )
}
