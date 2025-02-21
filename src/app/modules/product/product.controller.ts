import catchAsync from '../../utils/catchAsync';
import { productServices } from './product.service';

const addProduct = catchAsync(async (req, res) => {
   console.log('🛠️ Received Files:', req.files); // ✅ Debugging
   console.log('📦 Received Body:', req.body);
  const result = await productServices.addProductIntoDB(req.files, req.body);

  res.status(201).json({
    success: true,
    message: 'New product added successfully!',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductsFromDB(req.body);

  res.status(200).json({
    status: true,
    data: result,
  });
});

const getSpecificProduct = catchAsync(async (req, res) => {
  const result = await productServices.getSpecificProductFromDB(req.params.id);

  res.status(200).json({
    status: true,
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const result = await productServices.updatedProductIntoDB(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: 'Product updated succesfully!',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const result = await productServices.deletedProductFromDB(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Product deleted succesfully!',
    data: result,
  });
});

export const productControllers = {
  addProduct,
  getAllProducts,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
};
