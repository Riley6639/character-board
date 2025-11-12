import express from 'express';
import { characterRouter } from './characterRoutes.js';

const router = express.Router();

router.use('/characters', characterRouter);

export default router;