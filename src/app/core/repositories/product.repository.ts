import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseRepository } from './base.repository';
import { Product, ApiResponse, IProduct, ProductQueryParams, Category } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductRepository extends BaseRepository<Product> {
    private readonly apiUrl = 'https://dummyjson.com/products';
    private http = inject(HttpClient);

    getAll(params?: ProductQueryParams): Observable<Product[]> {
        let httpParams = new HttpParams();

        if (params?.limit) httpParams = httpParams.set('limit', params.limit.toString());
        if (params?.skip) httpParams = httpParams.set('skip', params.skip.toString());
        if (params?.sortBy) httpParams = httpParams.set('sortBy', params.sortBy);
        if (params?.order) httpParams = httpParams.set('order', params.order);

        let url = this.apiUrl;
        if (params?.search) {
            url = `${this.apiUrl}/search`;
            httpParams = httpParams.set('q', params.search);
        } else if (params?.category) {
            url = `${this.apiUrl}/category/${params.category}`;
        }

        return this.http.get<ApiResponse<IProduct>>(url, { params: httpParams }).pipe(
            map(response => response.products.map(p => new Product(p)))
        );
    }

    getById(id: number): Observable<Product> {
        return this.http.get<IProduct>(`${this.apiUrl}/${id}`).pipe(
            map(data => new Product(data))
        );
    }

    getAllWithPagination(params?: ProductQueryParams): Observable<ApiResponse<Product>> {
        let httpParams = new HttpParams();

        if (params?.limit) httpParams = httpParams.set('limit', params.limit.toString());
        if (params?.skip) httpParams = httpParams.set('skip', params.skip.toString());
        if (params?.sortBy) httpParams = httpParams.set('sortBy', params.sortBy);
        if (params?.order) httpParams = httpParams.set('order', params.order);

        let url = this.apiUrl;
        if (params?.search) {
            url = `${this.apiUrl}/search`;
            httpParams = httpParams.set('q', params.search);
        } else if (params?.category) {
            url = `${this.apiUrl}/category/${params.category}`;
        }

        return this.http.get<ApiResponse<IProduct>>(url, { params: httpParams }).pipe(
            map(response => ({
                ...response,
                products: response.products.map(p => new Product(p))
            }))
        );
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.apiUrl}/categories`);
    }
}