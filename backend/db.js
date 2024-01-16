// Todo{
//     title:string;
//     description:string;
//     completed:boolean
// }

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://karan:karanrawat@cluster0.dbqylsj.mongodb.net/basic-todo-app'
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo,
};
