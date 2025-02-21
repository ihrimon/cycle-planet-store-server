import catchAsync from '../../utils/catchAsync';
import { orderServices } from './order.service';

const createPaymentIntent = catchAsync(async (req, res) => {
  const { amount } = req.body;
  if (!amount || isNaN(amount)) {
    throw new Error('Invalid amount: Amount must be a number');
  }

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

const getOrder = catchAsync(async (req, res) => {
  const result = await orderServices.getOrderFromDB(req.body);

  res.status(200).json({
    success: true,
    message: 'Get order successfully!',
    data: result,
  });
});



export const orderControllers = {
  createPaymentIntent,
  addPaymentDetails,
  getOrder,
};
