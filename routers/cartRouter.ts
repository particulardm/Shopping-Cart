import { Router } from 'express';
import { getCart } from '../controllers/cartController';

const router = Router();

router.get('/', getCart);

export default router;