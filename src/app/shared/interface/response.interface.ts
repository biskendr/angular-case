import { Product } from './product.interface';

export interface ProductResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
