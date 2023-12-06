import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProductService } from '../../services/product.service';
import { Product } from '../../shared/interface/product.interface';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 100;
  buttons: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    const skip = (this.currentPage - 1) * this.itemsPerPage;
    try {
      const data = await this.productService.getProducts(
        this.itemsPerPage,
        skip
      );
      this.products = data;
    } catch (error) {
      console.error('Error loading products', error);
    }
  }

  async prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      await this.getProducts();
    }
  }

  async nextPage() {
    if (this.totalItems / this.itemsPerPage > this.currentPage) {
      this.currentPage++;
      await this.getProducts();
    }
  }

  async firstPage() {
    if (this.currentPage !== 1) {
      this.currentPage = 1;
      await this.getProducts();
    }
  }
  async lastPage() {
    const lastPage = this.totalItems / this.itemsPerPage;
    if (this.currentPage !== lastPage) {
      this.currentPage = lastPage;
      await this.getProducts();
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }
}
