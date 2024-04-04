import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { KeyLoggerComponent } from '../key-logger/key-logger.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations:
  [
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
    FavoritesComponent,
    ProductViewComponent,
    KeyLoggerComponent
  ],
  imports:
  [
    CommonModule
  ],
  exports:
  [
    ProductListComponent
  ]
})
export class ProductsModule { }
