const express = require('express');
const cors = require('cors');
const { createTodo, updatedTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const PORT = 3500;

app.use(express.json());
app.use(cors());

// body{
//     title:String;
//     description:String;
// }

app.post('/todo', async (req, res) => {
  const todoPayload = req.body;
  console.log(todoPayload);
  const parsedPayload = createTodo.safeParse(todoPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'you sent the wrong input',
    });
    return;
  }

  //put it in mongodb
  await todo.create({
    title: todoPayload.title,
    description: todoPayload.description,
    completed: false,
  });
  res.json({
    msg: 'Todo created',
  });
});
app.get('/todos', async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});
app.put('/completed', async (req, res) => {
  const updatedPalyload = req.body;
  const parsedPayload = updatedTodo.safeParse(updatedPalyload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'you sent the wrong input',
    });
    return;
  }

  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: 'todo has maked complete',
  });
});

app.listen(PORT, () => {
  console.log(`Server is started at port no ${PORT}`);
});
