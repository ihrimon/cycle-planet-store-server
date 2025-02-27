import { TGender, TOrderStatus, TPaymentMethod } from '../../interface';

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface ICustomerOrder {
  orderId: string;
  date: Date;
  items: string[];
  totalAmount: number;
  transactionId?: string;
  status: TOrderStatus;
}

export interface ICustomer {
  fullName: string;
  username: string;
  email: string;
  phone?: string;
  profileImage?: string;
  bio?: string;
  gender?: TGender;
  birthDate?: string;
  billingAddress: IAddress;
  shippingAddress?: IAddress;
  paymentMethods?: TPaymentMethod;
  orderHistory?: ICustomerOrder[];
  wishlist?: string[];
}
