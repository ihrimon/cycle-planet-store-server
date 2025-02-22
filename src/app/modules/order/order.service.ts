import config from '../../config';
import Stripe from 'stripe';
import { Order } from './order.model';
import { IOrder } from './order.interface';

const createPaymentIntent = async(amount: number) => {
  const stripe = new Stripe(config.stripe_secret_key as string);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: (amount * 100),
    currency: 'usd',
    payment_method_types: ['card'],
  });

  return {clientSecret: paymentIntent.client_secret}
}

const addPaymentDetails = async(payload: IOrder) => {
  return await Order.create(payload);
}

const getAllOrdersFromDB = async () => {
  return await Order.find();
};

const getSingleOrderFromDB = async (id: string) => {
  return await Order.findById(id);
};

export const orderServices = {
  createPaymentIntent,
  addPaymentDetails,
  getAllOrdersFromDB,
  getSingleOrderFromDB,};
