import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail-component/product-detail-component';
import { ProductListComponent } from './components/product-list-component/product-list-component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    provideCharts(withDefaultRegisterables())
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }