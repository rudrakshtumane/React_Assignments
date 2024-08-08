import React from 'react';

const TodoInput = ({ value, onInputChange, onAddTodo }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  const handleAddClick = () => {
    onAddTodo();
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange}  className="input input-bordered w-full max-w-xs" />
      <button className='btn btn-success m-2' onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default TodoInput;
