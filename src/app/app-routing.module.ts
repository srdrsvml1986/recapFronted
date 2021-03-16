import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'Brands', component: BrandComponent},
  {path: 'Cars', component: CarComponent},
  {path: 'Cars/:id', component: CarDetailsComponent},
  {path: 'Colors', component: ColorComponent},
  {path: 'Rentals', component: RentalComponent},
  {path: 'Customers', component: CustomerComponent},
  {path: 'Brands/Cars/:brandId', component: BrandComponent},
  {path: 'Colors/Cars/:colorId', component: ColorComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
