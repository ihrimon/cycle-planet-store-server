import express from 'express';
import { customerRoutes } from '../modules/customer/customer.route';
import { productRoutes } from '../modules/product/product.route';
import { authRoutes } from '../modules/user/user.route';
import { reviewRoutes } from '../modules/review/review.route';
import { shoppingCartRoutes } from '../modules/cart/cart.route';
import { orderRoutes } from '../modules/order/order.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/customers',
    route: customerRoutes,
  },
  {
    path: '/products',
    route: productRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/carts',
    route: shoppingCartRoutes,
  },
  {
    path: '/orders',
    route: orderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
