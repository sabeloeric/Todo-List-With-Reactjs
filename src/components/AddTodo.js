import React, {useRef} from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import uuidv4 from 'uuid/v4'

export default function AddTodo({addATodo}) {

    const todoNameRef = useRef()

    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        console.log(name)
        if (name === '') return

        let todo = {
            id: uuidv4(),
            name: name
        }
        addATodo(todo)
        todoNameRef.current.value = null
      }


  return (
    <Container>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="Enter your task" ref={todoNameRef} type="text"></Form.Control>
          </Col>
          <Col>
            <Button onClick={handleAddTodo} >Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
}
