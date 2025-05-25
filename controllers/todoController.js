const TodoExtreme = require('../models/Todo');

exports.getTodos = async (req, res) => {
  try {
    const todos = await TodoExtreme.findAll();

   res.render('todos/index', { todos });
   
    return { todos }
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
};

exports.getAddTodo = (req, res) => {
  res.render('todos/new');
};

exports.postAddTodo = async (req, res) => {
  try {
    await TodoExtreme.create(req.body.title);
    res.redirect('/todos');
  } catch (err) {
    console.error(err);
    res.render('todos/new');
  }
};

exports.getEditTodo = async (req, res) => {
  try {
    const todo = await TodoExtreme.findById(req.params.id);
    res.render('todos/edit', { todo });
  } catch (err) {
    console.error(err);
    res.redirect('/todos');
  }
};

exports.postEditTodo = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      throw new Error('Invalid ID format');
    }

    const { title, completed } = req.body;
    await TodoExtreme.update(id, title, completed === 'on');
    res.redirect('/todos');
  } catch (err) {
    console.error(err);
    res.redirect('/todos');
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await TodoExtreme.delete(req.params.id);
    res.redirect('/todos');
  } catch (err) {
    console.error(err);
    res.redirect('/todos');
  }
};