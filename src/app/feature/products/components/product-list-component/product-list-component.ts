import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { Product } from '../../../../core/models/product.model';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableColumn } from '../../../../core/models/table-column.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SelectOption } from '../../../../shared/components/select-component/select-component';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  filterForm!: FormGroup;
  categories$!: Observable<SelectOption[]>;
  productData$!: Observable<{ products: Product[]; total: number; totalPages: number }>;
  currentPage$!: Observable<number>;
  itemsPerPage$!: Observable<number>;
  filters$!: Observable<{ search: string; category: string; sortBy: string; order: 'asc' | 'desc' }>;
  loading$!: Observable<boolean>;

  readonly tableColumns: TableColumn[] = [
    { property: 'title', label: 'Product', sortable: true },
    { property: 'category', label: 'Category', sortable: false },
    { property: 'price', label: 'Price', sortable: true },
    { property: 'discountPercentage', label: 'Discount', sortable: true },
    { property: 'rating', label: 'Rating', sortable: true },
    { property: 'stock', label: 'Stock', sortable: true },
    { property: 'actions', label: 'Actions', sortable: false }
  ];

  ngOnInit(): void {
    this.initForm();
    this.categories$ = this.productService.getCategories().pipe(
      map(categories => categories.map(cat => ({
        value: cat.slug,
        label: cat.name
      })))
    );
    this.currentPage$ = this.productService.currentPage$;
    this.itemsPerPage$ = this.productService.itemsPerPage$;
    this.productData$ = this.productService.products$;
    this.filters$ = this.productService.filters$;
    this.loading$ = this.productService.loading$;

    this.setupFormListeners();
  }

  private initForm(): void {
    this.filterForm = this.fb.group({
      search: [''],
      category: ['']
    });
  }

  private setupFormListeners(): void {
    this.filterForm.get('search')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(search => {
      this.productService.updateFilters({ search });
    });

    this.filterForm.get('category')?.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(category => {
      this.productService.updateFilters({ category });
    });
  }

  onPageChange(page: number): void {
    this.productService.setPage(page);
  }

  onSort(event: { property: string }, currentFilters: any): void {
    const newOrder = currentFilters.sortBy === event.property && currentFilters.order === 'asc' ? 'desc' : 'asc';
    this.productService.updateFilters({
      sortBy: event.property,
      order: newOrder
    });
  }

  onPageSizeChange(pageSize: number): void {
    this.productService.setItemsPerPage(pageSize);
  }
}