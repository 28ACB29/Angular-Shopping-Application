import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { FavoritesComponent } from './favorites/favorites.component';
import { KeyLoggerComponent } from '../key-logger/key-logger.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations:
  [
    FavoritesComponent,
    KeyLoggerComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductViewComponent,
    SortPipe,
  ],
  imports:
  [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ],
  exports:
  [
    ProductListComponent
  ]
})

export class ProductsModule
{
  
}
