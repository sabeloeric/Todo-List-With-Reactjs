import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Todo ({todos}){
    return (
        <div>
          {todos.map((todo)=>{
              return <ListGroup key={todo.id} > 
                <ListGroup.Item variant="primary">{todo.title}</ListGroup.Item> 
              </ListGroup>
          })}
        </div>
    )
}

