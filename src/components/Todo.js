import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

export default function Todo({ todos, deleteATodo }) {

    const handleDeleteTodo = (e) =>{
        const id = e.target.id;
        console.log(id)
        deleteATodo(id);
    }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Container key={todo.id}>
            <Row>
              <Col>{todo.name}</Col>
              <Col xs={3}>
                <Button id={todo.id} onClick={handleDeleteTodo}  variant="outline-danger">delete</Button>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}
