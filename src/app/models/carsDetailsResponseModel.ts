import { CarDetails } from './carDetailsModel';
import { ResponseModel } from './responseModel';

export interface CarsDetailsResponseModel extends ResponseModel{
    data: CarDetails[];
}