import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetailsModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
cars: CarDetails[] = [];
dataLoaded = false;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(){
    this.carService.getCar().subscribe(response => {
      console.log(response.data);
      this.cars = response.data,
      this.dataLoaded = true;
    });
  }

}

