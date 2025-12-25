import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner.component';
import { ErrorMessageComponent } from './components/error-message.component';
import { PaginationComponent } from './components/pagination.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { StockColorPipe } from './pipes/stock-color.pipe';
import { DataTableComponent } from './components/data-table-component/data-table-component';
import { SelectComponent } from './components/select-component/select-component';
import { InputComponent } from './components/input-component/input-component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ErrorMessageComponent,
    PaginationComponent,
    CurrencyFormatPipe,
    StockColorPipe,
    DataTableComponent,
    SelectComponent,
    InputComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    LoadingSpinnerComponent,
    ErrorMessageComponent,
    PaginationComponent,
    CurrencyFormatPipe,
    StockColorPipe,
    CommonModule,
    DataTableComponent,
    SelectComponent,
    InputComponent
  ]
})
export class SharedModule { }