import express from 'express';

import {
  createCategory,
  getCategory,
  getCategorys,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryControllers.js';

const router = express.Router();

router.get('/categories', getCategorys);
router.post('/new_category', createCategory);
router.get('/category/:id', getCategory);
router.put('/update_category/:id', updateCategory);
router.delete('/delete_category/:id', deleteCategory);

export default router;
