import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const LOCAL_STORAGE_KEY = "sdkLmckd99";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addATodo = (todo) =>{
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  }

  const deleteATodo =(id)=> {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      <Header numberTotalTodos={todos.length} />
      <TodoList todos={todos} deleteATodo={deleteATodo} />
      <AddTodo addATodo={addATodo} />
    </div>
  );
}
