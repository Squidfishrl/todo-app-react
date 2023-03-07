import './App.css';
import { useState } from 'react';
import { FormCreator } from './components/todo-creator';
import { TodoColumn } from './components/todo-col'
import { DoneColumn } from './components/done-col'
import json from './todos.json';

function App() {
  let [todos, addTodos] = useState(json);


  const addTodo = (title) => {
    addTodos([...todos, { title, isDone: false }])
  }

  const removeTodo = (index) => {
    return () => {
      addTodos(todos.filter((todo, idx) => index !== idx));
    }
  };

  const checkTodo = (index) => {
    return () => {
      addTodos(todos.map((todo, idx) => {
        if (idx === index) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      }));
    }
  }

  return (
    <div className="App">
      <h1>Todo app</h1>
      <hr />

      <FormCreator 
        createTodo={addTodo}
      />

      <div className="item__cols">
        <TodoColumn
          removeItem={removeTodo}
          checkItem={checkTodo}
          todos={todos}
        />

        <DoneColumn
          removeItem={removeTodo}
          checkItem={checkTodo}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
