import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";


const TodoForm = ({ addTodoItem }) => {
    const [todoText, setTodoText] = useState();

    return (
        <Form inline>
            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                Todo Item
            </Form.Label>
            <Form.Control
                className="mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Todo Item"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />

            <Button className="mb-2" disabled={!todoText} onClick={() => addTodoItem(todoText)}>
                Submit
            </Button>
        </Form>
    )
}

export default TodoForm
