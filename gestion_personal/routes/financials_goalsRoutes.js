import express from 'express';

import {
  createFinancialsGoal,
  getFinancialsGoal,
  getFinancialsGoals,
  updateFinancialsGoal,
  deleteFinancialsGoal,
} from '../controllers/financials_goalsControllers.js';

const router = express.Router();

router.get('/financials_goals', getFinancialsGoals);
router.post('/new_financials_goal', createFinancialsGoal);
router.get('/financials_goal/:id', getFinancialsGoal);
router.put('/update_financials_goal/:id', updateFinancialsGoal);
router.delete('/delete_financials_goal/:id', deleteFinancialsGoal);

export default router;
