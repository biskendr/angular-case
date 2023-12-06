import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../shared/interface/product.interface';
import { ProductResponse } from '../shared/interface/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  async getProducts(limit: number, skip: number): Promise<Product[]> {
    const apiUrl = `${this.BASE_URL}/products/?limit=${limit}&skip=${skip}`;

    try {
      const response = await this.http.get<ProductResponse>(apiUrl).toPromise();
      const products = response?.products || [];
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}
