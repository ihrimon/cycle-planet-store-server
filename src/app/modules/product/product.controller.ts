import catchAsync from '../../utils/catchAsync';
import { productServices } from './product.service';

// add product controller
const addProduct = catchAsync(async (req, res) => {
  const files = Array.isArray(req.files) ? req.files : [];
  const result = await productServices.addProductIntoDB(files, req.body);

  res.status(201).json({
    success: true,
    message: 'New product added successfully!',
    data: result,
  });
});

// fetch all products
const getAllProducts = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductsFromDB(req.body);

  res.status(200).json({
    status: true,
    message: 'Products retrived successfully!',
    data: result,
  });
});

// fetch single product
const getSpecificProduct = catchAsync(async (req, res) => {
  const result = await productServices.getSpecificProductFromDB(req.params.id);

  res.status(200).json({
    status: true,
    message: 'Product retrived successfully!',
    data: result,
  });
});

// update a product
const updateProduct = catchAsync(async (req, res) => {
  const result = await productServices.updatedProductIntoDB(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    message: 'Product updated succesfully!',
    data: result,
  });
});

// delete a product
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
