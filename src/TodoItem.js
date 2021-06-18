import React from 'react'
import { ListGroupItem, Card, Button } from 'react-bootstrap'

const TodoItem = ({ text, isCompleted, index, deleteTodoItem, markTodoItemComplete }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title style={{ textDecoration: isCompleted ? "line-through": "none"}}>
                    {text}
                </Card.Title>
                <Button variant="success" onClick={() => markTodoItemComplete(index)}>Done</Button>{' '}
                <Button variant="warning" onClick={() => deleteTodoItem(index)}>Delete</Button>
            </Card.Body>
        </Card>
        
    )
}

export default TodoItem
