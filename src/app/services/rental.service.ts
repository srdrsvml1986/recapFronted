import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RentalDetailsResponseModel } from '../models/rentalDetailsResponseModel';

@Injectable({
  providedIn: 'root'
})

export class RentalService {
  apiURL = environment.apiURL + 'rentals/getrentaldetails';
  constructor(private httpClient: HttpClient) { }

  getRental(): Observable<RentalDetailsResponseModel>{
return this.httpClient.get<RentalDetailsResponseModel>(this.apiURL);

  }
}
