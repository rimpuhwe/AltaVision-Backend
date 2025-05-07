import express from 'express';
import { registerNewUser } from '../controllers/registerController.js';

const router = express.Router();
router.post('/', registerNewUser);
export default router;
