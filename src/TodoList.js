import React from 'react'
import TodoItem from './TodoItem';
import { ListGroup } from "react-bootstrap";

const TodoList = ({ todoList, deleteTodoItem, markTodoItemComplete }) => {
    return (
        <ListGroup>
            {todoList.map((todoItem, index) => (
                <TodoItem 
                  text={todoItem.text} 
                  index={index}
                  isCompleted={todoItem.isCompleted}
                  deleteTodoItem={deleteTodoItem}
                  markTodoItemComplete={markTodoItemComplete}
                />
            ))}
        </ListGroup>
    )
}

export default TodoList
