import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      <button>
        {todo.completed === true ? 'completed' : 'mark as completed'}
      </button>
    </div>
  );
};

export default Todo;
