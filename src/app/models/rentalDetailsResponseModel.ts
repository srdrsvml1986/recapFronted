import { RentalDetailsModel } from './rentalDetailsModel';
import { ResponseModel } from './responseModel';

export interface RentalDetailsResponseModel extends ResponseModel{
    data: RentalDetailsModel[];
}
