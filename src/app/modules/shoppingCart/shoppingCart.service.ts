import { IShoppingCart } from './shoppingCart.interface';
import { ShoppingCart } from './shoppingCart.model';

const addCartIntoDB = async (payload: IShoppingCart) => {
  return await ShoppingCart.create(payload);
};

const getAllCartFromDB = async () => {
  return await ShoppingCart.find()
    .populate('customer', 'name email -_id')
    .populate('product', 'name productImg price discountPrice -_id');
};

const updateCartIntoDB = async (
  id: string,
  payload: Partial<IShoppingCart>
) => {
  return await ShoppingCart.findByIdAndUpdate(id, payload, { new: true });
};

const deleteCartFromDB = async (id: string) => {
  return await ShoppingCart.findByIdAndDelete(id);
};

export const reviewServices = {
  getAllCartFromDB,
  addCartIntoDB,
  updateCartIntoDB,
  deleteCartFromDB,
};
