import "./todo-creator.css";

export function FormCreator({ createTodo }) {

  const sumbitTheForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const todoTitle = form.todoTitle;
    createTodo(todoTitle.value);
  }

  return (
    <div className="todo-form">
      <label> Todo creator </label>
      <form onSubmit={sumbitTheForm}>
        <div>
          <input type="text" name="todoTitle" placeholder="Add todo" />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
