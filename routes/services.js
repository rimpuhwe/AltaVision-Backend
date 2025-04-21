import express from 'express';
import { getServices, enrollService } from '../controllers/serviceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getServices);
router.post('/enroll', protect, enrollService);

export default router;
