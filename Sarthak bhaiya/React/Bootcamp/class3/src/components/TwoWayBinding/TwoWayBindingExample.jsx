import React, { useState } from 'react';

function TodoList() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value); // Update the input field value
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (text.trim()) {
      setTodos([...todos, text]); // Add the new task to the todos array
      setText(''); // Clear the input field
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove the task at the specified index
  };

  return (
    <div className='flex w-screen h-screen justify-center items-center bg-gray-100'>
      <div className='flex flex-col gap-5 w-full max-w-md p-5 bg-white shadow-md rounded-md'>
        <h1 className='text-2xl font-bold text-center'>To-Do List</h1>
        <form className='flex gap-3' onSubmit={handleAddTodo}>
          <input
            className='flex-grow border border-sky-300 outline-none px-3 py-2 rounded-xl'
            type="text"
            value={text}
            placeholder="Add a new task"
            onChange={handleChange}
          />
          <button
            type="submit"
            className='px-5 py-2 bg-sky-500 text-white rounded-xl hover:bg-sky-600'
          >
            Add
          </button>
        </form>
        <ul className='space-y-3'>
          {todos.map((todo, index) => (
            <li
              key={index}
              className='flex justify-between items-center px-3 py-2 bg-gray-200 rounded-md'
            >
              <span>{todo}</span>
              <button
                className='px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600'
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
