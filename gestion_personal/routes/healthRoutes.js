import express from 'express';

import {
  createHealth,
  getHealth,
  getHealths,
  updateHealth,
  deleteHealth,
} from '../controllers/healthControllers.js';

const router = express.Router();

router.get('/healths', getHealths);
router.post('/new_health/', createHealth);
router.get('/health/:id', getHealth);
router.put('/update_health/:id', updateHealth);
router.delete('/delete_health/:id', deleteHealth);

export default router;