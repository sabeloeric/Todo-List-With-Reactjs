import React from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export default function App() {
    return (
        <div> 
            <Header />
            <TodoList />
            <AddTodo />
        </div>
    )
}
