import catchAsync from '../../utils/catchAsync';
import CustomError from '../../utils/CustomError';
import { reviewServices } from './shoppingCart.service';

const addCart = catchAsync(async (req, res) => {
  const result = await reviewServices.addCartIntoDB(req.body);

  res.status(201).json({
    success: true,
    message: 'Shopping cart added successfully!',
    data: result,
  });
});

const getAllCarts = catchAsync(async (req, res) => {
  const result = await reviewServices.getAllCartFromDB();

  res.status(200).json({
    success: true,
    message: 'Shopping carts retrieved successfully!',
    data: result,
  });
});

const updateCart = catchAsync(async (req, res) => {
  const result = await reviewServices.updateCartIntoDB(req.params.id, req.body);

  if (!result) throw new CustomError(404, 'Shopping cart not found!');

  res.status(200).json({
    success: true,
    message: 'Shopping cart updated successfully!',
    data: result,
  });
});

const deleteCart = catchAsync(async (req, res) => {
  const result = await reviewServices.deleteCartFromDB(req.params.id);

  if (!result) throw new CustomError(404, 'Shopping cart not found!');

  res.status(200).json({
    success: true,
    message: 'Shopping cart deleted successfully!',
    data: result,
  });
});

export const shoppingCartControllers = {
  getAllCarts,
  addCart,
  updateCart,
  deleteCart,
};
