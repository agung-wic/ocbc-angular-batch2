import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'products', 
    children: [
      { path: '', pathMatch: 'full', component: ProductsComponent },
      { path: ':id', component: ProductDetailComponent }
    ]
  },
  // { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: '**', component: NotPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
