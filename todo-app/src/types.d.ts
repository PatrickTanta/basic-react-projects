export interface Todo {
    id: number
    title: string
    completed: boolean
}

export type ListOfTodos = Todo[]

// pick id from Todo interface
export type TodoId = Pick<Todo, 'id'>
