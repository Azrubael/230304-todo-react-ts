import {Todo} from '../types/Todo'
import TodoItem from './TodoItem'

interface TodoListProps {
  list: Todo[],
  toggleTodo: (id: Todo['id']) => void,
  removeTodo: (id: Todo['id']) => void,
}

const TodoList = ({ list, removeTodo, toggleTodo }: TodoListProps) => {
  return (
    <ul className="todoList">
      {list.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList