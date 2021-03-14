import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: BrandComponent},
  {path: 'Brands', component: BrandComponent},
  {path: 'Cars', component: CarComponent},
  {path: 'Colors', component: ColorComponent},
  {path: 'Rentals', component: RentalComponent},
  {path: 'Customers', component: CustomerComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
