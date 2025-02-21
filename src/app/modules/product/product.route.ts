import express, { NextFunction, Request, Response } from 'express';
import { productControllers } from './product.controller';
import isValid from '../../middlewares/isValid';
import { productValidation } from './product.validation';
import { upload } from '../../utils/multerConfig';

const router = express.Router();

router.post(
  '/add',
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.data) req.body = JSON.parse(req.body.data);

      console.log('✅ Parsed Form Data:', req.body);

      next();
    } catch (error: any) {
      // throw new CustomError(500, 'Invalid JSON data');
      res.status(400).json({
        success: false,
        message: 'Invalid JSON data!',
        error: error?.message,
      });
    }
  },
  isValid(productValidation.createProductValidationSchema),
  productControllers.addProduct
);
router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getSpecificProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);

export const productRoutes = router;
