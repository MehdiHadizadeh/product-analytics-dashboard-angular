import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductRepository } from '../../../core/repositories/product.repository';
import { Category, Product, ProductFilters, ProductQueryParams } from '../../../core/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productRepository = inject(ProductRepository);

    private filtersSubject = new BehaviorSubject<ProductFilters>({
        search: '',
        category: '',
        sortBy: 'title',
        order: 'asc'
    });

    private currentPageSubject = new BehaviorSubject<number>(1);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private itemsPerPageSubject = new BehaviorSubject<number>(12);

    filters$ = this.filtersSubject.asObservable();
    currentPage$ = this.currentPageSubject.asObservable();
    loading$ = this.loadingSubject.asObservable();
    itemsPerPage$ = this.itemsPerPageSubject.asObservable();

    products$ = combineLatest([
        this.filters$,
        this.currentPage$,
        this.itemsPerPage$
    ]).pipe(
        map(([filters, page, itemsPerPage]) => ({
            limit: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            search: filters.search || undefined,
            category: filters.category || undefined,
            sortBy: filters.sortBy,
            order: filters.order
        } as ProductQueryParams)),
        switchMap(params => {
            this.loadingSubject.next(true);
            return this.productRepository.getAllWithPagination(params).pipe(
                catchError(error => {
                    console.error('Error fetching products:', error);
                    return of({ products: [], total: 0 });
                }),
                finalize(() => this.loadingSubject.next(false))
            );
        }),
        map(response => ({
            products: response.products,
            total: response.total,
            totalPages: Math.ceil(response.total / this.itemsPerPageSubject.value)
        }))
    );

    getProductById(id: number): Observable<Product> {
        return this.productRepository.getById(id);
    }

    getCategories(): Observable<Category[]> {
        return this.productRepository.getCategories();
    }

    updateFilters(filters: Partial<ProductFilters>): void {
        this.filtersSubject.next({ ...this.filtersSubject.value, ...filters });
        this.currentPageSubject.next(1);
    }

    setPage(page: number): void {
        this.currentPageSubject.next(page);
    }

    setItemsPerPage(itemsPerPage: number): void {
        this.itemsPerPageSubject.next(itemsPerPage);
        this.currentPageSubject.next(1);
    }

    getCurrentItemsPerPage(): number {
        return this.itemsPerPageSubject.value;
    }
}