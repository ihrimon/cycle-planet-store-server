import { productSearchableFields } from '../../constants';
import QueryBuilder from '../../utils/QueryBuilder';
import { uploadImageToCloudinary } from '../../utils/uploadImage';
import { IProduct } from './product.interface';
import { Product } from './product.model';

// add a new product 
const addProductIntoDB = async (
  files: Express.Multer.File[],
  payload: IProduct
) => {
  const result = await Promise.all(
    files.map((file) => uploadImageToCloudinary(file.path))
  );
  payload.productImg = result;
  return await Product.create(payload);
};

// fetch all products
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await productQuery.countTotal();
  const result = await productQuery.modelQuery;

  return {
    meta,
    result,
  };
};

// fetch specific product
const getSpecificProductFromDB = async (id: string) => {
  return await Product.findById(id);
};

// update a product
const updatedProductIntoDB = async (id: string, data: IProduct) => {
  return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

// delete a product
const deletedProductFromDB = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export const productServices = {
  addProductIntoDB,
  getAllProductsFromDB,
  getSpecificProductFromDB,
  updatedProductIntoDB,
  deletedProductFromDB,
};
