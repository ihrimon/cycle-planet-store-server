export type TUserRole = 'admin' | 'customer';
export type TUserStatus = 'active' | 'blocked';

export type TCustomerStatus = 'in-progress' | 'blocked';
export type TGender = 'Male' | 'Female' | 'Other';

export type TCategory =
  | 'Mountain'
  | 'Road'
  | 'Hybrid'
  | 'Bmx'
  | 'Electric'
  | 'Gravel'
  | 'Touring'
  | 'Cyclocross'
  | 'Cargo'
  | 'Track'
  | 'Kids';
export type TBrand =
  | 'Trek'
  | 'Specialized'
  | 'Giant'
  | 'Cannondale'
  | 'Scott'
  | 'Bianchi'
  | 'Cervelo'
  | 'Santa_cruz'
  | 'Orbea'
  | 'Merida';

export type TPaymentMethod = 'Stripe';

export type TOrderStatus = 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

// product specification
export type TFrameMaterial = 'Aluminum' | 'Steel' | 'Carbon Fiber' | 'Titanium';
export type TTireType = 'Tubeless' | 'Tube';
export type TSuspension = 'Rigid' | 'Front Suspension' | 'Full Suspension';
export type TBrakeType =
  | 'Disc Brake'
  | 'V-Brake'
  | 'Coaster Brake'
  | 'Hydraulic Brake';
export type TColorOptions = 'Red' | 'Blue' | 'Black';
export type THandlebarType = 'Flat' | 'Drop' | 'Bullhorn' | 'Aero';
export type TSeatType = 'Standard' | 'Gel Cushion' | 'Racing' | 'Comfort';
export type TForkMaterial = 'Aluminum' | 'Carbon Fiber' | 'Steel';
export type TDrivetrain = 'Single Speed' | 'Derailleur' | 'Internal Hub';
export type TChainMaterial = 'Steel' | 'Nickel-Plated';
