import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { OfferComponent } from './offer/offer.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'payments', component: PaymentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
