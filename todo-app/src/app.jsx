import React from 'react'
import Todos from './components/Todos';  // Lalukan Import

function App() {
   return (
    <div>
      <h1>My Todo List</h1>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
      <Todos /> {/* Menampilkan component Todos */}
    </div>
  )
}