import { useEffect, useState } from 'react';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('hi from useeffect');
    fetch('http://localhost:3500/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      {todos.map((item, key) => (
        <Todo key={key} todo={item} />
      ))}
    </div>
  );
}

export default App;
