import {
  TBrakeType,
  TBrand,
  TCategory,
  TChainMaterial,
  TColorOptions,
  TDrivetrain,
  TForkMaterial,
  TFrameMaterial,
  TGender,
  THandlebarType,
  TOrderStatus,
  TPaymentMethod,
  TSeatType,
  TSuspension,
  TTireType,
  TUserRole,
  TUserStatus,
} from '../interface';

export const UserRole: TUserRole[] = ['admin', 'customer'];
export const UserStatus: TUserStatus[] = ['active', 'blocked'];
export const Gender: TGender[] = ['Male', 'Female', 'Other'];

export const CategoryType: TCategory[] = [
  'Mountain',
  'Road',
  'Hybrid',
  'Bmx',
  'Electric',
  'Gravel',
  'Touring',
  'Cyclocross',
  'Track',
  'Kids',
];

export const BrandType: TBrand[] = [
  'Trek',
  'Specialized',
  'Giant',
  'Cannondale',
  'Scott',
  'Bianchi',
  'Cervelo',
  'Santa_cruz',
  'Orbea',
  'Merida',
];

export const PaymentMethod: TPaymentMethod[] = ['Stripe'];

export const OrderStatus: TOrderStatus[] = [
  'Processing',
  'Shipped',
  'Delivered',
  'Cancelled',
];

export const customerSearchableFields = ['name', 'email', 'status'];
export const productSearchableFields = ['name', 'brand', 'type'];

// product specification
export const FrameMaterial: TFrameMaterial[] = [
  'Aluminum',
  'Steel',
  'Carbon Fiber',
  'Titanium',
];
export const TireType: TTireType[] = ['Tubeless', 'Tube'];
export const Suspension: TSuspension[] = [
  'Rigid',
  'Front Suspension',
  'Full Suspension',
];
export const BrakeType: TBrakeType[] = [
  'Disc Brake',
  'V-Brake',
  'Coaster Brake',
  'Hydraulic Brake',
];
export const ColorOptions: TColorOptions[] = ['Red', 'Blue', 'Black'];
export const HandlebarType: THandlebarType[] = [
  'Flat',
  'Drop',
  'Bullhorn',
  'Aero',
];
export const SeatType: TSeatType[] = [
  'Standard',
  'Gel Cushion',
  'Racing',
  'Comfort',
];
export const ForkMaterial: TForkMaterial[] = [
  'Aluminum',
  'Carbon Fiber',
  'Steel',
];
export const Drivetrain: TDrivetrain[] = [
  'Single Speed',
  'Derailleur',
  'Internal Hub',
];
export const ChainMaterial: TChainMaterial[] = ['Steel', 'Nickel-Plated'];
