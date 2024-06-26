import express from 'express';

import {
  createIntegration,
  getIntegration,
  getIntegrationes,
  updateIntegration,
  deleteIntegration,
} from '../controllers/integrationControllers.js';

const router = express.Router();

router.get('/integrations', getIntegrationes);
router.post('/new_integration', createIntegration);
router.get('/integration/:id', getIntegration);
router.put('/update_integration/:id', updateIntegration);
router.delete('/delete_integration/:id', deleteIntegration);

export default router;
