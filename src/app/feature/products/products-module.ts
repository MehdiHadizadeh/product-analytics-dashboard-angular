import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';
import { ProductChartComponent } from './components/product-chart-component/product-chart-component';
import { ProductDetailComponent } from './components/product-detail-component/product-detail-component';
import { ProductListComponent } from './components/product-list-component/product-list-component';
import { ProductsRoutingModule } from './products-routing-module';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductChartComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    BaseChartDirective,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }