import CustomError from '../../utils/CustomError';
import { ICustomer } from './customer.interface';
import { Customer } from './customer.model';
import QueryBuilder from '../../utils/QueryBuilder';
import { customerSearchableFields } from '../../constants';

const getAllCustomersFromDB = async (query: Record<string, unknown>) => {
  const customerQuery = new QueryBuilder(Customer.find(), query)
    .search(customerSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await customerQuery.countTotal();
  const result = await customerQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSpecificCustomerFromDB = async (id: string) => {
  return await Customer.findById(id);
};

const updateCustomerIntoDB = async (
  id: string,
  payload: Partial<ICustomer>
) => {
  const user = await Customer.findById(id);
  if (!user) throw new CustomError(404, 'Customer doesn"t exist!');

  return await Customer.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteCustomerFromDB = async (id: string) => {
  return await Customer.findByIdAndDelete(id);
};

const getAuthenticateCustomer = async (userId: string) => {
  return await Customer.findOne({ id: userId });
};

export const userServices = {
  getAllCustomersFromDB,
  getSpecificCustomerFromDB,
  updateCustomerIntoDB,
  deleteCustomerFromDB,
  getAuthenticateCustomer,
};
