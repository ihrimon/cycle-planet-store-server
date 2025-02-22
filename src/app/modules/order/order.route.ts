import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

router.post('/create-payment-intent', orderControllers.createPaymentIntent);

router.post('/payment-details', orderControllers.addPaymentDetails);
router.get('/', orderControllers.getAllOrders);
router.get('/:id', orderControllers.getSingleOrder);

export const orderRoutes = router;
