import express from 'express';
import { userControllers } from './customer.controller';
import isValid from '../../middlewares/isValid';
import { customerValidation } from './customer.validation';
import isAuth from '../../middlewares/isAuth';

const router = express.Router();

router.get('/', isAuth('admin'), userControllers.getAllCustomers);

router.get(
  '/:id',
  isAuth('admin', 'customer'),
  userControllers.getSpecificUser
);

router.put(
  '/:id',
  isAuth('admin', 'customer'),
  isValid(customerValidation.updateCustomerValidationSchema),
  userControllers.updateCustomer
);

router.delete(
  '/:id',
  isAuth('admin', 'customer'),
  userControllers.deleteCustomer
);

router.get(
  '/me',
  isAuth('admin', 'customer'),
  userControllers.getAuthenticatedCustomer
);

export const customerRoutes = router;
