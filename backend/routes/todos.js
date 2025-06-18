const express = require('express');
const Todo = require('../models/TodoModel');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all todos for authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user._id })
      .sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new todo
router.post('/', auth, async (req, res) => {
  try {
    const { title, description } = req.body;
    
    const todo = new Todo({
      title,
      description,
      userId: req.user._id
    });

    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update todo
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    
    const todo = await Todo.findOne({ 
      _id: req.params.id, 
      userId: req.user._id 
    });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    // Update fields
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;

    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete todo
router.delete('/:id', auth, async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ 
      _id: req.params.id, 
      userId: req.user._id 
    });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
