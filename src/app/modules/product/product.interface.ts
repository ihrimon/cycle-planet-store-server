import {
  TBrakeType,
  TBrand,
  TCategory,
  TChainMaterial,
  TColorOptions,
  TDrivetrain,
  TFrameMaterial,
  THandlebarType,
  TSeatType,
  TSuspension,
  TTireType,
} from '../../interface';

export interface IDescription {
  shortDescription: string;
  longDescription: string;
  features: string[];
  warrantyInfo: string;
}

export interface ISpecification {
  weight: number;
  maxLoadCapacity: number;
  warranty: number;
  wheelSize: number;
  gearCount: number;
  frameMaterial: TFrameMaterial;
  tireType: TTireType;
  suspension: TSuspension;
  brakeType: TBrakeType;
  colorOptions: TColorOptions;
  handlebarType: THandlebarType;
  seatType: TSeatType;
  drivetrain: TDrivetrain;
  chainMaterial: TChainMaterial;
  lighting: boolean;
  fenders: boolean;
  cargoRack: boolean;
  bottleHolder: boolean;
}

// product interface
export interface IProduct {
  name: string;
  category: TCategory;
  brand: TBrand;
  price: number;
  discountPrice?: number;
  quantity: number;
  productImg: string[];
  description?: IDescription;
  specification?: ISpecification;
  sku?: string;
  tags?: string[];
  averageRating?: number;
  reviewCount?: number;
  inStock?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
  addDate?: Date; 
}
