import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todoList, setTodoList] = useState([
    {
      text: 'Meditate',
      isCompleted: false,
    },
    {
      text: 'Make breakfast',
      isCompleted: false,
    }
  ])

  const addTodoItem = text => {
    setTodoList([
      ...todoList,
      {
        text,
        isCompleted: false,
      }
    ])
  }

  const markTodoItemComplete = index => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].isCompleted = true;
    setTodoList(updatedTodoList);
  }

  const deleteTodoItem = index => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo Application</h1>
        <TodoForm addTodoItem={addTodoItem} />
        <TodoList
          todoList={todoList}
          markTodoItemComplete={markTodoItemComplete}
          deleteTodoItem={deleteTodoItem}
        />
      </div>
    </div>
  );
}

export default App;
