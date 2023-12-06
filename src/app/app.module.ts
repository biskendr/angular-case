import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Footer } from './components/footer/footer.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent, ProductListComponent, Footer],
  imports: [BrowserModule, HttpClientModule, DragDropModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
