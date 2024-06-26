import express from 'express';

import {
  createTask,
  getTask,
  getTasks,
  updateTask,
  deleteTask,
} from '../controllers/tasksControllers.js';

const router = express.Router();

router.get('/tasks', getTasks);
router.post('/new_task', createTask);
router.get('/task/:id', getTask);
router.put('/update_task/:id', updateTask);
router.delete('/delete_task/:id', deleteTask);

export default router;
