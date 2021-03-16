import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetailsModel';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})

export class ColorComponent implements OnInit {
  colors: Color[] = [];
  cars: CarDetails[] = [];
  dataLoaded = false;
  constructor(private colorService: ColorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.colorId) {
        this.getCars(params.colorId);
        this.colors = [];
      }else{
        this.getColors();
        this.cars = [];
      }
  });
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
       this.colors = response.data,
       this.dataLoaded = true;
    });
  }
  getCars(colorId: number){
    this.colorService.getCarsByColorId(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
