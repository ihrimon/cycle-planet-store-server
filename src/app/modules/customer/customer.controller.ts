import catchAsync from '../../utils/catchAsync';
import { userServices } from './customer.service';

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await userServices.getAllCustomersFromDB(req.body);

  res.status(201).json({
    success: true,
    message: 'Users are retrived successfully!',
    data: result,
  });
});

const getSpecificUser = catchAsync(async (req, res) => {
  const result = await userServices.getSpecificCustomerFromDB(req.params.id);

  res.status(200).json({
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const result = await userServices.updateCustomerIntoDB(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    message: 'User is updated succesfully',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  await userServices.deleteCustomerFromDB(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Student is deleted succesfully',
    data: null,
  });
});

const getAuthenticatedCustomer = catchAsync(async (req, res) => {
  const { userId } = req.user;
  const result = await userServices.getAuthenticateCustomer(userId);

  res.status(200).json({
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  });
});

export const userControllers = {
  getAllCustomers,
  getSpecificUser,
  updateCustomer,
  deleteCustomer,
  getAuthenticatedCustomer,
};
