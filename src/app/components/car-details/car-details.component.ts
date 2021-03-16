import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}
  car: Car = {
    dailyPrice: 0,
    id: 0,
    colorId: 0,
    brandId: 0,
    description: '',
    modelYear: 0,
    color: { id: 0, name: '' },
    brand: { id: 0, name: '', model: '' },
    carImages: [{ carId: 0, date: new Date(), id: 0, imagePath: '' }],
  };
  dataLoaded = false;
  say = 1;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getCarById(params.id);
      }
    });
    this.say = 1;
  }

  getCarById(id: any) {
    this.carService.getCarById(id).subscribe((response) => {
      (this.car = response.data), (this.dataLoaded = true);
    });
  }

}
