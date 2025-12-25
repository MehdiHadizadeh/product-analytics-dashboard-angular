export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export class Product implements IProduct {
    id!: number;
    title!: string;
    description!: string;
    price!: number;
    discountPercentage!: number;
    rating!: number;
    stock!: number;
    brand!: string;
    category!: string;
    thumbnail!: string;
    images!: string[];

    constructor(data: IProduct) {
        Object.assign(this, data);
    }

    get finalPrice(): number {
        return this.price - (this.price * this.discountPercentage / 100);
    }

    get monthlySalesData(): number[] {
        return Array.from({ length: 12 }, () =>
            Math.floor(Math.random() * this.stock)
        );
    }
}

export interface ApiResponse<T> {
    products: T[];
    total: number;
    skip: number;
    limit: number;
}

export interface ProductQueryParams {
    limit?: number;
    skip?: number;
    search?: string;
    category?: string;
    sortBy?: string;
    order?: 'asc' | 'desc';
}

export interface ProductFilters {
    search: string;
    category: string;
    sortBy: string;
    order: 'asc' | 'desc';
}

export interface Category {
    slug: string;
    name: string;
    url: string;
}