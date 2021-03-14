import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetailsResponseModel } from '../models/carDetailsResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  apiURL = environment.apiURL + 'cars/getcardetails';
  constructor(private httpClient: HttpClient) { }

  getCar(): Observable<CarDetailsResponseModel>{
    return this.httpClient.get<CarDetailsResponseModel>(this.apiURL);
  }


}
