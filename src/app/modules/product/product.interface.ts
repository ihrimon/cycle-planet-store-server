import { TBrakeType, TBrand, TCategory, TChainMaterial, TColorOptions, TDrivetrain, TForkMaterial, TFrameMaterial, THandlebarType, TSeatType, TSuspension, TTireType } from '../../interface';

export interface IDescription {
  shortDescription: string;
  longDescription: string;
  features: string[];
}

export interface ISpecification {
  frameMaterial: TFrameMaterial;
  wheelSize: number;
  tireType: TTireType;
  suspension: TSuspension;
  brakeType: TBrakeType;
  gearCount: number;
  weight: number;
  colorOptions: TColorOptions;
  handlebarType: THandlebarType;
  seatType: TSeatType;
  forkMaterial: TForkMaterial;
  drivetrain: TDrivetrain;
  chainMaterial: TChainMaterial;
  maxLoadCapacity: number;
  lighting: boolean;
  fenders: boolean;
  cargoRack: boolean;
  bottleHolder: boolean;
  warranty: string;
  countryOfOrigin: string;
}

export interface IProduct {
  name: string;
  category: TCategory;
  brand: TBrand;
  price: number;
  discountPrice: number;
  quantity: number;
  inStock: boolean;
  productImg?: string[];
  description: IDescription;
  specification: ISpecification;
  sku?: string;
  tags?: string[];
  averageRating?: number;
  reviewCount?: number;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  relatedProducts?: string[];
}
