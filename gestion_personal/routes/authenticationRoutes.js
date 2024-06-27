import express from 'express';

import {
  createAuthentication,
  getAuthentication,
  getAuthentications,
  updateAuthentication,
  deleteAuthentication,
} from '../controllers/authenticationControllers.js';

const router = express.Router();

router.get('/authentications', getAuthentications);
router.post('/new_authentication/', createAuthentication);
router.get('/authentication/:id', getAuthentication);
router.put('/update_authentication/:id', updateAuthentication);
router.delete('/delete_authentication/:id', deleteAuthentication);

export default router;