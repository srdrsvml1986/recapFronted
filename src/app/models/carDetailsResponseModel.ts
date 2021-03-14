import { CarDetails } from './carDetailsModel';
import { ResponseModel } from './responseModel';

export interface CarDetailsResponseModel extends ResponseModel{
    data: CarDetails[];
}
