import React, { useEffect, useState } from 'react'

import NewTodoForm from './components/NewTodoForm'
import './App.css'
import TodoItem from './components/TodoItem'
import { Todo } from './types/Todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data: Todo[]) => { setTodos(data) })
  }, []) 

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoItem id="112" title="First Todo" completed={false}
        style={{ border: '1px solid white' }} />
    </div>
  )
}

export default App
