import { useState } from 'react';

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      {
        title,
        description,
      },
    ]);
    fetch('http://localhost:3500/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title, description: description }),
    })
     
  };
  return (
    <div>
      <input
        type='text'
        placeholder='title'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addTodo}>Add todo</button>
    </div>
  );
};

export default CreateTodo;
