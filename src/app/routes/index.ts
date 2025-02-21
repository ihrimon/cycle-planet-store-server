import express from 'express';
import { customerRoutes } from '../modules/customer/customer.route';
import { productRoutes } from '../modules/product/product.route';
import { authRoutes } from '../modules/user/user.route';
import { reviewRoutes } from '../modules/review/review.route';
import { shoppingCartRoutes } from '../modules/shoppingCart/shoppingCart.route';
import { orderRoutes } from '../modules/order/order.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/customer',
    route: customerRoutes,
  },
  {
    path: '/product',
    route: productRoutes,
  },
  {
    path: '/review',
    route: reviewRoutes,
  },
  {
    path: '/cart',
    route: shoppingCartRoutes,
  },
  {
    path: '/order',
    route: orderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
