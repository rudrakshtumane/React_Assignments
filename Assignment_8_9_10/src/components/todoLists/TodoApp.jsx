import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();  // Prevent form submission
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className="card bg-black w-full max-w-sm shrink-0 shadow-2xl ml-[600px] m-5">
      <form className="card-body" onSubmit={handleAddTodo}>
        <h1 className='text-white text-2xl'>Todo List</h1>
        <TodoInput value={inputValue} onInputChange={handleInputChange} />
       
        <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} />
      </form>
    </div>
  );
};

export default TodoApp;
