import React from 'react'
import { TodoRowItem } from './TodoRowItem'
import { TodoModel } from "../models/TodoModel";

export const TodoTable: React.FC<{
    todos: TodoModel[],
    deleteTodo: Function
}> = (props) => {
    //props to obiekt w którym możemy przekazać mapę key - value.
    //W tym przypadku w mapie jest jedno entry: todos - lista todos z App.tsx.
    //aby wyciągnąć value należy zrobić props.key
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <TodoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    )
}
