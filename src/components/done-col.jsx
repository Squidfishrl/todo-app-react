import './todo-item/todo-item.css'
import {TodoItem} from './todo-item/todo-item.jsx'

export function DoneColumn({checkItem, removeItem, todos}) {
  return (
    <div className="done__col">
      <h1>DONE:</h1> 
      {
        todos.map((todo, index) => {
          if (!todo.isDone) {
            return  () => {}
          }

          return (
            <TodoItem 
              key={index} 
              itemIndex={index} 
              removeItem={removeItem(index)} 
              todo={todo} 
              checkItem={checkItem(index)}
            />
          );
        })
      }
      
    </div>
  )
}
