import React from 'react';

const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button className='btn btn-error m-2' onClick={() => onRemoveTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
