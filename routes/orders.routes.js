import express from 'express';
import { createOrder, getOrders, deleteOrder } from '../controllers/orders.controllers.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);
router.delete('/:orderId', deleteOrder);

export default router;