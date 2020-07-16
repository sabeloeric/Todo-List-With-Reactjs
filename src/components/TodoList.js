import React from 'react'
import Todo from './Todo'
export default function TodoList({todos, deleteATodo}) {

    return (
        <div>
            <Todo todos={todos} deleteATodo={deleteATodo}/>
        </div>
    )
}
