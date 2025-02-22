import catchAsync from '../../utils/catchAsync';
import { customerServices } from './customer.service';

const createCustomer = catchAsync(async (req, res) => {
  const result = await customerServices.createCustomerIntoDB(req.body);

  res.status(201).json({
    success: true,
    message: 'Customer created successfully!',
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await customerServices.getAllCustomersFromDB();

  res.status(200).json({
    success: true,
    message: 'Customers retrieved successfully!',
    data: result,
  });
});

const getCustomerById = catchAsync(async (req, res) => {
  const result = await customerServices.getCustomerByIdFromDB(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Customer retrieved successfully!',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const result = await customerServices.updateCustomerIntoDB(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    message: 'Customer updated successfully!',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  await customerServices.deleteCustomerFromDB(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Customer deleted successfully!',
  });
});

export const customerControllers = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
