import './todo-item.css'
import { useState } from 'react';

export function TodoItem({todo, checkItem, removeItem }) {

  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const changeTitle = () => {
    if (isEditing) {
      todo.title = title;
      setEditing(false);
    } else {
      setEditing(true);
    }
  }

  return (
    <div className="todo__item">
      <input type="checkbox" onChange={checkItem} />

      { isEditing ? <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> : todo.title }
      <button onClick={removeItem}>X</button>
      <button onClick={changeTitle}>Edit</button>
    </div>
  )
}
