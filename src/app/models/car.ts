import { Brand } from './brand';
import { CarImages } from './carImages';
import { Color } from './color';

export interface Car {
    id: number;
    colorId: number;
    brandId: number;
    modelYear: number;
    dailyPrice: number;
    description: string;
    brand: Brand;
    color: Color;
    carImages: CarImages[];
  }
