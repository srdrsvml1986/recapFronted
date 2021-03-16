import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarResponseModel } from '../models/carResponseModel';
import { CarsDetailsResponseModel } from '../models/carsDetailsResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  apiURL = environment.apiURL + 'cars/getcardetails';
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<CarsDetailsResponseModel>{
    return this.httpClient.get<CarsDetailsResponseModel>(this.apiURL);
  }
  getCarById(id: number): Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(environment.apiURL + 'cars/getbyid?id=' + id);
  }

}
