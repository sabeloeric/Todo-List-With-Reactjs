import React from "react";
import { Form, Col, Button, Container } from "react-bootstrap";

export default function AddTodo() {
  return (
    <Container>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="Enter your task"></Form.Control>
          </Col>
          <Col>
            <Button>Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
}
