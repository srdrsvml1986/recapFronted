import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetails } from 'src/app/models/carDetailsModel';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  cars: CarDetails[] = [];
  dataLoaded = false;

  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.brandId) {
        this.getCars(params.brandId);
        this.brands = [];
      }else{
        this.getBrands();
        this.cars = [];
      }
  });
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
  getCars(brandId: number){
    this.brandService.getCarsByBrandId(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
