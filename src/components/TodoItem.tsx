import React from "react"
import { Todo } from "../types/Todo"

interface TodoItemProps extends Todo {
  children?: React.ReactNode,
  style?: React.CSSProperties,
  toggleTodo: (id: Todo['id']) => void,
  removeTodo: (id: Todo['id']) => void,
}

const TodoItem = ({ id, title, completed, style = {}, toggleTodo, removeTodo }: TodoItemProps) => {
  return (
    <li style={{ color: 'red', backgroundColor: 'white', ...style }}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <span>{title}</span>
      <span onClick={()=> removeTodo(id)}>&times;</span>
    </li>
  )
}

export default TodoItem