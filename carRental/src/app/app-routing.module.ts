import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [{
  path: "", component: HomeComponent,
},
{
  path: "cars", component: CarsComponent,
},
{
  path: "contact", component: ContactComponent,


}, {
  path: "offer", component: OfferComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
