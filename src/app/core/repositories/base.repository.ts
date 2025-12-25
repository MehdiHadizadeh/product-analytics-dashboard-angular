import { Observable } from 'rxjs';

export interface IRepository<T> {
    getAll(params?: any): Observable<T[]>;
    getById(id: number): Observable<T>;
}

export abstract class BaseRepository<T> implements IRepository<T> {
    abstract getAll(params?: any): Observable<T[]>;
    abstract getById(id: number): Observable<T>;
}