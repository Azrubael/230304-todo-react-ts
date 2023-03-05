import { useEffect, useState } from 'react'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'
import { Todo } from './types/Todo'
import './styles/App.css'
import './styles/mystyles.css'


function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const removeTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .then(res => res.json())
      .then((data: Todo[]) => { setTodos(data) })
  }, [])

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <NewTodoForm handleClick={addTodo} />
      <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default App
