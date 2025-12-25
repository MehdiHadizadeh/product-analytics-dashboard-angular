import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableColumn } from '../../../core/models/table-column.model';
import { PaginationComponent } from '../pagination.component';
import { LoadingSpinnerComponent } from '../loading-spinner.component';
import { SelectOption } from '../select-component/select-component';

@Component({
  selector: 'app-data-table-component',
  standalone: false,
  templateUrl: './data-table-component.html',
  styleUrl: './data-table-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T> {
  @Input() columns: TableColumn[] = [];
  @Input() sortBy: string = '';
  @Input() order: 'asc' | 'desc' = 'asc';

  @Input() totalItems: number = 0;
  @Input() pageSize: number = 12;
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() isLoading: boolean = false;

  @Output() sort = new EventEmitter<{ property: string }>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  Math = Math;

  readonly pageSizeOptions: SelectOption[] = [
    { value: '12', label: '12' },
    { value: '24', label: '24' },
    { value: '48', label: '48' },
    { value: '100', label: '100' }
  ];

  onSort(property: string) {
    this.sort.emit({ property });
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  onPageSizeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.pageSizeChange.emit(Number(value));
  }
}