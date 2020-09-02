import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);

    //console.log(todos);
  };

  const completetodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodos = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodas = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What's the plan for Today?</h1>
      <TodoForm onSubmit={addTodos} />
      <Todos
        todos={todos}
        completetodo={completetodo}
        removeTodos={removeTodos}
        updateTodas={updateTodas}
      />
    </div>
  );
}

export default TodoList;
