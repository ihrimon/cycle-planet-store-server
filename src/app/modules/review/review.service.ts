import CustomError from '../../utils/CustomError';
import { IReview } from './review.interface';
import { Review } from './review.model';
import QueryBuilder from '../../utils/QueryBuilder';
import { IUser } from '../customer/customer.interface';

const getAllReviewsFromDB = async (query: Record<string, unknown>) => {
  const reviewQuery = new QueryBuilder(Review.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await reviewQuery.countTotal();
  const result = await reviewQuery.modelQuery;

  return { meta, result };
};

const getSpecificReviewFromDB = async (id: string) => {
  return await Review.findById(id).populate('reviewer productId');
};

const createReviewIntoDB = async (payload: IReview) => {
  return await Review.create(payload);
};

const updateReviewIntoDB = async (id: string, payload: Partial<IReview>) => {
  const review = await Review.findById(id);
  if (!review) throw new CustomError(404, 'Review not found!');

  return await Review.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteReviewFromDB = async (id: string) => {
  return await Review.findByIdAndDelete(id);
};

const likeReviewIntoDB = async (id: string) => {
  const review = await Review.findById(id);
  if (!review) throw new CustomError(404, 'Review not found!');

  review.likes! += 1;
  return await review.save();
};

const addReplyToReviewIntoDB = async (
  id: string,
  reply: { replyUser: Partial<IUser>; replyText: string }
) => {
  const review = await Review.findById(id);
  if (!review) throw new CustomError(404, 'Review not found!');

  review.replies!.push({ ...reply, likes: 0 });
  return await review.save();
};

export const reviewServices = {
  getAllReviewsFromDB,
  getSpecificReviewFromDB,
  createReviewIntoDB,
  updateReviewIntoDB,
  deleteReviewFromDB,
  likeReviewInDB: likeReviewIntoDB,
  addReplyToReviewIntoDB,
};
