import {
  TBrand,
  TCategory,
  TCustomerStatus,
  TStock,
  TUserRole,
  TUserStatus,
} from '../interface';

export const UserRole: TUserRole[] = ['admin', 'customer'];

export const UserStatus: TUserStatus[] = ['active', 'blocked'];

export const CustomerStatus: TCustomerStatus[] = ['in-progress', 'blocked'];

export const CategoryType: TCategory[] = [
  'mountain',
  'road',
  'hybrid',
  'bmx',
  'electric',
  'gravel',
  'touring',
  'cyclocross',
  'cargo',
  'track',
  'kids',
];

export const BrandType: TBrand[] = [
  'trek',
  'specialized',
  'giant',
  'cannondale',
  'scott',
  'bianchi',
  'cervelo',
  'santa_cruz',
  'orbea',
  'merida',
];

export const Stock: TStock[] = ['in-stock', 'out-stock'];

export const customerSearchableFields = ['name', 'email', 'status'];

export const productSearchableFields = ['name', 'brand', 'type'];
