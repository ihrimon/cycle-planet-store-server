import { productSearchableFields } from '../../constants';
import QueryBuilder from '../../utils/QueryBuilder';
import { uploadImageToCloudinary } from '../../utils/uploadImage';
import { IProduct } from './product.interface';
import { Product } from './product.model';

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

const getSpecificProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updatedProductIntoDB = async (id: string, data: IProduct) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

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
