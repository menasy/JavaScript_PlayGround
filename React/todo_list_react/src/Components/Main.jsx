import React from 'react';

function Main({ todos, toggleTodo, toggleAll }) {
  return (
    <section className="main" hidden={todos.length === 0}>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
        checked={todos.every(todo => todo.done)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? 'completed' : ''}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(index)}
              />
              <label>{todo.text}</label>
              <button className="destroy" onClick={() => toggleTodo(index)}></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;