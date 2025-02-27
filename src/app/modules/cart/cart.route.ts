import express from 'express';
import { shoppingCartControllers } from './cart.controller';
import isAuth from '../../middlewares/isAuth';
import isValid from '../../middlewares/isValid';
import { shoppingCartValidation } from './cart.validation';

const router = express.Router();

router.post(
  '/add',
  isAuth('customer'),
  isValid(shoppingCartValidation.addShoppingCartValidationSchema),
  shoppingCartControllers.addCart
);
router.get('/', shoppingCartControllers.getAllCarts);
router.put(
  '/update/:id',
  isAuth('customer'),
  isValid(shoppingCartValidation.updateShoppingCartValidationSchema),
  shoppingCartControllers.updateCart
);

router.delete(
  '/:id',
  isAuth('customer'),
  shoppingCartControllers.deleteCart
);

export const shoppingCartRoutes = router;
