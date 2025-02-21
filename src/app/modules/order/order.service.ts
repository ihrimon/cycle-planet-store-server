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

const addPaymentDetails = async(payload: {transactionId: string, date: Date, status: string}) => {
  return await Order.create(payload);
}
const getOrderFromDB = async(payload: IOrder) => {
  return await Order.find();
}

export const orderServices = {
  createPaymentIntent,
  addPaymentDetails,
  getOrderFromDB,
};
