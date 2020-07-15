import React from "react";
import { ListGroup, Button, Container, Col, Row } from "react-bootstrap";

export default function Todo({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Container key={todo.id}>
            <Row>
              <Col>{todo.title}</Col>
              <Col xs={3}>
                <Button variant="outline-danger">delete</Button>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}
