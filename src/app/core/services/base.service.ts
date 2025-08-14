import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {
  protected fullUrl: string;

  constructor(
    protected http: HttpClient,
    public resourcePath: string
  ) {
    this.fullUrl = `${environment.API_URL}/${resourcePath}`;
  }

  getAll() {
    return this.http.get<T[]>(this.fullUrl);
  }

  getById(id: number | string) {
    return this.http.get<T>(`${this.fullUrl}/${id}`);
  }

  create(item: T) {
    return this.http.post<T>(this.fullUrl, item);
  }

  update(id: number | string, item: Partial<T>) {
    return this.http.put<T>(`${this.fullUrl}/${id}`, item);
  }

  delete(id: number | string) {
    return this.http.delete(`${this.fullUrl}/${id}`);
  }
}
