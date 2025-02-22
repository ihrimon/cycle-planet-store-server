import catchAsync from '../../utils/catchAsync';
import { orderServices } from './order.service';

const createPaymentIntent = catchAsync(async (req, res) => {
  const { amount } = req.body;
  const result = await orderServices.createPaymentIntent(amount);

  res.status(200).json({
    success: true,
    message: 'Payment intent successfull!',
    data: result,
  });
});

const addPaymentDetails = catchAsync(async (req, res) => {
  const result = await orderServices.addPaymentDetails(req.body);

  res.status(200).json({
    success: true,
    message: 'Payment details add successfully!',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req, res) => {
  const result = await orderServices.getAllOrdersFromDB();

  res.status(200).json({
    success: true,
    message: 'Get all orders successfully!',
    data: result,
  });
});
const getSingleOrder = catchAsync(async (req, res) => {
  const result = await orderServices.getSingleOrderFromDB(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Get single order successfully!',
    data: result,
  });
});

export const orderControllers = {
  createPaymentIntent,
  addPaymentDetails,
  getAllOrders,
  getSingleOrder,
};
