import React, { useState } from 'react';

function Header({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleAddTodo}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  );
}

export default Header;