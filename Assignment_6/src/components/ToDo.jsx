import  { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (

    <>
 <div className="container mx-auto p-4 max-w-md  mt-24">
<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h1 className="card-title">TO-DO</h1>
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
    <button className='btn btn-outline btn-accent' onClick={addTodo}>Add Todo</button>

    <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className='btn btn-outline btn-error' onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>

  </div>
</div>  




{/* 
    <div className='card bg-base-100 w-96 shadow-xl'> 
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div> */}
    </div>
    </>
  );
  
};

export default TodoApp;
