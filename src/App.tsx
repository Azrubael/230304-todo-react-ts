import React, { useState } from 'react'

import NewTodoForm from './components/NewTodoForm'
import './App.css'
import TodoItem from './components/TodoItem'

type ITodo = {
  id: string,
  title: string,
  completed: boolean,
}

function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const addTodo = () => {
    setTodos([...todos, text])
    setText('')
  }

  return (
    <div className="App">
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo} />
      <TodoItem id="112" title="First Todo" completed={false}
        style={{ border: '1px solid white' }} />
    </div>
  )
}

export default App
