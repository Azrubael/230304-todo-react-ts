import React from "react";
import { Todo } from "../types/Todo";

interface TodoItemProps extends Todo {
  children?: React.ReactNode,
  style?: React.CSSProperties,
}

const TodoItem = ({ id, title, completed, style={} }: TodoItemProps) => {
  return (
    <li style={{ color: 'red', backgroundColor: 'white', ...style }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
}

export default TodoItem;