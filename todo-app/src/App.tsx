import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import type { Todo as TodoType, TodoId } from './types'

const mockTodos = [
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 2,
        title: `todo ${i + 2}`,
        completed: false
    }))
]

const App = (): JSX.Element => {
    const [todos, setTodos] = useState(mockTodos)

    const handleRemove = ({ id }: TodoId) => {
        const newTodos = todos.filter((todo: TodoType) => todo.id !== id)
        setTodos(newTodos)
    }

    const handleCompleted = ({
        id,
        completed
    }: Pick<TodoType, 'id' | 'completed'>): void => {
        const newTodos = todos.map((todo: TodoType) => {
            if (todo.id === id) {
                return { ...todo, completed }
            }
            return todo
        })
        setTodos(newTodos)
    }

    return (
        <div className="App">
            <h1>todoapp</h1>
            <Todos
                todos={todos}
                onRemoveTodo={handleRemove}
                onToggleCompleteTodo={handleCompleted}
            />
        </div>
    )
}

export default App
