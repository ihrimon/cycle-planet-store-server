import express, { NextFunction, Request, Response } from 'express';
import { productControllers } from './product.controller';
import isValid from '../../middlewares/isValid';
import { upload } from '../../utils/multerConfig';
import { productValidationSchema } from './product.validation';
import isAuth from '../../middlewares/isAuth';

const router = express.Router();

router.post(
  '/add',
  upload.array('files', 5),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.data) {
        req.body = JSON.parse(req.body.data);
      }
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: 'Invalid JSON data!',
        error: error?.message,
      });
    }
  },
  isAuth('admin'),
  isValid(productValidationSchema.createProductValidationSchema),
  productControllers.addProduct
);
router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getSpecificProduct);
router.put(
  'update/:id',
  isAuth('admin'),
  isValid(productValidationSchema.updateProductValidationSchema),
  productControllers.updateProduct
);
router.delete('/:id', productControllers.deleteProduct);

export const productRoutes = router;
