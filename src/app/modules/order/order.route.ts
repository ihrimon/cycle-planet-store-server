import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

router.post('/create-payment-intent', orderControllers.createPaymentIntent);

router.post('/payment-details', orderControllers.addPaymentDetails);
router.get('/', orderControllers.getOrder);

export const orderRoutes = router;
