const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.param('id', (req, res, next, id) => {
  if (!/^\d+$/.test(id)) return res.status(400).json({ error: 'Invalid ID' });
  next();
});

router.get('/', todoController.getTodos);
router.get('/new', todoController.getAddTodo);
router.post('/', todoController.postAddTodo);

router.get('/:id/edit', todoController.getEditTodo);
router.post('/:id', todoController.postEditTodo); 
router.delete('/:id', todoController.deleteTodo);

module.exports = router;