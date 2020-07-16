import React from 'react'
import Todo from './Todo'
export default function TodoList({todos, handleDeleteTodo}) {

    return (
        <div>
            <Todo todos={todos} deleteTodo={handleDeleteTodo}/>
        </div>
    )
}
