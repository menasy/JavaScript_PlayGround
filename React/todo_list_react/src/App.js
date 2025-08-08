import React, { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  const toggleAll = () => {
    const allDone = todos.every(todo => todo.done);
    setTodos(todos.map(todo => ({ ...todo, done: !allDone })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  });

  return (
    <div className="todoapp">
      <Header addTodo={addTodo} />
      <Main todos={filteredTodos} toggleTodo={toggleTodo} toggleAll={toggleAll} />
      <Footer todos={todos} filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;