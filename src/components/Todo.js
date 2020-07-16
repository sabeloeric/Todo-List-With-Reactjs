import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

export default function Todo({ todos, handleDeleteTodo }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Container key={todo.id}>
            <Row>
              <Col>{todo.name}</Col>
              <Col xs={3}>
                <Button  variant="outline-danger">delete</Button>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}
