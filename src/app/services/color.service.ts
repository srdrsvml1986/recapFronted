import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarsDetailsResponseModel } from '../models/carsDetailsResponseModel';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiURL = environment.apiURL + 'colors/getall';
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiURL);
  }
  getCarsByColorId(colorId: number): Observable<CarsDetailsResponseModel>{
    return this.httpClient.get<CarsDetailsResponseModel>(environment.apiURL + 'Colors/getcars?colorId=' + colorId);
  }
}
